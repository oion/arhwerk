export interface ProjectImage {
  alt?: string;
  description?: string;
  src: string;
}

export interface ProjectMeta {
  function?: string;
  location?: string;
  year?: string;
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
}

export type Projects = Project[];
