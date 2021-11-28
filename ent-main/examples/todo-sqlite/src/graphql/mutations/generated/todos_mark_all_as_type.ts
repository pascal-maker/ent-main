// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLNonNull,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { AccountType } from "src/graphql/resolvers/";
import { TodosResolver } from "../todo/todo_resolver";

interface todosMarkAllAsArgs {
  accountID: any;
  completed: any;
}

export const TodosMarkAllAsType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  todosMarkAllAsArgs
> = {
  type: GraphQLNonNull(AccountType),
  args: {
    accountID: {
      description: "",
      type: GraphQLNonNull(GraphQLID),
    },
    completed: {
      description: "",
      type: GraphQLNonNull(GraphQLBoolean),
    },
  },
  resolve: async (
    _source,
    args,
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ) => {
    const r = new TodosResolver();
    return r.markAllTodos(args.accountID, args.completed);
  },
};
