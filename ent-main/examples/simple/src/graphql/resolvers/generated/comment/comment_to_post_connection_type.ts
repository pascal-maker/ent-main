/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import { GraphQLObjectType } from "graphql";
import {
  GraphQLConnectionType,
  GraphQLNodeInterface,
} from "@snowtop/ent/graphql";
import { CommentToPostEdge } from "../../../../ent";

var connType: GraphQLConnectionType<GraphQLObjectType, CommentToPostEdge>;

export const CommentToPostConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType(
      "CommentToPost",

      GraphQLNodeInterface,
    );
  }
  return connType;
};
