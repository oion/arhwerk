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

export const projectTypes = [
  "Toate",
  "Construcție nouă",
  "Design interior",
  "Restaurare",
  "Extindere",
] as const;

export type ProjectType = (typeof projectTypes)[number] | string;

export type ProjectStage = "Finalizat" | "In Executie" | string;

export interface ProjectInfo {
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
  info?: ProjectInfo;
  description?: string;
  stage: ProjectStage;
  gallery?: ProjectImage[];
  image: ProjectImage;
  hidden?: boolean;
}

export type Projects = Project[];
