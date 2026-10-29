import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { TypeCollaboratorSkeleton } from "./TypeCollaborator";
import type { Modifiers } from "./modifiers";

export interface TypeProjectFields {
  title?: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  type: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | "Construcție nouă"
      | "Design interior"
      | "Extindere"
      | "Restaurare"
      | "Instalații / Temporare"
    >
  >;
  function?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | "Administativa"
      | "Comerciala"
      | "Cultural-educativa"
      | "Lacaş de cult"
      | "Rezidențial (Colectiv)"
      | "Rezidențial (Unifamilial)"
    >
  >;
  description?: EntryFieldTypes.Text;
  status?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<"Finalizat" | "In Executie">
  >;
  image?: EntryFieldTypes.AssetLink;
  gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  location?: EntryFieldTypes.Symbol;
  geoLocation?: EntryFieldTypes.Location;
  year?: EntryFieldTypes.Symbol;
  collaborators?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeCollaboratorSkeleton>
  >;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "project"
>;

export type TypeProject = Entry<TypeProjectSkeleton, Modifiers, string>;
