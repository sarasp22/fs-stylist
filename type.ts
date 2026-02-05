
export interface EditorialProject {
  id: string;
  number: string;
  title: string;
  year: string;
  category: string;
  images: string[];
  credits?: {
    magazine?: string;
    editorInChief?: string;
    handle?: string;
  };
  description?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}
