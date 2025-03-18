export interface ProjectImage {
  alt?: string;
  description?: string;
  src: string;
}
export interface Project {
  id: string;
  gallery?: ProjectImage[];
  image: ProjectImage;
  info: string;
  title: string;
  type?: string;
}

export type Projects = Project[];
