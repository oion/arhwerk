export interface ProjectImage {
  alt?: string;
  description?: string;
  src: string;
}

export interface ProjectMeta {
  id?: string;
  function?: string;
  location?: string;
  year?: string;
  technical_data?: {
    sd?: string;
    investment_value?: string;
  };
  colaborators?: string[];
}

export type ProjectType =
  | "Rezidențial"
  | "Comercial"
  | "Interior"
  | "Restaurare"
  | string;

export type ProjectStatus = "Finalizat" | "In Executie" | string;

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
  is_hidden?: boolean;
}

export type Projects = Project[];
