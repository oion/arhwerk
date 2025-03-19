export interface ProjectImage {
  alt?: string;
  description?: string;
  src: string;
}

export type ProjectType =
  | "Rezidențial"
  | "Comercial"
  | "Interior"
  | "Restaurare"
  | string;
export interface Project {
  id: string;
  gallery?: ProjectImage[];
  image: ProjectImage;
  info: string;
  title: string;
  type?: ProjectType[];
}

export type Projects = Project[];
