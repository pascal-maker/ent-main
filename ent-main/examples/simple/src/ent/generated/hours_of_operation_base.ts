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
import schema from "../../schema/hours_of_operation";

const tableName = "hours_of_operations";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "day_of_week",
  "open",
  "close",
  "day_of_week_alt",
];

export enum DayOfWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export enum DayOfWeekAlt {
  Friday = "fri",
  Monday = "mon",
  Saturday = "sat",
  Sunday = "sun",
  Thursday = "thu",
  Tuesday = "tue",
  Wednesday = "wed",
}

export class HoursOfOperationBase {
  readonly nodeType = NodeType.HoursOfOperation;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly dayOfWeek: DayOfWeek;
  readonly open: string;
  readonly close: string;
  readonly dayOfWeekAlt: DayOfWeekAlt | null;

  constructor(public viewer: Viewer, protected data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.dayOfWeek = data.day_of_week;
    this.open = data.open;
    this.close = data.close;
    this.dayOfWeekAlt = data.day_of_week_alt;
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return (await loadEnt(
      viewer,
      id,
      HoursOfOperationBase.loaderOptions.apply(this),
    )) as T | null;
  }

  static async loadX<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return (await loadEntX(
      viewer,
      id,
      HoursOfOperationBase.loaderOptions.apply(this),
    )) as T;
  }

  static async loadMany<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return (await loadEnts(
      viewer,
      HoursOfOperationBase.loaderOptions.apply(this),
      ...ids,
    )) as T[];
  }

  static async loadCustom<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return (await loadCustomEnts(
      viewer,
      HoursOfOperationBase.loaderOptions.apply(this),
      query,
    )) as T[];
  }

  static async loadCustomData<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      HoursOfOperationBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return hoursOfOperationLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await hoursOfOperationLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends HoursOfOperationBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName,
      fields,
      ent: this,
      loaderFactory: hoursOfOperationLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (HoursOfOperationBase.schemaFields != null) {
      return HoursOfOperationBase.schemaFields;
    }
    return (HoursOfOperationBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return HoursOfOperationBase.getSchemaFields().get(key);
  }
}

export const hoursOfOperationLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
