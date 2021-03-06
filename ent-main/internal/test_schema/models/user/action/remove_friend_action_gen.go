// Code generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

package action

import (
	"context"

	"github.com/lolopinto/ent/ent"
	"github.com/lolopinto/ent/ent/actions"
	"github.com/lolopinto/ent/ent/viewer"
	"github.com/lolopinto/ent/internal/test_schema/models"
	builder "github.com/lolopinto/ent/internal/test_schema/models/user"
)

type RemoveFriendAction struct {
	builder *builder.UserMutationBuilder
}

// RemoveFriendFromContext is the factory method to get an ...
func RemoveFriendFromContext(ctx context.Context, user *models.User) *RemoveFriendAction {
	v, err := viewer.ForContext(ctx)
	if err != nil {
		panic("tried to perform mutation without a viewer")
	}
	return RemoveFriend(v, user)
}

// RemoveFriend is the factory method to get an ...
func RemoveFriend(v viewer.ViewerContext, user *models.User) *RemoveFriendAction {
	action := &RemoveFriendAction{}
	builder := builder.NewMutationBuilder(
		v,
		ent.EditOperation,
		action.requiredFields(),
		actions.ExistingEnt(user),
	)
	action.builder = builder
	return action
}

func (action *RemoveFriendAction) GetBuilder() ent.MutationBuilder {
	return action.builder
}

func (action *RemoveFriendAction) GetTypedBuilder() *builder.UserMutationBuilder {
	return action.builder
}

func (action *RemoveFriendAction) GetViewer() viewer.ViewerContext {
	return action.builder.GetViewer()
}

func (action *RemoveFriendAction) SetBuilderOnTriggers(triggers []actions.Trigger) {
	action.builder.SetTriggers(triggers)
}

func (action *RemoveFriendAction) SetBuilderOnObservers(observers []actions.Observer) {
	action.builder.SetObservers(observers)
}

func (action *RemoveFriendAction) SetBuilderOnValidators(validators []actions.Validator) {
	action.builder.SetValidators(validators)
}

func (action *RemoveFriendAction) GetChangeset() (ent.Changeset, error) {
	return actions.GetChangeset(action)
}

func (action *RemoveFriendAction) Entity() ent.Entity {
	return action.builder.GetUser()
}

func (action *RemoveFriendAction) ExistingEnt() ent.Entity {
	return action.builder.ExistingEnt()
}

// RemoveFriends removes an instance of User from the Friends edge while editing the User ent
func (action *RemoveFriendAction) RemoveFriends(users ...*models.User) *RemoveFriendAction {
	action.builder.RemoveFriends(users...)
	return action
}

// RemoveFriendID removes an instance of UserID from the Friends edge while editing the User ent
func (action *RemoveFriendAction) RemoveFriendID(userID string) *RemoveFriendAction {
	action.builder.RemoveFriendID(userID)
	return action
}

func (action *RemoveFriendAction) requiredFields() []string {
	return []string{}
}

// Validate returns an error if the current state of the action is not valid
func (action *RemoveFriendAction) Validate() error {
	return action.builder.Validate()
}

// Save is the method called to execute this action and save change
func (action *RemoveFriendAction) Save() (*models.User, error) {
	err := actions.Save(action)
	if err != nil {
		return nil, err
	}
	return action.builder.GetUser(), err
}

var _ actions.Action = &RemoveFriendAction{}
