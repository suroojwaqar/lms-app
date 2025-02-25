import { Attribute, AttributeType, AttributeFormData } from "@/types/attribute";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAuthHeaders = () => {
  const userStore = localStorage.getItem("user");
  if (!userStore) throw new Error("No user data found");
  
  const { access_token } = JSON.parse(userStore);
  if (!access_token) throw new Error("No token found");
  
  return {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };
};

export const attributeService = {
  async getAttributeType(typeId: string): Promise<AttributeType> {
    const response = await fetch(`${API_BASE_URL}/attribute-types/${typeId}`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch attribute type");
    return response.json();
  },

  async getAttributes(typeId: string): Promise<Attribute[]> {
    const response = await fetch(`${API_BASE_URL}/attributes?type=${typeId}`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch attributes");
    return response.json();
  },

  async createAttribute(data: AttributeFormData, typeId: string): Promise<Attribute> {
    const response = await fetch(`${API_BASE_URL}/attributes`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...data, type: typeId, dateCreated: new Date().toISOString() }),
    });
    if (!response.ok) throw new Error("Failed to create attribute");
    return response.json();
  },

  async updateAttribute(id: string, data: AttributeFormData, typeId: string): Promise<Attribute> {
    const response = await fetch(`${API_BASE_URL}/attributes/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...data, type: typeId }),
    });
    if (!response.ok) throw new Error("Failed to update attribute");
    return response.json();
  },

  async deleteAttribute(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/attributes/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to delete attribute");
  },
};
