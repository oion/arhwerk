import type { Entry, EntryFields } from "contentful";

export interface TypeServicesFields {
  title?: EntryFields.Symbol;
  description?: EntryFields.Text;
}

export type TypeServices = Entry<{
  fields: TypeServicesFields;
  contentTypeId: string;
}>;
