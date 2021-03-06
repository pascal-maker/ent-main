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
import EditPhoneNumberAction, {
  EditPhoneNumberInput,
} from "../../../../ent/user/actions/edit_phone_number_action";
import { UserType } from "../../../resolvers";

interface customPhoneNumberEditInput extends EditPhoneNumberInput {
  userID: string;
}

interface PhoneNumberEditPayload {
  user: User;
}

export const PhoneNumberEditInputType = new GraphQLInputObjectType({
  name: "PhoneNumberEditInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    userID: {
      type: GraphQLNonNull(GraphQLID),
    },
    newPhoneNumber: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

export const PhoneNumberEditPayloadType = new GraphQLObjectType({
  name: "PhoneNumberEditPayload",
  fields: (): GraphQLFieldConfigMap<
    PhoneNumberEditPayload,
    RequestContext
  > => ({
    user: {
      type: GraphQLNonNull(UserType),
    },
  }),
});

export const PhoneNumberEditType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customPhoneNumberEditInput }
> = {
  type: GraphQLNonNull(PhoneNumberEditPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(PhoneNumberEditInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<PhoneNumberEditPayload> => {
    const user = await EditPhoneNumberAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.userID),
      {
        newPhoneNumber: input.newPhoneNumber,
      },
    );
    return { user: user };
  },
};
