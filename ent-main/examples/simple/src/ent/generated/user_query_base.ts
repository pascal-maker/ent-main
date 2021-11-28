/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  CustomEdgeQueryBase,
  EdgeQuerySource,
  Ent,
  ID,
  IndexLoaderFactory,
  RawCountLoaderFactory,
  Viewer,
} from "@snowtop/ent";
import { getLoaderOptions } from "./loadAny";
import {
  AuthCode,
  Contact,
  ContactToCommentsQuery,
  ContactToLikersQuery,
  EdgeType,
  Event,
  EventToAttendingQuery,
  EventToDeclinedQuery,
  EventToHostsQuery,
  EventToInvitedQuery,
  EventToMaybeQuery,
  NodeType,
  User,
  UserToCommentsQuery,
  UserToCreatedEventsEdge,
  UserToCreatedEventsQuery,
  UserToDeclinedEventsEdge,
  UserToDeclinedEventsQuery,
  UserToEventsAttendingEdge,
  UserToEventsAttendingQuery,
  UserToFriendsEdge,
  UserToFriendsQuery,
  UserToHostedEventsEdge,
  UserToHostedEventsQuery,
  UserToInvitedEventsEdge,
  UserToInvitedEventsQuery,
  UserToLikersQuery,
  UserToLikesEdge,
  UserToLikesQuery,
  UserToMaybeEventsEdge,
  UserToMaybeEventsQuery,
  UserToSelfContactEdge,
  UserToSelfContactQuery,
  authCodeLoader,
  contactLoader,
} from "../internal";

export const userToCreatedEventsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToCreatedEvents);
export const userToCreatedEventsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToCreatedEvents,
  () => UserToCreatedEventsEdge,
);

export const userToDeclinedEventsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToDeclinedEvents);
export const userToDeclinedEventsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToDeclinedEvents,
  () => UserToDeclinedEventsEdge,
);

export const userToEventsAttendingCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToEventsAttending);
export const userToEventsAttendingDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToEventsAttending,
    () => UserToEventsAttendingEdge,
  );

export const userToFriendsCountLoaderFactory = new AssocEdgeCountLoaderFactory(
  EdgeType.UserToFriends,
);
export const userToFriendsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToFriends,
  () => UserToFriendsEdge,
);

export const userToInvitedEventsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToInvitedEvents);
export const userToInvitedEventsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToInvitedEvents,
  () => UserToInvitedEventsEdge,
);

export const userToLikesCountLoaderFactory = new AssocEdgeCountLoaderFactory(
  EdgeType.UserToLikes,
);
export const userToLikesDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToLikes,
  () => UserToLikesEdge,
);

export const userToMaybeEventsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToMaybeEvents);
export const userToMaybeEventsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToMaybeEvents,
  () => UserToMaybeEventsEdge,
);

export const userToSelfContactCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToSelfContact);
export const userToSelfContactDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToSelfContact,
  () => UserToSelfContactEdge,
);

export const userToHostedEventsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToHostedEvents);
export const userToHostedEventsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToHostedEvents,
  () => UserToHostedEventsEdge,
);

export const userToAuthCodesCountLoaderFactory = new RawCountLoaderFactory({
  ...AuthCode.loaderOptions(),
  groupCol: "user_id",
});
export const userToAuthCodesDataLoaderFactory = new IndexLoaderFactory(
  AuthCode.loaderOptions(),
  "user_id",
  {
    toPrime: [authCodeLoader],
  },
);
export const userToContactsCountLoaderFactory = new RawCountLoaderFactory({
  ...Contact.loaderOptions(),
  groupCol: "user_id",
});
export const userToContactsDataLoaderFactory = new IndexLoaderFactory(
  Contact.loaderOptions(),
  "user_id",
  {
    toPrime: [contactLoader],
  },
);

export abstract class UserToCreatedEventsQueryBase extends AssocEdgeQueryBase<
  User,
  Event,
  UserToCreatedEventsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Event>) {
    super(
      viewer,
      src,
      userToCreatedEventsCountLoaderFactory,
      userToCreatedEventsDataLoaderFactory,
      Event.loaderOptions(),
    );
  }

  static query<T extends UserToCreatedEventsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Event>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryAttending(): EventToAttendingQuery {
    return EventToAttendingQuery.query(this.viewer, this);
  }

  queryDeclined(): EventToDeclinedQuery {
    return EventToDeclinedQuery.query(this.viewer, this);
  }

  queryHosts(): EventToHostsQuery {
    return EventToHostsQuery.query(this.viewer, this);
  }

  queryInvited(): EventToInvitedQuery {
    return EventToInvitedQuery.query(this.viewer, this);
  }

  queryMaybe(): EventToMaybeQuery {
    return EventToMaybeQuery.query(this.viewer, this);
  }
}

