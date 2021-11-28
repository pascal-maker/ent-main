/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  AllowIfViewerPrivacyPolicy,
  Context,
  CustomQuery,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  convertDate,
  convertNullableDate,
  getEdgeTypeInGroup,
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntX,
  loadEnts,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import {
  EdgeType,
  EventToAttendingQuery,
  EventToDeclinedQuery,
  EventToHostsQuery,
  EventToInvitedQuery,
  EventToMaybeQuery,
  NodeType,
  User,
} from "../internal";
import schema from "../../schema/event";

const tableName = "events";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "name",
  "user_id",
  "start_time",
  "end_time",
  "location",
];

export enum EventRsvpStatus {
  Attending = "attending",
  Declined = "declined",
  Maybe = "maybe",
  CanRsvp = "canRsvp",
}

export class EventBase {
  readonly nodeType = NodeType.Event;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly name: string;
  readonly creatorID: ID;
  readonly startTime: Date;
  readonly endTime: Date | null;
  readonly location: string;

  constructor(public viewer: Viewer, protected data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.name = data.name;
    this.creatorID = data.user_id;
    this.startTime = convertDate(data.start_time);
    this.endTime = convertNullableDate(data.end_time);
    this.location = data.location;
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return (await loadEnt(
      viewer,
      id,
      EventBase.loaderOptions.apply(this),
    )) as T | null;
  }

  static async loadX<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return (await loadEntX(
      viewer,
      id,
      EventBase.loaderOptions.apply(this),
    )) as T;
  }

  static async loadMany<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return (await loadEnts(
      viewer,
      EventBase.loaderOptions.apply(this),
      ...ids,
    )) as T[];
  }

  static async loadCustom<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return (await loadCustomEnts(
      viewer,
      EventBase.loaderOptions.apply(this),
      query,
    )) as T[];
  }

  static async loadCustomData<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(EventBase.loaderOptions.apply(this), query, context);
  }

  static async loadRawData<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return eventLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await eventLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends EventBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName,
      fields,
      ent: this,
      loaderFactory: eventLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (EventBase.schemaFields != null) {
      return EventBase.schemaFields;
    }
    return (EventBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return EventBase.getSchemaFields().get(key);
  }

  getEventRsvpStatusMap() {
    let m: Map<EventRsvpStatus, EdgeType> = new Map();
    m.set(EventRsvpStatus.Attending, EdgeType.EventToAttending);
    m.set(EventRsvpStatus.Declined, EdgeType.EventToDeclined);
    m.set(EventRsvpStatus.Maybe, EdgeType.EventToMaybe);
    return m;
  }

  async viewerRsvpStatus(): Promise<EventRsvpStatus> {
    const ret = EventRsvpStatus.CanRsvp;
    if (!this.viewer.viewerID) {
      return ret;
    }
    const g = await getEdgeTypeInGroup(
      this.viewer,
      this.id,
      this.viewer.viewerID!,
      this.getEventRsvpStatusMap(),
    );
    if (g) {
      return g[0];
    }
    return ret;
  }

  queryAttending(): EventToAttendingQuery {
    return EventToAttendingQuery.query(this.viewer, this.id);
  }

  queryDeclined(): EventToDeclinedQuery {
    return EventToDeclinedQuery.query(this.viewer, this.id);
  }

  queryHosts(): EventToHostsQuery {
    return EventToHostsQuery.query(this.viewer, this.id);
  }

  queryInvited(): EventToInvitedQuery {
    return EventToInvitedQuery.query(this.viewer, this.id);
  }

  queryMaybe(): EventToMaybeQuery {
    return EventToMaybeQuery.query(this.viewer, this.id);
  }

  async loadCreator(): Promise<User | null> {
    return loadEnt(this.viewer, this.creatorID, User.loaderOptions());
  }

  loadCreatorX(): Promise<User> {
    return loadEntX(this.viewer, this.creatorID, User.loaderOptions());
  }
}

export const eventLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
