export interface ProjectImage {
  id: string;
  size: string;
  alt?: string;
  description?: string;
  src?: string;
  permalink?: string;
  url: string;
}

export type ProjectFunction =
  | "Rezidențial (Unifamilial)"
  | "Rezidențial (Colectiv)"
  | "Lacaş de cult"
  | "Comerciala"
  | "Administativa"
  | "Cultural-educativa";

export const projectTypes = [
  "Toate",
  "Construcție nouă",
  "Design interior",
  "Restaurare",
  "Extindere",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export type ProjectStage = "Finalizat" | "In Executie" | string;

export interface ProjectMeta {
  id?: string;
  function?: ProjectFunction[];
  location?: string;
  year?: string;
  technical_data?: {
    sd?: string;
    investment_value?: string;
  };
  colaborators?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  type?: ProjectType[];
  is_hidden?: boolean;
  meta?: ProjectMeta;
  description?: string;
  stage?: ProjectStage;
  gallery?: ProjectImage[];
  image: ProjectImage;
  info?: string;
}

export type Projects = Project[];
