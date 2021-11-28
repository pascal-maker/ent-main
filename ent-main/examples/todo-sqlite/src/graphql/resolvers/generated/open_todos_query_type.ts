// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { GraphQLEdgeConnection } from "@snowtop/ent/graphql";
import { RootToOpenTodosConnectionType } from "src/graphql/resolvers/internal";
import { TodoResolver } from "../open_todos";

interface openTodosArgs {
  id: any;
}

export const OpenTodosQueryType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  openTodosArgs
> = {
  type: GraphQLNonNull(RootToOpenTodosConnectionType()),
  args: {
    id: {
      description: "",
      type: GraphQLNonNull(GraphQLID),
    },
    first: {
      description: "",
      type: GraphQLInt,
    },
    after: {
      description: "",
      type: GraphQLString,
    },
    last: {
      description: "",
      type: GraphQLInt,
    },
    before: {
      description: "",
      type: GraphQLString,
    },
  },
  resolve: async (
    _source,
    args,
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ) => {
    const r = new TodoResolver();
    return new GraphQLEdgeConnection(
      context.getViewer(),
      (v) => r.openTodos(context, args.id),
      args,
    );
  },
};