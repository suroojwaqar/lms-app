import { Section, SectionFormData } from "@/types/section";

class SectionApi {
  private getAuthHeader(): Headers {
    const userStore = localStorage.getItem("user");
    if (!userStore) throw new Error("No user data found. Please log in.");

    const user = JSON.parse(userStore);
    const token = user.access_token;
    if (!token) throw new Error("No token found. Please log in.");

    return new Headers({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  private async fetchApi<T>(endpoint: string, options: RequestInit): Promise<T> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
      {
        ...options,
        headers: this.getAuthHeader(),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async getSections(): Promise<Section[]> {
    return this.fetchApi<Section[]>('/sections', { method: 'GET' });
  }

  async createSection(data: SectionFormData): Promise<Section> {
    return this.fetchApi<Section>('/sections', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        dateCreated: new Date().toISOString()
      })
    });
  }

  async updateSection(id: string, data: SectionFormData): Promise<Section> {
    return this.fetchApi<Section>(`/sections/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  }

  async deleteSection(id: string): Promise<void> {
    return this.fetchApi<void>(`/sections/${id}`, { method: 'DELETE' });
  }
}

export const sectionApi = new SectionApi();
