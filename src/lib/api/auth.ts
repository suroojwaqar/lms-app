// src/lib/api/auth.ts
import api from "./axios-config";

export interface RegisterUserDto {
  name: string;
  email: string;
  password: string;
  type: "student" | "parent" | "teacher" | "admin";
  roleId?: string;
}

export interface CreateProfileDto {
  userId: string;
  data: ProfileData[];
}

export interface ProfileData {
  phoneNumber?: string;
  country?: string;
  city?: string;
  dateOfBirth?: string;
  gender?: string;
  class?: string;
  parentId?: string;
  [key: string]: any;
}

interface UserResponse {
  _id: string;  // Changed from id to _id
  name: string;
  email: string;
  type: "student" | "parent" | "teacher" | "admin";
  isVerified: boolean;
  roleId: string;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface RegisterResponse {
  user: UserResponse;
  message: string;
  success: boolean;
}

export const authApi = {
  // Register User
  registerUser: async (data: RegisterUserDto): Promise<UserResponse> => {
    try {        
      const response = await api.post<RegisterResponse>("/users/register", data);
      if (!response.data?.user) {
        throw new Error('Invalid response format from server');
      }
      return response.data.user;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  // Create Profile
  createProfile: async (data: CreateProfileDto): Promise<void> => {
    console.log(data,'data');
    
    try {
        
      await api.post<ApiResponse<void>>("/profiles", data);
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to create profile"
      );
    }
  },

  // Verify OTP
  verifyOTP: async (userId: string, otp: string): Promise<void> => {
    try {
      await api.post<ApiResponse<void>>(`/users/verify-otp/${userId}`, { otp });
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "OTP verification failed"
      );
    }
  },

  // Resend OTP
  resendOTP: async (userId: string): Promise<void> => {
    try {
      await api.post<ApiResponse<void>>(`/users/resend-otp/${userId}`);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Failed to resend OTP");
    }
  }
};
