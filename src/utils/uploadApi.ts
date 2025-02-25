import { getAuthToken } from "@/utils/auth";

export const uploadApi = {
  uploadFile: async (file: File): Promise<string> => {
    console.log("Uploading file:", file);
    
    try {
      if (!file) throw new Error("No file selected");

      const formData = new FormData();
      formData.append("file", file);

      const token = getAuthToken();
      console.log("Token:", token);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Upload failed");
      }

      const responseData = await response.json();
      return responseData.path;
    } catch (error: any) {
      console.error("File upload failed:", error);
      throw new Error(`File upload failed: ${error.message}`);
    }
  }
};

