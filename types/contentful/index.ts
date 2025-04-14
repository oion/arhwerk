import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface TypeProjectFields {
  title?: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  type: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  function?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  description?: EntryFieldTypes.Symbol;
  status?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  image?: EntryFieldTypes.AssetLink;
  gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  location?: EntryFieldTypes.Symbol;
  geoLocation?: EntryFieldTypes.Location;
  year?: EntryFieldTypes.Symbol;
}

export interface TypeProjectSkeleton extends EntrySkeletonType {
  contentTypeId: "project";
  fields: TypeProjectFields;
}

export type TypeProject = Entry<TypeProjectSkeleton>;
