"use client";

import { Suspense } from "react";
import LoginSidebar from "@/components/login-sidebar";
import VerifyCode from "@/components/VerifyCode";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  return (
    <div className="text-center p-4">
      <p>Something went wrong. Please try again.</p>
    </div>
  );
}

function VerifyCodeWrapper() {
  return (
    <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div>Loading...</div>}>
            <VerifyCode />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default function VerifyCodePage() {
  return (
    <div className="min-h-screen flex">
      <LoginSidebar />
      <VerifyCodeWrapper />
    </div>
  );
}