import { getAuthToken } from '@/utils/auth';
import { Subject, SubjectFormData } from '@/types/subject';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

class SubjectApi {
  async getSubjects(): Promise<Subject[]> {
    const response = await fetch(`${BASE_URL}subjects`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch subjects');
    return response.json();
  }

  async createSubject(data: SubjectFormData): Promise<Subject> {
    const response = await fetch(`${BASE_URL}subjects`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create subject');
    return response.json();
  }

  async updateSubject(id: string, data: SubjectFormData): Promise<Subject> {
    const response = await fetch(`${BASE_URL}subjects/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update subject');
    return response.json();
  }

  async deleteSubject(id: string): Promise<void> {
    const response = await fetch(`${BASE_URL}subjects/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    if (!response.ok) throw new Error('Failed to delete subject');
  }
}

export const subjectApi = new SubjectApi();