export abstract class UserToDeclinedEventsQueryBase extends AssocEdgeQueryBase<
  User,
  Event,
  UserToDeclinedEventsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Event>) {
    super(
      viewer,
      src,
      userToDeclinedEventsCountLoaderFactory,
      userToDeclinedEventsDataLoaderFactory,
      Event.loaderOptions(),
    );
  }

  static query<T extends UserToDeclinedEventsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Event>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryAttending(): EventToAttendingQuery {
    return EventToAttendingQuery.query(this.viewer, this);
  }

  queryDeclined(): EventToDeclinedQuery {
    return EventToDeclinedQuery.query(this.viewer, this);
  }

  queryHosts(): EventToHostsQuery {
    return EventToHostsQuery.query(this.viewer, this);
  }

  queryInvited(): EventToInvitedQuery {
    return EventToInvitedQuery.query(this.viewer, this);
  }

  queryMaybe(): EventToMaybeQuery {
    return EventToMaybeQuery.query(this.viewer, this);
  }
}

export abstract class UserToEventsAttendingQueryBase extends AssocEdgeQueryBase<
  User,
  Event,
  UserToEventsAttendingEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Event>) {
    super(
      viewer,
      src,
      userToEventsAttendingCountLoaderFactory,
      userToEventsAttendingDataLoaderFactory,
      Event.loaderOptions(),
    );
  }

  static query<T extends UserToEventsAttendingQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Event>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryAttending(): EventToAttendingQuery {
    return EventToAttendingQuery.query(this.viewer, this);
  }

  queryDeclined(): EventToDeclinedQuery {
    return EventToDeclinedQuery.query(this.viewer, this);
  }

  queryHosts(): EventToHostsQuery {
    return EventToHostsQuery.query(this.viewer, this);
  }

  queryInvited(): EventToInvitedQuery {
    return EventToInvitedQuery.query(this.viewer, this);
  }

  queryMaybe(): EventToMaybeQuery {
    return EventToMaybeQuery.query(this.viewer, this);
  }
}

export abstract class UserToFriendsQueryBase extends AssocEdgeQueryBase<
  User,
  User,
  UserToFriendsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, User>) {
    super(
      viewer,
      src,
      userToFriendsCountLoaderFactory,
      userToFriendsDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends UserToFriendsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, User>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryComments(): UserToCommentsQuery {
    return UserToCommentsQuery.query(this.viewer, this);
  }

  queryCreatedEvents(): UserToCreatedEventsQuery {
    return UserToCreatedEventsQuery.query(this.viewer, this);
  }

  queryDeclinedEvents(): UserToDeclinedEventsQuery {
    return UserToDeclinedEventsQuery.query(this.viewer, this);
  }

  queryEventsAttending(): UserToEventsAttendingQuery {
    return UserToEventsAttendingQuery.query(this.viewer, this);
  }

  queryFriends(): UserToFriendsQuery {
    return UserToFriendsQuery.query(this.viewer, this);
  }

  queryInvitedEvents(): UserToInvitedEventsQuery {
    return UserToInvitedEventsQuery.query(this.viewer, this);
  }

  queryLikers(): UserToLikersQuery {
    return UserToLikersQuery.query(this.viewer, this);
  }

  queryLikes(): UserToLikesQuery {
    return UserToLikesQuery.query(this.viewer, this);
  }

  queryMaybeEvents(): UserToMaybeEventsQuery {
    return UserToMaybeEventsQuery.query(this.viewer, this);
  }

  querySelfContact(): UserToSelfContactQuery {
    return UserToSelfContactQuery.query(this.viewer, this);
  }

  queryUserToHostedEvents(): UserToHostedEventsQuery {
    return UserToHostedEventsQuery.query(this.viewer, this);
  }
}

export abstract class UserToInvitedEventsQueryBase extends AssocEdgeQueryBase<
  User,
  Event,
  UserToInvitedEventsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Event>) {
    super(
      viewer,
      src,
      userToInvitedEventsCountLoaderFactory,
      userToInvitedEventsDataLoaderFactory,
      Event.loaderOptions(),
    );
  }

  static query<T extends UserToInvitedEventsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Event>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryAttending(): EventToAttendingQuery {
    return EventToAttendingQuery.query(this.viewer, this);
  }

  queryDeclined(): EventToDeclinedQuery {
    return EventToDeclinedQuery.query(this.viewer, this);
  }

  queryHosts(): EventToHostsQuery {
    return EventToHostsQuery.query(this.viewer, this);
  }

  queryInvited(): EventToInvitedQuery {
    return EventToInvitedQuery.query(this.viewer, this);
  }

  queryMaybe(): EventToMaybeQuery {
    return EventToMaybeQuery.query(this.viewer, this);
  }
}

