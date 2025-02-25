import { CreateAttributeTypeDto, AttributeType, UpdateAttributeTypeDto } from "@/types/attribute-type";
import { getAuthToken } from "@/utils/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAuthHeader = () => {
  return {
    Authorization: `Bearer ${getAuthToken()}`,
    "Content-Type": "application/json"
  };
};

export const attributeTypeApi = {

  getAll: async (): Promise<AttributeType[]> => {
    try {
      // Make sure the URL has a trailing slash
      const response = await fetch(`${BASE_URL}/attribute-types/`, {
        headers: getAuthHeader()
      });
      
      console.log('API URL:', `${BASE_URL}/attribute-types/`);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Failed to fetch attribute types: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Fetched data:', data);
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  },

  create: async (data: CreateAttributeTypeDto): Promise<AttributeType> => {
    // Ensure we only send the required fields
    const createData = {
      name: data.name,
    };
    console.log(createData, "createData");
    

    const response = await fetch(`${BASE_URL}attribute-types`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(createData)
    });
    
    if (!response.ok) {
      throw new Error(`Failed to add item: ${response.statusText}`);
    }

    return response.json();
  },

  update: async ({ _id, ...data }: UpdateAttributeTypeDto): Promise<AttributeType> => {
    const response = await fetch(`${BASE_URL}attribute-types/${_id}`, {
      method: "PATCH",
      headers: getAuthHeader(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update item: ${response.statusText}`);
    }

    return response.json();
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}attribute-types/${id}`, {
      method: "DELETE",
      headers: getAuthHeader(),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete item: ${response.statusText}`);
    }
  },
};
