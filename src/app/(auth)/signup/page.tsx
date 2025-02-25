"use client";
import RegistrationForm from "@/app/(auth)/signup/registration-form"; // Import the RegistrationForm component
import LoginSidebar from "@/components/login-sidebar"; // Correct import (no curly braces)

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Login Left Section */}
      <LoginSidebar />

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}