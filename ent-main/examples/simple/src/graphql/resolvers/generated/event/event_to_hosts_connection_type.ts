/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { EventToHostsEdge } from "../../../../ent";
import { UserType } from "../../internal";

var connType: GraphQLConnectionType<GraphQLObjectType, EventToHostsEdge>;

export const EventToHostsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("EventToHosts", UserType);
  }
  return connType;
};
