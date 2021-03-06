/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import {
  GraphQLEdgeConnection,
  GraphQLNodeInterface,
  GraphQLTime,
  nodeIDEncoder,
} from "@snowtop/ent/graphql";
import {
  Event,
  EventToAttendingQuery,
  EventToDeclinedQuery,
  EventToHostsQuery,
  EventToInvitedQuery,
  EventToMaybeQuery,
} from "../../../ent";
import {
  EventRsvpStatusType,
  EventToAttendingConnectionType,
  EventToDeclinedConnectionType,
  EventToHostsConnectionType,
  EventToInvitedConnectionType,
  EventToMaybeConnectionType,
  UserType,
} from "../internal";

export const EventType = new GraphQLObjectType({
  name: "Event",
  fields: (): GraphQLFieldConfigMap<Event, RequestContext> => ({
    creator: {
      type: UserType,
      resolve: (event: Event, args: {}, context: RequestContext) => {
        return event.loadCreator();
      },
    },
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: nodeIDEncoder,
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    startTime: {
      type: GraphQLNonNull(GraphQLTime),
    },
    endTime: {
      type: GraphQLTime,
    },
    eventLocation: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (event: Event, args: {}, context: RequestContext) => {
        return event.location;
      },
    },
    attending: {
      type: GraphQLNonNull(EventToAttendingConnectionType()),
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
      resolve: (event: Event, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          event.viewer,
          event,
          (v, event: Event) => EventToAttendingQuery.query(v, event),
          args,
        );
      },
    },
    declined: {
      type: GraphQLNonNull(EventToDeclinedConnectionType()),
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
      resolve: (event: Event, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          event.viewer,
          event,
          (v, event: Event) => EventToDeclinedQuery.query(v, event),
          args,
        );
      },
    },
    hosts: {
      type: GraphQLNonNull(EventToHostsConnectionType()),
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
      resolve: (event: Event, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          event.viewer,
          event,
          (v, event: Event) => EventToHostsQuery.query(v, event),
          args,
        );
      },
    },
    invited: {
      type: GraphQLNonNull(EventToInvitedConnectionType()),
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
      resolve: (event: Event, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          event.viewer,
          event,
          (v, event: Event) => EventToInvitedQuery.query(v, event),
          args,
        );
      },
    },
    maybe: {
      type: GraphQLNonNull(EventToMaybeConnectionType()),
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
      resolve: (event: Event, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          event.viewer,
          event,
          (v, event: Event) => EventToMaybeQuery.query(v, event),
          args,
        );
      },
    },
    viewerRsvpStatus: {
      type: EventRsvpStatusType,
    },
  }),
  interfaces: [GraphQLNodeInterface],
  isTypeOf(obj) {
    return obj instanceof Event;
  },
});
