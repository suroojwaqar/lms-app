import api from "./axios-config";

export interface Class {
  _id: string;
  displayName: string;
}

export const classesApi = {
  getClasses: async (): Promise<Class[]> => {
    try {
      const response = await api.get<{ data: Class[] }>("/Classes");
      console.log("response", response);
      
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Failed to fetch classes");
    }
  }
};
