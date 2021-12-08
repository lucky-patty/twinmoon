export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Project {
  title: string;
  description: string;
  activeImage: string;
  inactiveImage: string;
}
