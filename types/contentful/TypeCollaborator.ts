import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { Modifiers } from "./modifiers";

export interface TypeCollaboratorFields {
  name?: EntryFieldTypes.Symbol;
}

export type TypeCollaboratorSkeleton = EntrySkeletonType<
  TypeCollaboratorFields,
  "collaborator"
>;

export type TypeCollaborator = Entry<TypeCollaboratorSkeleton, Modifiers, string>;
