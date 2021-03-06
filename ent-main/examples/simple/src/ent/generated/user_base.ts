/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  AllowIfViewerPrivacyPolicy,
  AssocEdge,
  Context,
  CustomQuery,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  convertBool,
  convertDate,
  convertNullableJSON,
  convertNullableJSONList,
  convertNullableList,
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntViaKey,
  loadEntX,
  loadEntXViaKey,
  loadEnts,
  loadUniqueEdge,
  loadUniqueNode,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import {
  Contact,
  EdgeType,
  NodeType,
  UserToAuthCodesQuery,
  UserToCommentsQuery,
  UserToContactsQuery,
  UserToCreatedEventsQuery,
  UserToDeclinedEventsQuery,
  UserToEventsAttendingQuery,
  UserToFriendsQuery,
  UserToHostedEventsQuery,
  UserToInvitedEventsQuery,
  UserToLikersQuery,
  UserToLikesQuery,
  UserToMaybeEventsQuery,
} from "../internal";
import { UserPrefs } from "../user_prefs";
import schema from "../../schema/user";

const tableName = "users";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "first_name",
  "last_name",
  "email_address",
  "phone_number",
  "password",
  "account_status",
  "email_verified",
  "bio",
  "nicknames",
  "prefs",
  "prefs_list",
  "prefs_diff",
  "days_off",
  "preferred_shift",
  "time_in_ms",
  "fun_uuids",
  "new_col",
  "new_col_2",
];

export enum DaysOff {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum PreferredShift {
  Morning = "morning",
  Afternoon = "afternoon",
  Evening = "evening",
  Graveyard = "graveyard",
}

export class UserBase {
  readonly nodeType = NodeType.User;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly phoneNumber: string | null;
  protected readonly password: string | null;
  readonly accountStatus: string | null;
  readonly emailVerified: boolean;
  readonly bio: string | null;
  readonly nicknames: string[] | null;
  readonly prefs: UserPrefs | null;
  readonly prefsList: UserPrefs[] | null;
  readonly prefsDiff: any;
  readonly daysOff: DaysOff[] | null;
  readonly preferredShift: PreferredShift[] | null;
  readonly timeInMs: BigInt | null;
  readonly funUuids: ID[] | null;
  readonly newCol: string | null;
  readonly newCol2: string | null;

  constructor(public viewer: Viewer, protected data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.emailAddress = data.email_address;
    this.phoneNumber = data.phone_number;
    this.password = data.password;
    this.accountStatus = data.account_status;
    this.emailVerified = convertBool(data.email_verified);
    this.bio = data.bio;
    this.nicknames = convertNullableList(data.nicknames);
    this.prefs = convertNullableJSON(data.prefs);
    this.prefsList = convertNullableJSONList(data.prefs_list);
    this.prefsDiff = convertNullableJSON(data.prefs_diff);
    this.daysOff = convertNullableList(data.days_off);
    this.preferredShift = convertNullableList(data.preferred_shift);
    this.timeInMs = BigInt(data.time_in_ms);
    this.funUuids = convertNullableList(data.fun_uuids);
    this.newCol = data.new_col;
    this.newCol2 = data.new_col_2;
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return (await loadEnt(
      viewer,
      id,
      UserBase.loaderOptions.apply(this),
    )) as T | null;
  }

  static async loadX<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return (await loadEntX(
      viewer,
      id,
      UserBase.loaderOptions.apply(this),
    )) as T;
  }

