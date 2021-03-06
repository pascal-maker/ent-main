/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { EventToAttendingEdge } from "../../../../ent";
import { UserType } from "../../internal";

var connType: GraphQLConnectionType<GraphQLObjectType, EventToAttendingEdge>;

export const EventToAttendingConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("EventToAttending", UserType);
  }
  return connType;
};
