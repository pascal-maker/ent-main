/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { UserToInvitedEventsEdge } from "../../../../ent";
import { EventType } from "../../internal";

var connType: GraphQLConnectionType<GraphQLObjectType, UserToInvitedEventsEdge>;

export const UserToInvitedEventsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("UserToInvitedEvents", EventType);
  }
  return connType;
};