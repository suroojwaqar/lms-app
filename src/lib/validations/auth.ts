// src/lib/validators/auth.ts
import * as z from "zod";
export const parentRegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  phoneNumber: z.string().min(1, "Phone number is required"),
  zipCode: z.string().min(4, "Zip code must be at least 4 characters"),
  country: z.string().min(1, "Country is required"),
  countryCode: z.string().optional(),
  city: z.string().min(1, "City is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const studentRegisterSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.string(),
  gender: z.enum(["male", "female", "other"]),
  class: z.string()
});

export const otpSchema = z.object({
  otp: z.string().length(5, "OTP must be 5 digits")
});

export type ParentRegisterInput = z.infer<typeof parentRegisterSchema>;
export type StudentRegisterInput = z.infer<typeof studentRegisterSchema>;
export type OTPInput = z.infer<typeof otpSchema>;
