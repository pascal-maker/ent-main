// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

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
  convertBool,
  convertDate,
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntViaKey,
  loadEntX,
  loadEntXViaKey,
  loadEnts,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import { Guest, NodeType } from "src/ent/internal";
import schema from "src/schema/auth_code";

const tableName = "auth_codes";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "code",
  "guest_id",
  "email_address",
  "sent_code",
];

export class AuthCodeBase {
  readonly nodeType = NodeType.AuthCode;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly code: string;
  readonly guestID: ID;
  readonly emailAddress: string;
  readonly sentCode: boolean;

  constructor(public viewer: Viewer, protected data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.code = data.code;
    this.guestID = data.guest_id;
    this.emailAddress = data.email_address;
    this.sentCode = convertBool(data.sent_code);
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return (await loadEnt(
      viewer,
      id,
      AuthCodeBase.loaderOptions.apply(this),
    )) as T | null;
  }

  static async loadX<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return (await loadEntX(
      viewer,
      id,
      AuthCodeBase.loaderOptions.apply(this),
    )) as T;
  }

  static async loadMany<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return (await loadEnts(
      viewer,
      AuthCodeBase.loaderOptions.apply(this),
      ...ids,
    )) as T[];
  }

  static async loadCustom<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return (await loadCustomEnts(
      viewer,
      AuthCodeBase.loaderOptions.apply(this),
      query,
    )) as T[];
  }

  static async loadCustomData<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      AuthCodeBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return authCodeLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await authCodeLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static async loadFromGuestID<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    guestID: ID,
  ): Promise<T | null> {
    return (await loadEntViaKey(viewer, guestID, {
      ...AuthCodeBase.loaderOptions.apply(this),
      loaderFactory: authCodeGuestIDLoader,
    })) as T | null;
  }

  static async loadFromGuestIDX<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    guestID: ID,
  ): Promise<T> {
    return (await loadEntXViaKey(viewer, guestID, {
      ...AuthCodeBase.loaderOptions.apply(this),
      loaderFactory: authCodeGuestIDLoader,
    })) as T;
  }

  static async loadIDFromGuestID<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    guestID: ID,
    context?: Context,
  ): Promise<ID | undefined> {
    const row = await authCodeGuestIDLoader.createLoader(context).load(guestID);
    return row?.id;
  }

  static async loadRawDataFromGuestID<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
    guestID: ID,
    context?: Context,
  ): Promise<Data | null> {
    return authCodeGuestIDLoader.createLoader(context).load(guestID);
  }

  static loaderOptions<T extends AuthCodeBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName,
      fields,
      ent: this,
      loaderFactory: authCodeLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (AuthCodeBase.schemaFields != null) {
      return AuthCodeBase.schemaFields;
    }
    return (AuthCodeBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return AuthCodeBase.getSchemaFields().get(key);
  }

  async loadGuest(): Promise<Guest | null> {
    return loadEnt(this.viewer, this.guestID, Guest.loaderOptions());
  }

  loadGuestX(): Promise<Guest> {
    return loadEntX(this.viewer, this.guestID, Guest.loaderOptions());
  }
}

export const authCodeLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});

export const authCodeGuestIDLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "guest_id",
});

authCodeLoader.addToPrime(authCodeGuestIDLoader);
authCodeGuestIDLoader.addToPrime(authCodeLoader);
