export interface AttributeType {
  _id: string;
  name: string;
  createdAt: string;
  __v?: number;
}

// Explicitly define only the fields needed for creation
export interface CreateAttributeTypeDto {
  name: string;
}

export interface UpdateAttributeTypeDto {
  _id: string;
  name: string;
}
