export interface Attribute {
  _id: string;
  title: string;
  type: string;
  parentId: string | null;
  status: string;
  dateCreated: string;
}

export interface AttributeType {
  _id: string;
  name: string;
}

export interface AttributeFormData {
  _id?: string;
  title: string;
  parentId: string | null;
  status: string;
}
