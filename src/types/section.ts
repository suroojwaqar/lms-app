export interface Section {
  _id: string;
  name: string;
  parentId: string | null;
  path: string;
  icon: string;
  dateCreated: string;
}

export interface SectionFormData {
  _id?: string;
  name: string;
  parentId: string | null;
  path: string;
  icon: string;
}
