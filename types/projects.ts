export interface ProjectImage {
  alt?: string;
  description?: string;
  src: string;
}

export type ProjectFunction =
  | "Rezidențial (Unifamilial)"
  | "Rezidențial (Colectiv)"
  | "Lacaş de cult"
  | "Comerciala"
  | "Administativa"
  | "Cultural-educativa"
  | string;

export type ProjectType =
  | "Construcție nouă"
  | "Design interior"
  | "Restaurare"
  | "Extindere"
  | string;

export type ProjectStatus = "Finalizat" | "In Executie" | string;

export interface ProjectMeta {
  id?: string;
  function?: ProjectFunction;
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
  meta?: ProjectMeta;
  description?: string;
  status: ProjectStatus;
  gallery?: ProjectImage[];
  image: ProjectImage;
  info?: string;
  hidden?: boolean;
}

export type Projects = Project[];
