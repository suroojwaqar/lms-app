import { getAuthToken } from '@/utils/auth';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class AttributesService {
  async getAttributeType(typeId: string) {
    const response = await fetch(`${BASE_URL}/attribute-types/${typeId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch attribute type');
    return response.json();
  }

  async getAttributes(typeId: string) {
    const response = await fetch(`${BASE_URL}/attributes?type=${typeId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch attributes');
    return response.json();
  }

  async createAttribute(data: any, typeId: string) {
    const response = await fetch(`${BASE_URL}/attributes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, type: typeId }),
    });
    if (!response.ok) throw new Error('Failed to create attribute');
    return response.json();
  }

  async updateAttribute(id: string, data: any) {
    const response = await fetch(`${BASE_URL}/attributes/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update attribute');
    return response.json();
  }

  async deleteAttribute(id: string) {
    const response = await fetch(`${BASE_URL}/attributes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    if (!response.ok) throw new Error('Failed to delete attribute');
    return response.json();
  }
}

export const attributesService = new AttributesService();