  static async loadMany<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return (await loadEnts(
      viewer,
      UserBase.loaderOptions.apply(this),
      ...ids,
    )) as T[];
  }

  static async loadCustom<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return (await loadCustomEnts(
      viewer,
      UserBase.loaderOptions.apply(this),
      query,
    )) as T[];
  }

  static async loadCustomData<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(UserBase.loaderOptions.apply(this), query, context);
  }

  static async loadRawData<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return userLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await userLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static async loadFromEmailAddress<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    emailAddress: string,
  ): Promise<T | null> {
    return (await loadEntViaKey(viewer, emailAddress, {
      ...UserBase.loaderOptions.apply(this),
      loaderFactory: userEmailAddressLoader,
    })) as T | null;
  }

  static async loadFromEmailAddressX<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    emailAddress: string,
  ): Promise<T> {
    return (await loadEntXViaKey(viewer, emailAddress, {
      ...UserBase.loaderOptions.apply(this),
      loaderFactory: userEmailAddressLoader,
    })) as T;
  }

  static async loadIDFromEmailAddress<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    emailAddress: string,
    context?: Context,
  ): Promise<ID | undefined> {
    const row = await userEmailAddressLoader
      .createLoader(context)
      .load(emailAddress);
    return row?.id;
  }

  static async loadRawDataFromEmailAddress<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    emailAddress: string,
    context?: Context,
  ): Promise<Data | null> {
    return userEmailAddressLoader.createLoader(context).load(emailAddress);
  }

  static async loadFromPhoneNumber<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    phoneNumber: string,
  ): Promise<T | null> {
    return (await loadEntViaKey(viewer, phoneNumber, {
      ...UserBase.loaderOptions.apply(this),
      loaderFactory: userPhoneNumberLoader,
    })) as T | null;
  }

  static async loadFromPhoneNumberX<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    phoneNumber: string,
  ): Promise<T> {
    return (await loadEntXViaKey(viewer, phoneNumber, {
      ...UserBase.loaderOptions.apply(this),
      loaderFactory: userPhoneNumberLoader,
    })) as T;
  }

  static async loadIDFromPhoneNumber<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    phoneNumber: string,
    context?: Context,
  ): Promise<ID | undefined> {
    const row = await userPhoneNumberLoader
      .createLoader(context)
      .load(phoneNumber);
    return row?.id;
  }

  static async loadRawDataFromPhoneNumber<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    phoneNumber: string,
    context?: Context,
  ): Promise<Data | null> {
    return userPhoneNumberLoader.createLoader(context).load(phoneNumber);
  }

  static loaderOptions<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName,
      fields,
      ent: this,
      loaderFactory: userLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (UserBase.schemaFields != null) {
      return UserBase.schemaFields;
    }
    return (UserBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return UserBase.getSchemaFields().get(key);
  }

  queryComments(): UserToCommentsQuery {
    return UserToCommentsQuery.query(this.viewer, this.id);
  }

  queryCreatedEvents(): UserToCreatedEventsQuery {
    return UserToCreatedEventsQuery.query(this.viewer, this.id);
  }

  queryDeclinedEvents(): UserToDeclinedEventsQuery {
    return UserToDeclinedEventsQuery.query(this.viewer, this.id);
  }

  queryEventsAttending(): UserToEventsAttendingQuery {
    return UserToEventsAttendingQuery.query(this.viewer, this.id);
  }

  queryFriends(): UserToFriendsQuery {
    return UserToFriendsQuery.query(this.viewer, this.id);
  }

  queryInvitedEvents(): UserToInvitedEventsQuery {
    return UserToInvitedEventsQuery.query(this.viewer, this.id);
  }

  queryLikers(): UserToLikersQuery {
    return UserToLikersQuery.query(this.viewer, this.id);
  }

  queryLikes(): UserToLikesQuery {
    return UserToLikesQuery.query(this.viewer, this.id);
  }

  queryMaybeEvents(): UserToMaybeEventsQuery {
    return UserToMaybeEventsQuery.query(this.viewer, this.id);
  }

  loadSelfContactEdge(): Promise<AssocEdge | null> {
    return loadUniqueEdge({
      id1: this.id,
      edgeType: EdgeType.UserToSelfContact,
      context: this.viewer.context,
    });
  }

  loadSelfContact(): Promise<Contact | null> {
    return loadUniqueNode(
      this.viewer,
      this.id,
      EdgeType.UserToSelfContact,
      Contact.loaderOptions(),
    );
  }

  queryUserToHostedEvents(): UserToHostedEventsQuery {
    return UserToHostedEventsQuery.query(this.viewer, this.id);
  }

  queryAuthCodes(): UserToAuthCodesQuery {
    return UserToAuthCodesQuery.query(this.viewer, this.id);
  }

  queryContacts(): UserToContactsQuery {
    return UserToContactsQuery.query(this.viewer, this.id);
  }
}

export const userLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});

export const userEmailAddressLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "email_address",
});

export const userPhoneNumberLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "phone_number",
});

userLoader.addToPrime(userEmailAddressLoader);
userLoader.addToPrime(userPhoneNumberLoader);
userEmailAddressLoader.addToPrime(userLoader);
userEmailAddressLoader.addToPrime(userPhoneNumberLoader);
userPhoneNumberLoader.addToPrime(userLoader);
userPhoneNumberLoader.addToPrime(userEmailAddressLoader);
