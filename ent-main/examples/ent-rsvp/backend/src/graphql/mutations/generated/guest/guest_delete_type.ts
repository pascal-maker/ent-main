// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import DeleteGuestAction from "src/ent/guest/actions/delete_guest_action";

interface customGuestDeleteInput {
  guestID: string;
}

interface GuestDeletePayload {
  deletedGuestID: string;
}

export const GuestDeleteInputType = new GraphQLInputObjectType({
  name: "GuestDeleteInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    guestID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const GuestDeletePayloadType = new GraphQLObjectType({
  name: "GuestDeletePayload",
  fields: (): GraphQLFieldConfigMap<GuestDeletePayload, RequestContext> => ({
    deletedGuestID: {
      type: GraphQLID,
    },
  }),
});

export const GuestDeleteType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customGuestDeleteInput }
> = {
  type: GraphQLNonNull(GuestDeletePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(GuestDeleteInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<GuestDeletePayload> => {
    await DeleteGuestAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.guestID),
    );
    return { deletedGuestID: input.guestID };
  },
};