"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";

// Create a separate component that uses search params
interface VerificationFormProps {
  id: string;
}

function VerificationForm({ id }: VerificationFormProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const router = useRouter();

  const handleVerifyCode = async () => {
    console.log(id,'id');
    
    if (code.length !== 5) {
      setError("Please enter a 5-digit verification code.");
      return;
    }
    console.log("id", id);
    

    if (!id) {
      setError("Id not found. Please try again.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/verify-otp/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ otp: code })
        }
      );

      const data = await response.json();
      console.log('data Rreutrn User data',data);
      

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        router.push("/children-list");
      } else {
        setError(data.message || "Invalid verification code.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    console.log("id", id);
    if (!id) {
      setError("Id not found. Please try again.");
      return;
    }
    

    setResendLoading(true);
    setError("");
    setSuccess("");

    try {
          console.log("id", id);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/resend-otp/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("A new OTP has been sent to your email.");
      } else {
        setError(data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="relative">
      {(loading || resendLoading) && (
        <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

      <div
        className={`flex flex-col gap-6 ${
          loading || resendLoading ? "opacity-50" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Verification Code</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Check your email. Enter the 5-digit verification code.
          </p>
        </div>

        <div className="flex justify-center">
          <InputOTP
            maxLength={5}
            value={code}
            onChange={(value) => setCode(value)}
          >
            <InputOTPGroup>
              {Array.from({ length: 5 }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-16 h-16 text-2xl border-2"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <Button
          onClick={handleVerifyCode}
          className="w-full bg-primary-hex"
          disabled={loading || resendLoading}
        >
          {loading ? "Verifying..." : "Verify Code"}
        </Button>

        <div className="text-center text-sm">
          Didn&apos;t receive the code?{" "}
          <Button
            variant="link"
            onClick={handleResendOTP}
            disabled={resendLoading}
            className="p-0 underline underline-offset-4"
          >
            {resendLoading ? "Sending..." : "Resend OTP"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main page component
export default function VerifyCode() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl font-bold text-red-500">Invalid Verification Link</h1>
        <p className="text-muted-foreground">
          The verification link appears to be invalid or expired. Please request a new verification code.
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerificationForm id={id} />
    </Suspense>
  );
}
