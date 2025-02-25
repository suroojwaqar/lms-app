import { Metadata } from "next";
import { LoginPageClient } from "./login-client";

export const metadata: Metadata = {
  title: "Login | LMS Admin",
  description: "Login to your LMS admin account",
};

export default function LoginPage() {
  return <LoginPageClient />;
}