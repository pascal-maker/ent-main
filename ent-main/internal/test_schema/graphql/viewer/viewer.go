// Code generated by github.com/lolopinto/ent/ent.

package viewer

import (
	"context"

	"github.com/lolopinto/ent/ent/viewer"
	"github.com/lolopinto/ent/internal/test_schema/models"
	"github.com/lolopinto/ent/internal/test_schema/testschemaviewer"
)

// ViewerResolver takes the context and returns the logged in viewer
// @graphql viewer Query
// @graphqlreturn viewer @required
func ViewerResolver(ctx context.Context) (*Viewer, error) {
	v, err := viewer.ForContext(ctx)
	if err != nil {
		return nil, err
	}

	ret := &Viewer{viewer: v}
	v2, ok := v.(*testschemaviewer.TestschemaViewerContext)
	if ok {
		ret.user = v2.GetUser()
	}

	return ret, nil
}

// Viewer is the object returned to GraphQL to encode the viewer
// @graphqltype Viewer
type Viewer struct {
	viewer viewer.ViewerContext
	user   *models.User
}

// GetUser returns the node representing the logged in User
// @graphql User
// @graphqlreturn user @required
func (v *Viewer) GetUser() *models.User {
	return v.user
}

// LoadViewerContact returns the contact information of the viewer
// @graphql Contact
func (v *Viewer) LoadViewerContact() (contact *models.Contact, err error) {
	contacts, err := v.user.LoadContacts()
	if err != nil {
		return nil, err
	}
	for _, contact := range contacts {
		if contact.UserID == v.viewer.GetViewerID() {
			return contact, nil
		}
	}
	return nil, nil
}
