import type { Entry, EntryFields } from "contentful";

export interface TypeCollaboratorFields {
  name?: EntryFields.Symbol;
}

export type TypeCollaborator = Entry<{
  fields: TypeCollaboratorFields;
  contentTypeId: string;
}>;
