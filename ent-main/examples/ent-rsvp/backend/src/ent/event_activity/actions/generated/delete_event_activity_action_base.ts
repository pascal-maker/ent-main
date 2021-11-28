// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import { Action, Changeset, WriteOperation } from "@snowtop/ent/action";
import { EventActivity } from "src/ent/";
import {
  EventActivityBuilder,
  EventActivityInput,
} from "src/ent/event_activity/actions/generated/event_activity_builder";

export class DeleteEventActivityActionBase implements Action<EventActivity> {
  public readonly builder: EventActivityBuilder;
  public readonly viewer: Viewer;
  protected eventActivity: EventActivity;

  constructor(viewer: Viewer, eventActivity: EventActivity) {
    this.viewer = viewer;
    this.builder = new EventActivityBuilder(
      this.viewer,
      WriteOperation.Delete,
      this,
      eventActivity,
    );
    this.eventActivity = eventActivity;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): EventActivityInput {
    return {};
  }

  async changeset(): Promise<Changeset<EventActivity>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<void> {
    await this.builder.save();
  }

  async saveX(): Promise<void> {
    await this.builder.saveX();
  }

  static create<T extends DeleteEventActivityActionBase>(
    this: new (viewer: Viewer, eventActivity: EventActivity) => T,
    viewer: Viewer,
    eventActivity: EventActivity,
  ): T {
    return new this(viewer, eventActivity);
  }

  static async saveXFromID<T extends DeleteEventActivityActionBase>(
    this: new (viewer: Viewer, eventActivity: EventActivity) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<void> {
    const eventActivity = await EventActivity.loadX(viewer, id);
    return new this(viewer, eventActivity).saveX();
  }
}