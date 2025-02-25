import { getAuthToken } from '@/utils/auth';
import { Lecture, LectureFormData } from '@/types/lecture';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

class LectureApi {
  async getLectures(chapterId?: string): Promise<Lecture[]> {
    const url = chapterId ? 
      `${BASE_URL}lectures?chapterId=${chapterId}` : 
      `${BASE_URL}lectures`;
    
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch lectures');
    return response.json();
  }

  async createLecture(data: LectureFormData): Promise<Lecture> {
    const response = await fetch(`${BASE_URL}lectures`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create lecture');
    return response.json();
  }

  async updateLecture(id: string, data: LectureFormData): Promise<Lecture> {
    const response = await fetch(`${BASE_URL}lectures/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update lecture');
    return response.json();
  }

  async deleteLecture(id: string): Promise<void> {
    const response = await fetch(`${BASE_URL}lectures/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    if (!response.ok) throw new Error('Failed to delete lecture');
  }
}

export const lectureApi = new LectureApi();
