// Code generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

package contact_email

import (
	"github.com/lolopinto/ent/ent"
	"github.com/lolopinto/ent/ent/actions"
	"github.com/lolopinto/ent/ent/field"
	"github.com/lolopinto/ent/ent/viewer"
	"github.com/lolopinto/ent/internal/test_schema/models"
	"github.com/lolopinto/ent/internal/test_schema/models/configs"
)

type ContactEmailMutationBuilder struct {
	requiredFields   []string
	builder          *actions.EntMutationBuilder
	contactEmail     *models.ContactEmail
	emailAddress     *string
	label            *string
	contactID        *string
	contactIDBuilder ent.MutationBuilder
}

func NewMutationBuilder(
	v viewer.ViewerContext,
	operation ent.WriteOperation,
	requiredFields []string,
	opts ...func(*actions.EntMutationBuilder),
) *ContactEmailMutationBuilder {
	contactEmail := models.NewContactEmailLoader(v).GetNewContactEmail()

	ret := &ContactEmailMutationBuilder{
		requiredFields: requiredFields,
		contactEmail:   contactEmail,
	}
	opts = append(opts, actions.BuildFields(ret.buildFields))
	b := actions.NewMutationBuilder(
		v,
		operation,
		contactEmail,
		&configs.ContactEmailConfig{},
		opts...,
	)
	ret.builder = b
	return ret
}

func (b *ContactEmailMutationBuilder) SetEmailAddress(emailAddress string) *ContactEmailMutationBuilder {
	b.emailAddress = &emailAddress
	return b
}

func (b *ContactEmailMutationBuilder) SetLabel(label string) *ContactEmailMutationBuilder {
	b.label = &label
	return b
}

func (b *ContactEmailMutationBuilder) SetContactID(contactID string) *ContactEmailMutationBuilder {
	b.contactID = &contactID
	return b
}

func (b *ContactEmailMutationBuilder) SetContactIDBuilder(builder ent.MutationBuilder) *ContactEmailMutationBuilder {
	b.contactIDBuilder = builder
	return b
}

func (b *ContactEmailMutationBuilder) GetEmailAddress() string {
	if b.emailAddress == nil {
		return ""
	}
	return *b.emailAddress
}

func (b *ContactEmailMutationBuilder) GetLabel() string {
	if b.label == nil {
		return ""
	}
	return *b.label
}

func (b *ContactEmailMutationBuilder) GetContactID() string {
	if b.contactID == nil {
		return ""
	}

	if b.contactIDBuilder != nil {
		return b.contactIDBuilder.GetPlaceholderID()
	}
	return *b.contactID
}

func (b *ContactEmailMutationBuilder) GetContactIDBuilder() ent.MutationBuilder {
	return b.contactIDBuilder
}

func (b *ContactEmailMutationBuilder) GetViewer() viewer.ViewerContext {
	return b.builder.GetViewer()
}

func (b *ContactEmailMutationBuilder) GetContactEmail() *models.ContactEmail {
	return b.contactEmail
}

// TODO rename from GetChangeset to Build()
// A Builder builds.
func (b *ContactEmailMutationBuilder) GetChangeset() (ent.Changeset, error) {
	return b.builder.GetChangeset()
}

// Call Validate (should be Valid) at any point to validate that builder is valid
func (b *ContactEmailMutationBuilder) Validate() error {
	return b.builder.Validate()
}

func (b *ContactEmailMutationBuilder) buildFields() actions.FieldMap {
	m := make(map[string]bool)
	for _, f := range b.requiredFields {
		m[f] = true
	}

	fieldMap := b.GetFields()
	fields := make(actions.FieldMap)
	addField := func(key string, val interface{}) {
		fields[key] = &actions.FieldInfo{
			Field: fieldMap[key],
			Value: val,
		}
	}

	// Need to have Id fields be fine with Builder

	// if required, field is not nil or field explicitly set to nil, add the field
	if b.emailAddress != nil {
		addField("EmailAddress", *b.emailAddress)
	} else if m["EmailAddress"] { // nil but required
		addField("EmailAddress", nil)
	}
	if b.label != nil {
		addField("Label", *b.label)
	} else if m["Label"] { // nil but required
		addField("Label", nil)
	}
	if b.contactID != nil {
		addField("ContactID", *b.contactID)
	} else if m["ContactID"] { // nil but required
		addField("ContactID", nil)
	}
	if b.contactIDBuilder != nil { // builder not nil, override userID
		addField("ContactID", b.contactIDBuilder)
	}
	return fields
}

func (b *ContactEmailMutationBuilder) ExistingEnt() ent.Entity {
	return b.builder.ExistingEnt()
}

func (b *ContactEmailMutationBuilder) Entity() ent.Entity {
	return b.builder.Entity()
}

func (b *ContactEmailMutationBuilder) GetOperation() ent.WriteOperation {
	return b.builder.GetOperation()
}

func (b *ContactEmailMutationBuilder) GetPlaceholderID() string {
	return b.builder.GetPlaceholderID()
}

// GetFields returns the field configuration for this mutation builder
func (b *ContactEmailMutationBuilder) GetFields() ent.FieldMap {
	return ent.FieldMap{
		"EmailAddress": field.F(field.NoopType(), field.DB("email_address")),
		"Label":        field.F(field.NoopType(), field.DB("label")),
		"ContactID":    field.F(field.NoopType(), field.DB("contact_id")),
	}
}

var _ ent.MutationBuilder = &ContactEmailMutationBuilder{}

func (b *ContactEmailMutationBuilder) setBuilder(v interface{}) {
	callback, ok := v.(ContactEmailCallbackWithBuilder)
	if ok {
		callback.SetBuilder(b)
	}
}

// SetTriggers sets the builder on the triggers.
func (b *ContactEmailMutationBuilder) SetTriggers(triggers []actions.Trigger) {
	b.builder.SetTriggers(triggers)
	for _, t := range triggers {
		b.setBuilder(t)
	}
}

// SetObservers sets the builder on the observers.
func (b *ContactEmailMutationBuilder) SetObservers(observers []actions.Observer) {
	b.builder.SetObservers(observers)
	for _, o := range observers {
		b.setBuilder(o)
	}
}

// SetValidators sets the builder on validators.
func (b *ContactEmailMutationBuilder) SetValidators(validators []actions.Validator) {
	b.builder.SetValidators(validators)
	for _, v := range validators {
		b.setBuilder(v)
	}
}

type ContactEmailCallbackWithBuilder interface {
	SetBuilder(*ContactEmailMutationBuilder)
}

type ContactEmailMutationCallback struct {
	Builder *ContactEmailMutationBuilder
}

func (callback *ContactEmailMutationCallback) SetBuilder(b *ContactEmailMutationBuilder) {
	callback.Builder = b
}
