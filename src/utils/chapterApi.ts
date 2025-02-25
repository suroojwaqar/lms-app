import { getAuthToken } from '@/utils/auth';
import { Chapter, ChapterFormData } from '@/types/chapter';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

class ChapterApi {
  async getChapters(subjectId?: string): Promise<Chapter[]> {
    const url = subjectId ? 
      `${BASE_URL}chapters?subjectId=${subjectId}` : 
      `${BASE_URL}chapters`;
    
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch chapters');
    return response.json();
  }

  async createChapter(data: ChapterFormData): Promise<Chapter> {
    const response = await fetch(`${BASE_URL}chapters`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create chapter');
    return response.json();
  }

  async updateChapter(id: string, data: ChapterFormData): Promise<Chapter> {
    const response = await fetch(`${BASE_URL}chapters/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update chapter');
    return response.json();
  }

  async deleteChapter(id: string): Promise<void> {
    const response = await fetch(`${BASE_URL}chapters/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    if (!response.ok) throw new Error('Failed to delete chapter');
  }
}

export const chapterApi = new ChapterApi();
