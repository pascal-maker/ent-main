/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { User } from "../../../../ent";
import ConfirmEditPhoneNumberAction, {
  ConfirmEditPhoneNumberInput,
} from "../../../../ent/user/actions/confirm_edit_phone_number_action";
import { UserType } from "../../../resolvers";

interface customConfirmPhoneNumberEditInput
  extends ConfirmEditPhoneNumberInput {
  userID: string;
}

interface ConfirmPhoneNumberEditPayload {
  user: User;
}

export const ConfirmPhoneNumberEditInputType = new GraphQLInputObjectType({
  name: "ConfirmPhoneNumberEditInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    userID: {
      type: GraphQLNonNull(GraphQLID),
    },
    phoneNumber: {
      type: GraphQLNonNull(GraphQLString),
    },
    code: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

export const ConfirmPhoneNumberEditPayloadType = new GraphQLObjectType({
  name: "ConfirmPhoneNumberEditPayload",
  fields: (): GraphQLFieldConfigMap<
    ConfirmPhoneNumberEditPayload,
    RequestContext
  > => ({
    user: {
      type: GraphQLNonNull(UserType),
    },
  }),
});

export const ConfirmPhoneNumberEditType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customConfirmPhoneNumberEditInput }
> = {
  type: GraphQLNonNull(ConfirmPhoneNumberEditPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(ConfirmPhoneNumberEditInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<ConfirmPhoneNumberEditPayload> => {
    const user = await ConfirmEditPhoneNumberAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.userID),
      {
        phoneNumber: input.phoneNumber,
        code: input.code,
      },
    );
    return { user: user };
  },
};