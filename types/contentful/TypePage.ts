import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeProject } from "./TypeProject";
import type { TypeServices } from "./TypeServices";

export interface TypePageFields {
  name?: EntryFields.Symbol;
  slug?: EntryFields.Symbol;
  projects?: TypeProject[];
  about?: EntryFields.Text;
  team?: Asset[];
  services?: TypeServices[];
}

export type TypePage = Entry<{
  fields: TypePageFields;
  contentTypeId: string;
}>;
