// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import {
  GraphQLEdgeConnection,
  GraphQLNodeInterface,
} from "@snowtop/ent/graphql";
import { Account, AccountToTagsQuery, AccountToTodosQuery } from "src/ent/";
import {
  AccountToOpenTodosConnectionType,
  AccountToTagsConnectionType,
  AccountToTodosConnectionType,
  TodoType,
} from "src/graphql/resolvers/internal";

export const AccountType = new GraphQLObjectType({
  name: "Account",
  fields: (): GraphQLFieldConfigMap<Account, RequestContext> => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    phoneNumber: {
      type: GraphQLNonNull(GraphQLString),
    },
    tags: {
      type: GraphQLNonNull(AccountToTagsConnectionType()),
      args: {
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
      resolve: (account: Account, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          account.viewer,
          account,
          (v, account: Account) => AccountToTagsQuery.query(v, account),
          args,
        );
      },
    },
    todos: {
      type: GraphQLNonNull(AccountToTodosConnectionType()),
      args: {
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
      resolve: (account: Account, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          account.viewer,
          account,
          (v, account: Account) => AccountToTodosQuery.query(v, account),
          args,
        );
      },
    },
    openTodosPlural: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(TodoType))),
      resolve: async (account: Account, args: {}, context: RequestContext) => {
        return account.openTodosPlural();
      },
    },
    openTodos: {
      type: GraphQLNonNull(AccountToOpenTodosConnectionType()),
      args: {
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
      resolve: (account: Account, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          account.viewer,
          account,
          (v, account: Account) => account.openTodos(),
          args,
        );
      },
    },
  }),
  interfaces: [GraphQLNodeInterface],
  isTypeOf(obj) {
    return obj instanceof Account;
  },
});
