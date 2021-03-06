// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  EdgeQuerySource,
  ID,
  Viewer,
} from "@snowtop/ent";
import {
  EdgeType,
  EventActivity,
  EventActivityToAttendingEdge,
  EventActivityToDeclinedEdge,
  EventActivityToInvitesEdge,
  Guest,
  GuestGroup,
  GuestGroupToInvitedEventsQuery,
  GuestToAttendingEventsQuery,
  GuestToDeclinedEventsQuery,
} from "src/ent/internal";

export const eventActivityToAttendingCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.EventActivityToAttending);
export const eventActivityToAttendingDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.EventActivityToAttending,
    () => EventActivityToAttendingEdge,
  );

export const eventActivityToDeclinedCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.EventActivityToDeclined);
export const eventActivityToDeclinedDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.EventActivityToDeclined,
    () => EventActivityToDeclinedEdge,
  );

export const eventActivityToInvitesCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.EventActivityToInvites);
export const eventActivityToInvitesDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.EventActivityToInvites,
    () => EventActivityToInvitesEdge,
  );

export abstract class EventActivityToAttendingQueryBase extends AssocEdgeQueryBase<
  EventActivity,
  Guest,
  EventActivityToAttendingEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<EventActivity, Guest>) {
    super(
      viewer,
      src,
      eventActivityToAttendingCountLoaderFactory,
      eventActivityToAttendingDataLoaderFactory,
      Guest.loaderOptions(),
    );
  }

  static query<T extends EventActivityToAttendingQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<EventActivity, Guest>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<EventActivity, Guest>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return EventActivity.load(this.viewer, id);
  }

  queryGuestToAttendingEvents(): GuestToAttendingEventsQuery {
    return GuestToAttendingEventsQuery.query(this.viewer, this);
  }

  queryGuestToDeclinedEvents(): GuestToDeclinedEventsQuery {
    return GuestToDeclinedEventsQuery.query(this.viewer, this);
  }
}

export abstract class EventActivityToDeclinedQueryBase extends AssocEdgeQueryBase<
  EventActivity,
  Guest,
  EventActivityToDeclinedEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<EventActivity, Guest>) {
    super(
      viewer,
      src,
      eventActivityToDeclinedCountLoaderFactory,
      eventActivityToDeclinedDataLoaderFactory,
      Guest.loaderOptions(),
    );
  }

  static query<T extends EventActivityToDeclinedQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<EventActivity, Guest>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<EventActivity, Guest>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return EventActivity.load(this.viewer, id);
  }

  queryGuestToAttendingEvents(): GuestToAttendingEventsQuery {
    return GuestToAttendingEventsQuery.query(this.viewer, this);
  }

  queryGuestToDeclinedEvents(): GuestToDeclinedEventsQuery {
    return GuestToDeclinedEventsQuery.query(this.viewer, this);
  }
}

export abstract class EventActivityToInvitesQueryBase extends AssocEdgeQueryBase<
  EventActivity,
  GuestGroup,
  EventActivityToInvitesEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<EventActivity, GuestGroup>) {
    super(
      viewer,
      src,
      eventActivityToInvitesCountLoaderFactory,
      eventActivityToInvitesDataLoaderFactory,
      GuestGroup.loaderOptions(),
    );
  }

  static query<T extends EventActivityToInvitesQueryBase>(
    this: new (
      viewer: Viewer,
      src: EdgeQuerySource<EventActivity, GuestGroup>,
    ) => T,
    viewer: Viewer,
    src: EdgeQuerySource<EventActivity, GuestGroup>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return EventActivity.load(this.viewer, id);
  }

  queryGuestGroupToInvitedEvents(): GuestGroupToInvitedEventsQuery {
    return GuestGroupToInvitedEventsQuery.query(this.viewer, this);
  }
}
