import { log } from "node:console";

interface User {
  _id?: string;
  name: string;
  email: string;
  type: string;
  roleId: string;
  password?: string;
}

class UserApi {
  private getToken(): string {
    const userStore = localStorage.getItem("user");
    if (!userStore) throw new Error("No user data found. Please log in.");

    const user = JSON.parse(userStore);
    const token = user.access_token;
    if (!token) throw new Error("No token found. Please log in.");

    return token;
  }

  private async fetchApi(endpoint: string, options: RequestInit) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
      {
        ...options,
        headers: {
          Authorization: `Bearer ${this.getToken()}`,
          "Content-Type": "application/json",
          ...options.headers
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return response.json();
  }

  async getUsers() {
    return this.fetchApi(`/users/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.getToken()}`
      }
    });
  }

  async getRoles() {
    return this.fetchApi("/roles", { method: "GET" });
  }

  async createUser(userData: User) {
    console.log(userData, "userData");

    return this.fetchApi("/users", {
      method: "POST",
      body: JSON.stringify(userData)
    });
  }

  async updateUser(id: string, userData: User) {
    console.log(userData, "userData");

    return this.fetchApi(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData)
    });
  }

  async deleteUser(id: string) {
    return this.fetchApi(`/users/${id}`, { method: "DELETE" });
  }
}

export const userApi = new UserApi();
