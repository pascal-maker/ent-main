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
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntX,
  loadEnts,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import { NodeType } from "../internal";
import schema from "../../schema/holiday";

const tableName = "holidays";
const fields = ["id", "created_at", "updated_at", "label", "date"];

export class HolidayBase {
  readonly nodeType = NodeType.Holiday;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly label: string;
  readonly date: Date;

  constructor(public viewer: Viewer, protected data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.label = data.label;
    this.date = convertDate(data.date);
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return (await loadEnt(
      viewer,
      id,
      HolidayBase.loaderOptions.apply(this),
    )) as T | null;
  }

  static async loadX<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return (await loadEntX(
      viewer,
      id,
      HolidayBase.loaderOptions.apply(this),
    )) as T;
  }

  static async loadMany<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return (await loadEnts(
      viewer,
      HolidayBase.loaderOptions.apply(this),
      ...ids,
    )) as T[];
  }

  static async loadCustom<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return (await loadCustomEnts(
      viewer,
      HolidayBase.loaderOptions.apply(this),
      query,
    )) as T[];
  }

  static async loadCustomData<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      HolidayBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return holidayLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await holidayLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends HolidayBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName,
      fields,
      ent: this,
      loaderFactory: holidayLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (HolidayBase.schemaFields != null) {
      return HolidayBase.schemaFields;
    }
    return (HolidayBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return HolidayBase.getSchemaFields().get(key);
  }
}

export const holidayLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
