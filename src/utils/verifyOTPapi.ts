export const verifyOTP = async (id: string, otp: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/verify-otp/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ otp })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Invalid verification code.");
  }

  return data;
};

export const resendOTP = async (id: string) => {
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

  if (!response.ok) {
    throw new Error(data.message || "Failed to resend OTP. Please try again.");
  }

  return data;
};
