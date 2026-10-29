import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { TypeProjectSkeleton } from "./TypeProject";
import type { TypeServicesSkeleton } from "./TypeServices";
import type { Modifiers } from "./modifiers";

export interface TypePageFields {
  name?: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  projects?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeProjectSkeleton>
  >;
  about?: EntryFieldTypes.Text;
  team?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  services?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeServicesSkeleton>
  >;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;

export type TypePage = Entry<TypePageSkeleton, Modifiers, string>;
