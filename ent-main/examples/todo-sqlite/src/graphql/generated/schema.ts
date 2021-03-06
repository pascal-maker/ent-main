// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLSchema } from "graphql";
import {
  AccountCreateInputType,
  AccountCreatePayloadType,
} from "src/graphql/mutations/generated/account/account_create_type";
import {
  AccountDeleteInputType,
  AccountDeletePayloadType,
} from "src/graphql/mutations/generated/account/account_delete_type";
import {
  AccountEditInputType,
  AccountEditPayloadType,
} from "src/graphql/mutations/generated/account/account_edit_type";
import { MutationType } from "src/graphql/mutations/generated/mutation_type";
import {
  TagCreateInputType,
  TagCreatePayloadType,
} from "src/graphql/mutations/generated/tag/tag_create_type";
import {
  TodoAddTagInputType,
  TodoAddTagPayloadType,
} from "src/graphql/mutations/generated/todo/todo_add_tag_type";
import {
  TodoChangeStatusInputType,
  TodoChangeStatusPayloadType,
} from "src/graphql/mutations/generated/todo/todo_change_status_type";
import {
  TodoCreateInputType,
  TodoCreatePayloadType,
} from "src/graphql/mutations/generated/todo/todo_create_type";
import {
  TodoDeleteInputType,
  TodoDeletePayloadType,
} from "src/graphql/mutations/generated/todo/todo_delete_type";
import {
  TodoRemoveTagInputType,
  TodoRemoveTagPayloadType,
} from "src/graphql/mutations/generated/todo/todo_remove_tag_type";
import {
  TodoRenameInputType,
  TodoRenamePayloadType,
} from "src/graphql/mutations/generated/todo/todo_rename_type";
import {
  AccountToOpenTodosConnectionType,
  AccountToTagsConnectionType,
  AccountToTodosConnectionType,
  AccountType,
  TagToTodosConnectionType,
  TagType,
  TodoToTagsConnectionType,
  TodoType,
} from "src/graphql/resolvers";
import { QueryType } from "src/graphql/resolvers/generated/query_type";

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  types: [
    AccountType,
    TagType,
    TodoType,
    AccountToOpenTodosConnectionType(),
    AccountToTagsConnectionType(),
    AccountToTodosConnectionType(),
    TagToTodosConnectionType(),
    TodoToTagsConnectionType(),
    AccountCreateInputType,
    AccountCreatePayloadType,
    AccountDeleteInputType,
    AccountDeletePayloadType,
    AccountEditInputType,
    AccountEditPayloadType,
    TagCreateInputType,
    TagCreatePayloadType,
    TodoAddTagInputType,
    TodoAddTagPayloadType,
    TodoChangeStatusInputType,
    TodoChangeStatusPayloadType,
    TodoCreateInputType,
    TodoCreatePayloadType,
    TodoDeleteInputType,
    TodoDeletePayloadType,
    TodoRemoveTagInputType,
    TodoRemoveTagPayloadType,
    TodoRenameInputType,
    TodoRenamePayloadType,
  ],
});
