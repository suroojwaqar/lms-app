// src/components/auth/otp-verification.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { otpSchema } from '@/lib/validations/auth';
import { FormSkeleton } from "@/components/ui/skeleton-form";

interface OTPVerificationProps {
  email: string;
  onVerify: (otp: string) => Promise<void>;
  onResend: () => Promise<void>;
  isLoading?: boolean;
}

export function OTPVerification({
  email,
  onVerify,
  onResend,
  isLoading
}: OTPVerificationProps) {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds cooldown
  const [error, setError] = useState('');

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(time => time - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const validatedOtp = otpSchema.parse({ otp });
      await onVerify(validatedOtp.otp);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Invalid OTP');
      }
    }
  };

  const handleResend = async () => {
    try {
      await onResend();
      setTimeLeft(30);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  if (isLoading) {
    return <FormSkeleton />;
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Email Verification</h1>
        <p className="text-balance text-sm text-muted-foreground">
          We've sent a verification code to {email}
        </p>
      </div>
     
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            placeholder="Enter 5-digit code"
            value={otp}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setOtp(value);
              setError("");
            }}
            className="text-center text-lg tracking-widest"
            disabled={isLoading}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={otp.length !== 5 || isLoading}
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </Button>

        <div className="text-center">
          <Button
            type="button"
            variant="link"
            onClick={handleResend}
            disabled={timeLeft > 0 || isLoading}
            className="text-sm"
          >
            {" "}
            {timeLeft > 0
              ? `Resend code in ${timeLeft}s`
              : isLoading
              ? "Sending..."
              : "Resend Code"}
          </Button>
        </div>
      </form>
    </div>
  );
}