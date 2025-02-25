import { getAuthToken } from '@/utils/auth';
import { Class, ClassFormData } from '@/types/class';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

class ClassApi {
  async getClasses(): Promise<Class[]> {
    try {
      console.log('API URL:', `${BASE_URL}classes`);
      console.log('Auth Token:', getAuthToken());
      
      const response = await fetch(`${BASE_URL}classes`, {
      });

      console.log('Response status:', response);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error:', errorData);
        throw new Error(`Failed to fetch classes: ${response.status} ${errorData}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      return data;
    } catch (error) {
      console.error('ClassApi.getClasses error:', error);
      throw error;
    }
  }

  async createClass(data: ClassFormData): Promise<Class> {
    const response = await fetch(`${BASE_URL}classes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create class');
    return response.json();
  }

  async updateClass(id: string, data: ClassFormData): Promise<Class> {
    const response = await fetch(`${BASE_URL}classes/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update class');
    return response.json();
  }

  async deleteClass(id: string): Promise<void> {
    const response = await fetch(`${BASE_URL}classes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    if (!response.ok) throw new Error('Failed to delete class');
  }
}

export const classApi = new ClassApi();
