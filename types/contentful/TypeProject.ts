import type { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";
import type { TypeCollaborator } from "./TypeCollaborator";

export interface TypeProjectFields {
  title?: EntryFields.Symbol;
  slug?: EntryFields.Symbol;
  type: ("Construcție nouă" | "Design interior" | "Extindere" | "Restaurare")[];
  function?: (
    | "Administativa"
    | "Comerciala"
    | "Cultural-educativa"
    | "Lacaş de cult"
    | "Rezidențial (Colectiv)"
    | "Rezidențial (Unifamilial)"
  )[];
  description?: EntryFields.Text;
  status?: ("Finalizat" | "In Executie")[];
  image?: Asset;
  gallery?: Asset[];
  location?: EntryFields.Symbol;
  geoLocation?: EntryFields.Location;
  year?: EntryFields.Symbol;
  collaborators?: TypeCollaborator[];
}

export type TypeProject = Entry<{
  fields: TypeProjectFields;
  contentTypeId: string;
}>;

export interface TypeProjectSkeleton extends EntrySkeletonType {
  contentTypeId: "project";
  fields: TypeProjectFields;
}