export abstract class UserToLikesQueryBase extends AssocEdgeQueryBase<
  User,
  Ent,
  UserToLikesEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Ent>) {
    super(
      viewer,
      src,
      userToLikesCountLoaderFactory,
      userToLikesDataLoaderFactory,
      (str) => getLoaderOptions(str as NodeType),
    );
  }

  static query<T extends UserToLikesQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Ent>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Ent>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }
}

export abstract class UserToMaybeEventsQueryBase extends AssocEdgeQueryBase<
  User,
  Event,
  UserToMaybeEventsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Event>) {
    super(
      viewer,
      src,
      userToMaybeEventsCountLoaderFactory,
      userToMaybeEventsDataLoaderFactory,
      Event.loaderOptions(),
    );
  }

  static query<T extends UserToMaybeEventsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Event>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryAttending(): EventToAttendingQuery {
    return EventToAttendingQuery.query(this.viewer, this);
  }

  queryDeclined(): EventToDeclinedQuery {
    return EventToDeclinedQuery.query(this.viewer, this);
  }

  queryHosts(): EventToHostsQuery {
    return EventToHostsQuery.query(this.viewer, this);
  }

  queryInvited(): EventToInvitedQuery {
    return EventToInvitedQuery.query(this.viewer, this);
  }

  queryMaybe(): EventToMaybeQuery {
    return EventToMaybeQuery.query(this.viewer, this);
  }
}

export abstract class UserToSelfContactQueryBase extends AssocEdgeQueryBase<
  User,
  Contact,
  UserToSelfContactEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Contact>) {
    super(
      viewer,
      src,
      userToSelfContactCountLoaderFactory,
      userToSelfContactDataLoaderFactory,
      Contact.loaderOptions(),
    );
  }

  static query<T extends UserToSelfContactQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Contact>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Contact>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryComments(): ContactToCommentsQuery {
    return ContactToCommentsQuery.query(this.viewer, this);
  }

  queryLikers(): ContactToLikersQuery {
    return ContactToLikersQuery.query(this.viewer, this);
  }
}

export abstract class UserToHostedEventsQueryBase extends AssocEdgeQueryBase<
  User,
  Event,
  UserToHostedEventsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User, Event>) {
    super(
      viewer,
      src,
      userToHostedEventsCountLoaderFactory,
      userToHostedEventsDataLoaderFactory,
      Event.loaderOptions(),
    );
  }

  static query<T extends UserToHostedEventsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User, Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User, Event>,
  ): T {
    return new this(viewer, src);
  }

  sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }

  queryAttending(): EventToAttendingQuery {
    return EventToAttendingQuery.query(this.viewer, this);
  }

  queryDeclined(): EventToDeclinedQuery {
    return EventToDeclinedQuery.query(this.viewer, this);
  }

  queryHosts(): EventToHostsQuery {
    return EventToHostsQuery.query(this.viewer, this);
  }

  queryInvited(): EventToInvitedQuery {
    return EventToInvitedQuery.query(this.viewer, this);
  }

  queryMaybe(): EventToMaybeQuery {
    return EventToMaybeQuery.query(this.viewer, this);
  }
}

export class UserToAuthCodesQueryBase extends CustomEdgeQueryBase<
  User,
  AuthCode
> {
  constructor(viewer: Viewer, src: User | ID) {
    super(viewer, {
      src: src,
      countLoaderFactory: userToAuthCodesCountLoaderFactory,
      dataLoaderFactory: userToAuthCodesDataLoaderFactory,
      options: AuthCode.loaderOptions(),
    });
  }

  static query<T extends UserToAuthCodesQueryBase>(
    this: new (viewer: Viewer, src: User | ID) => T,
    viewer: Viewer,
    src: User | ID,
  ): T {
    return new this(viewer, src);
  }

  async sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }
}

export class UserToContactsQueryBase extends CustomEdgeQueryBase<
  User,
  Contact
> {
  constructor(viewer: Viewer, src: User | ID) {
    super(viewer, {
      src: src,
      countLoaderFactory: userToContactsCountLoaderFactory,
      dataLoaderFactory: userToContactsDataLoaderFactory,
      options: Contact.loaderOptions(),
    });
  }

  static query<T extends UserToContactsQueryBase>(
    this: new (viewer: Viewer, src: User | ID) => T,
    viewer: Viewer,
    src: User | ID,
  ): T {
    return new this(viewer, src);
  }

  async sourceEnt(id: ID) {
    return User.load(this.viewer, id);
  }
}
