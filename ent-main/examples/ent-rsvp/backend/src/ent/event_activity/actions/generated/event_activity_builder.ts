// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { AssocEdgeInputOptions, Ent, ID, Viewer } from "@snowtop/ent";
import {
  Action,
  Builder,
  Changeset,
  Orchestrator,
  WriteOperation,
  saveBuilder,
  saveBuilderX,
} from "@snowtop/ent/action";
import { Event, EventActivity, Guest, GuestGroup } from "src/ent/";
import { EdgeType, NodeType } from "src/ent/generated/const";
import schema from "src/schema/event_activity";

export interface EventActivityInput {
  name?: string;
  eventID?: ID | Builder<Event>;
  startTime?: Date;
  endTime?: Date | null;
  location?: string;
  description?: string | null;
  inviteAllGuests?: boolean;
}

export interface EventActivityAction extends Action<EventActivity> {
  getInput(): EventActivityInput;
}

function randomNum(): string {
  return Math.random().toString(10).substring(2);
}

export class EventActivityBuilder implements Builder<EventActivity> {
  orchestrator: Orchestrator<EventActivity>;
  readonly placeholderID: ID;
  readonly ent = EventActivity;
  private input: EventActivityInput;

  public constructor(
    public readonly viewer: Viewer,
    public readonly operation: WriteOperation,
    action: EventActivityAction,
    public readonly existingEnt?: EventActivity | undefined,
  ) {
    this.placeholderID = `$ent.idPlaceholderID$ ${randomNum()}-EventActivity`;
    this.input = action.getInput();
    const updateInput = (d: EventActivityInput) =>
      this.updateInput.apply(this, [d]);

    this.orchestrator = new Orchestrator({
      viewer,
      operation: this.operation,
      tableName: "event_activities",
      key: "id",
      loaderOptions: EventActivity.loaderOptions(),
      builder: this,
      action,
      schema,
      editedFields: () => this.getEditedFields.apply(this),
      updateInput,
    });
  }

  getInput(): EventActivityInput {
    return this.input;
  }

  updateInput(input: EventActivityInput) {
    // override input
    this.input = {
      ...this.input,
      ...input,
    };
  }

  // this gets the inputs that have been written for a given edgeType and operation
  // WriteOperation.Insert for adding an edge and WriteOperation.Delete for deleting an edge
  getEdgeInputData(edgeType: EdgeType, op: WriteOperation) {
    return this.orchestrator.getInputEdges(edgeType, op);
  }

  clearInputEdges(edgeType: EdgeType, op: WriteOperation, id?: ID) {
    this.orchestrator.clearInputEdges(edgeType, op, id);
  }

  addAttending(
    ...nodes: (ID | Guest | Builder<Guest>)[]
  ): EventActivityBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAttendingID(node);
      } else if (typeof node === "object") {
        this.addAttendingID(node.id);
      } else {
        this.addAttendingID(node);
      }
    }
    return this;
  }

  addAttendingID(
    id: ID | Builder<Guest>,
    options?: AssocEdgeInputOptions,
  ): EventActivityBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.EventActivityToAttending,
      NodeType.Guest,
      options,
    );
    return this;
  }

  removeAttending(...nodes: (ID | Guest)[]): EventActivityBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.EventActivityToAttending,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.EventActivityToAttending,
        );
      }
    }
    return this;
  }

  addDeclined(...nodes: (ID | Guest | Builder<Guest>)[]): EventActivityBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addDeclinedID(node);
      } else if (typeof node === "object") {
        this.addDeclinedID(node.id);
      } else {
        this.addDeclinedID(node);
      }
    }
    return this;
  }

  addDeclinedID(
    id: ID | Builder<Guest>,
    options?: AssocEdgeInputOptions,
  ): EventActivityBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.EventActivityToDeclined,
      NodeType.Guest,
      options,
    );
    return this;
  }

  removeDeclined(...nodes: (ID | Guest)[]): EventActivityBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.EventActivityToDeclined,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.EventActivityToDeclined,
        );
      }
    }
    return this;
  }

  addInvite(
    ...nodes: (ID | GuestGroup | Builder<GuestGroup>)[]
  ): EventActivityBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addInviteID(node);
      } else if (typeof node === "object") {
        this.addInviteID(node.id);
      } else {
        this.addInviteID(node);
      }
    }
    return this;
  }

  addInviteID(
    id: ID | Builder<GuestGroup>,
    options?: AssocEdgeInputOptions,
  ): EventActivityBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.EventActivityToInvites,
      NodeType.GuestGroup,
      options,
    );
    return this;
  }

  removeInvite(...nodes: (ID | GuestGroup)[]): EventActivityBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.EventActivityToInvites,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.EventActivityToInvites,
        );
      }
    }
    return this;
  }

  async build(): Promise<Changeset<EventActivity>> {
    return this.orchestrator.build();
  }

  async valid(): Promise<boolean> {
    return this.orchestrator.valid();
  }

  async validX(): Promise<void> {
    return this.orchestrator.validX();
  }

  async save(): Promise<void> {
    await saveBuilder(this);
  }

  async saveX(): Promise<void> {
    await saveBuilderX(this);
  }

  async editedEnt(): Promise<EventActivity | null> {
    return this.orchestrator.editedEnt();
  }

  async editedEntX(): Promise<EventActivity> {
    return this.orchestrator.editedEntX();
  }

  private getEditedFields(): Map<string, any> {
    const fields = this.input;

    const result = new Map<string, any>();

    const addField = function (key: string, value: any) {
      if (value !== undefined) {
        result.set(key, value);
      }
    };
    addField("Name", fields.name);
    addField("eventID", fields.eventID);
    addField("StartTime", fields.startTime);
    addField("EndTime", fields.endTime);
    addField("Location", fields.location);
    addField("Description", fields.description);
    addField("InviteAllGuests", fields.inviteAllGuests);
    return result;
  }

  isBuilder(node: ID | Ent | Builder<Ent>): node is Builder<Ent> {
    return (node as Builder<Ent>).placeholderID !== undefined;
  }

  // get value of Name. Retrieves it from the input if specified or takes it from existingEnt
  getNewNameValue(): string | undefined {
    return this.input.name || this.existingEnt?.name;
  }

  // get value of eventID. Retrieves it from the input if specified or takes it from existingEnt
  getNewEventIDValue(): ID | Builder<Event> | undefined {
    return this.input.eventID || this.existingEnt?.eventID;
  }

  // get value of StartTime. Retrieves it from the input if specified or takes it from existingEnt
  getNewStartTimeValue(): Date | undefined {
    return this.input.startTime || this.existingEnt?.startTime;
  }

  // get value of EndTime. Retrieves it from the input if specified or takes it from existingEnt
  getNewEndTimeValue(): Date | null | undefined {
    return this.input.endTime || this.existingEnt?.endTime;
  }

  // get value of Location. Retrieves it from the input if specified or takes it from existingEnt
  getNewLocationValue(): string | undefined {
    return this.input.location || this.existingEnt?.location;
  }

  // get value of Description. Retrieves it from the input if specified or takes it from existingEnt
  getNewDescriptionValue(): string | null | undefined {
    return this.input.description || this.existingEnt?.description;
  }

  // get value of InviteAllGuests. Retrieves it from the input if specified or takes it from existingEnt
  getNewInviteAllGuestsValue(): boolean | undefined {
    return this.input.inviteAllGuests || this.existingEnt?.inviteAllGuests;
  }
}