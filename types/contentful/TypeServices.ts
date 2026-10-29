import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { Modifiers } from "./modifiers";

export interface TypeServicesFields {
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
}

export type TypeServicesSkeleton = EntrySkeletonType<
  TypeServicesFields,
  "services"
>;

export type TypeServices = Entry<TypeServicesSkeleton, Modifiers, string>;
