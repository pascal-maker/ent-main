/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { ContactToCommentsEdge } from "../../../../ent";
import { CommentType } from "../../internal";

var connType: GraphQLConnectionType<GraphQLObjectType, ContactToCommentsEdge>;

export const ContactToCommentsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("ContactToComments", CommentType);
  }
  return connType;
};
