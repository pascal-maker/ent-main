// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import { Action, Changeset, WriteOperation } from "@snowtop/ent/action";
import { Event } from "src/ent/";
import {
  EventBuilder,
  EventInput,
} from "src/ent/event/actions/generated/event_builder";

interface customActivityInput {
  name: string;
  startTime: Date;
  endTime?: Date | null;
  location: string;
  description?: string | null;
  inviteAllGuests?: boolean;
  address?: customAddressInput | null;
}

interface customAddressInput {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  apartment?: string | null;
}

export interface EventCreateInput {
  name: string;
  slug?: string | null;
  activities?: customActivityInput[] | null;
}

export class CreateEventActionBase implements Action<Event> {
  public readonly builder: EventBuilder;
  public readonly viewer: Viewer;
  protected input: EventCreateInput;

  constructor(viewer: Viewer, input: EventCreateInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new EventBuilder(this.viewer, WriteOperation.Insert, this);
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): EventInput {
    return this.input;
  }

  async changeset(): Promise<Changeset<Event>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<Event | null> {
    await this.builder.save();
    return this.builder.editedEnt();
  }

  async saveX(): Promise<Event> {
    await this.builder.saveX();
    return this.builder.editedEntX();
  }

  static create<T extends CreateEventActionBase>(
    this: new (viewer: Viewer, input: EventCreateInput) => T,
    viewer: Viewer,
    input: EventCreateInput,
  ): T {
    return new this(viewer, input);
  }
}