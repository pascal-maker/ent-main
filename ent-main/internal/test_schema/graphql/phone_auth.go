// Code generated by github.com/lolopinto/ent/ent.

package graphql

import (
	"context"
	"database/sql"
	"math/rand"
	"strconv"
	"strings"
	"time"

	"github.com/lolopinto/ent/ent/auth/phonenumber"
	"github.com/lolopinto/ent/ent/cache"
	field "github.com/lolopinto/ent/ent/field/phonenumber"
	"github.com/lolopinto/ent/internal/test_schema/models"
	"github.com/lolopinto/ent/internal/test_schema/testschemaviewer"
)

// TODO (developer): this should be stored in an environment variable instead
var phoneSigningKey = []byte("TqJHUXC3222L4UFaSoMdo6UxwOZKs76ReYgPhLmI2Dwff6Vig6h3WGieSc8RgTs")

// TODO (developer): we default to storing in memory. feel free to change to redis or provide a different validator
var memory = cache.NewMemory(10*time.Minute, 10*time.Minute)
var phoneAuthHandler = &phonenumber.PhonePinAuth{
	SigningKey:        phoneSigningKey,
	IDFromPhoneNumber: models.LoadUserIDFromPhoneNumber,
	VCFromID:          testschemaviewer.NewViewerContext,
	Validator: &phonenumber.MemoryValidator{ // can change validator here
		Memory: memory,
	},
	// only allow tokens to be extended in last 10 minutes.
	ExtendTokenDuration: 10 * time.Minute,
	// can provide more options here. e.g. change Duration or custom claims method
}

// TODO (developer):
// To have the token which AuthPhoneNumber returns work, need to register this handler somewhere.
// Copy this line and move to an init() function in root.go or other file in graphql/ folder
// We can't automatically generate this so onus on the developer
// Also need: import "github.com/lolopinto/ent/ent/auth"
// auth.Register("phone_auth", phoneAuthHandler)

// AuthPhoneNumber takes a phone number and pin and logs the user in if valid
// @graphql authPhoneNumber Mutation
// @graphqlreturn token
func AuthPhoneNumber(ctx context.Context, phoneNumber, pin string) (string, error) {
	identity, err := phoneAuthHandler.Authenticate(ctx, phoneNumber, pin)
	if err != nil {
		return "", err
	}
	// TODO map to graphql viewer object and expose graphql viewer here by default.
	return identity.Token, nil
}

// SendSMS takes a phone number and pin and "sends an sms" to the user
// Actually, it just returns the pin now but we'll have twilio, other integrations here later
// @graphql authSendSMS Mutation
// @graphqlreturn pin
func SendSMS(ctx context.Context, phoneNumber string) (string, error) {
	// TODO returning this is temporary until we actually have integration with something that can send this PIN...
	pin := generateRandCode()

	formatted, err := formattedNumber(phoneNumber)
	if err != nil {
		return "", err
	}
	memory.Set(phonenumber.DefaultKey(formatted), pin, time.Minute*10)
	return pin, nil
}

// CheckCanSigninWithPhoneNumber returns a boolean indicating if phoneNumber is available
// TODO (developer): may make sense to remove this if you don't want to expose an API method that can be easily
// hit to check this without rate limits (or add rate limiting)
// @graphql authCheckAvailablePhoneNumber Mutation
// @graphqlreturn available
func CheckCanSigninWithPhoneNumber(ctx context.Context, phoneNumber string) (bool, error) {
	formatted, err := formattedNumber(phoneNumber)
	if err != nil {
		return false, err
	}
	id, err := models.LoadUserIDFromPhoneNumber(formatted)
	if err != nil && err != sql.ErrNoRows {
		return false, err
	}
	return id == "", nil
}

// ValidAuthCredentials takes phone number and pin and validates that they are valid for a new user.
// Does *not* clear the PIN
// @graphql authValidCredentials Mutation
// @graphqlreturn available
func ValidAuthCredentials(ctx context.Context, phoneNumber, pin string) (bool, error) {
	return phoneAuthHandler.AvailableAndValid(ctx, phoneNumber, pin)
}

// AuthPhoneLogout logs the user out.
// @graphql authSignout Mutation
// TODO (developer): rename if you don't have conflicts?
func AuthPhoneLogout(ctx context.Context) {
	// nothing to do here since stateless session
	// needs to be handled on the client
	// when there's a refresh token, we'll kill it
}

// AuthPhoneExtendToken takes the current auth token and returns a new token
// if current token is valid
// @graphql authPhoneToken Mutation
// @graphqlreturn token
func AuthPhoneExtendToken(ctx context.Context, token string) (string, error) {
	return phoneAuthHandler.ExtendTokenExpiration(token)
}

func generateRandCode() string {
	rand.Seed(time.Now().UnixNano())

	var sb strings.Builder
	for i := 0; i < 6; i++ {
		sb.WriteString(strconv.Itoa(rand.Intn(9)))
	}
	return sb.String()
}

func formattedNumber(phoneNumber string) (string, error) {
	return field.Type().ValidateAndFormat(phoneNumber)
}
