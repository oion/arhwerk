export interface Project {
  id: string;
  gallery?: ProjectImage[];
  image: {
    src: string;
    alt: string;
  };
  info: string;
  title: string;
  type?: string;
}

export interface ProjectImage {
  alt?: string;
  description?: string;
  src: string;
}

export type Projects = Project[];
