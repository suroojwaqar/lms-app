// src/hooks/use-registration.ts
import { useState } from "react";
import { authApi } from "@/lib/api/auth";
import { ParentRegisterInput } from "@/lib/validators/auth";

interface UserResponse {
  id: string;
  name: string;
  email: string;
  type: "student" | "parent" | "teacher" | "admin";
}

// Student registration input type
interface StudentRegisterInput {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  class: string;
}

interface RegistrationState {
  userId?: string;
  email?: string;
  isVerified?: boolean;
  studentId?: string;
}

export const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registrationData, setRegistrationData] = useState<RegistrationState>({});

  const registerParent = async (data: ParentRegisterInput) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        type: "parent",
        
        roleId: "679cd2ec2b0f000ac3e9a147" // Add default roleId
      });

      await authApi.createProfile({
        userId: response._id, // Use _id instead of id
        data: [
          {
            phoneNumber: data.phoneNumber,
            country: data.country,
            city: data.city
          }
        ]
      });

      setRegistrationData({
        userId: response._id, // Use _id instead of id
        email: data.email,
        isVerified: false
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTP = async (otp: string) => {
    if (!registrationData.userId) {
      throw new Error("User ID not found");
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.verifyOTP(registrationData.userId, otp);
      setRegistrationData((prev) => ({
        ...prev,
        isVerified: true
      }));
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resendOTP = async () => {
    const userId = registrationData.userId;
    if (!userId) {
      throw new Error("User ID not found");
    }

    setIsLoading(true);
    setError(null);
    try {
      return await authApi.resendOTP(userId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const registerStudent = async (data: StudentRegisterInput) => {
    if (!registrationData.userId) {
      throw new Error('Parent ID not found');
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.registerUser({
        name: `${data.firstName} ${data.lastName}`,
        email: `${data.firstName.toLowerCase()}.${data.lastName.toLowerCase()}.${Date.now()}@student.lms.com`,
        password: 'Student@123',
        type: 'student',
        roleId: "679cd2ec2b0f000ac3e9a147" // Add default roleId
      });

      await authApi.createProfile({
        userId: response._id, // Use _id instead of id
        data: [{
          dateOfBirth: data.dateOfBirth,
          gender: data.gender,
          class: data.class,
          parentId: registrationData.userId
        }]
      });

      setRegistrationData(prev => ({
        ...prev,
        studentId: response._id // Use _id instead of id
      }));

      return response;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    registrationData,
    registerParent,
    registerStudent,
    verifyOTP,
    resendOTP
  };
};



