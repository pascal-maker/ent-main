// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLFieldConfig,
  GraphQLResolveInfo,
  GraphQLBoolean,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { AuthResolver } from "../../mutations/auth/auth";

export const EmailAvailableType: GraphQLFieldConfig<undefined, RequestContext> =
  {
    type: GraphQLNonNull(GraphQLBoolean),
    args: {
      email: {
        description: "",
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (
      _source,
      { email },
      context: RequestContext,
      _info: GraphQLResolveInfo,
    ) => {
      const r = new AuthResolver();
      return r.emailAvailable(email);
    },
  };
