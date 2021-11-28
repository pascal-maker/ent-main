// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLFieldConfig,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { EventResolver } from "../event";
import { EventType } from "src/graphql/resolvers/internal";

export const EventtQueryType: GraphQLFieldConfig<undefined, RequestContext> = {
  type: EventType,
  args: {
    slug: {
      description: "",
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _source,
    { slug },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ) => {
    const r = new EventResolver();
    return r.event(context, slug);
  },
};