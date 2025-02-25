"use client";

import LoginSidebar from "@/components/login-sidebar"; // Correct import (no curly braces)
import VerifyCode from "@/components/VerifyCode";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Login Left Section */}
      <LoginSidebar />

      {/* Right Section test */}
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <VerifyCode />
        </div>
      </div>
    </div>
  );
}