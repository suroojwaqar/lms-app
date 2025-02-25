"use client";

import { LoginForm } from "@/app/(auth)/login/login-form";
import LoginSidebar from "@/components/login-sidebar";

export function LoginPageClient() {
  return (
    <main className="min-h-screen flex">
      <LoginSidebar />
      <section className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
