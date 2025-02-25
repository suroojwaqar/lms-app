"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Country, City } from "country-state-city";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Validation schema
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
});

export default function RegistrationForm() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [type] = useState<"parent" | "student" | "teacher">("parent"); // Explicitly set default type as parent
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // State for loader
  const [cities, setCities] = useState<any[]>([]);
  const [countryCode, setCountryCode] = useState("");

  // Get all countries
  const countries = Country.getAllCountries();

  // Update cities when country changes
  useEffect(() => {
    if (countryCode) {
      const countryCities = City.getCitiesOfCountry(countryCode) || [];
      setCities(countryCities);
    }
  }, [countryCode]);

  // Handle country change
  const handleCountryChange = (value: string) => {
    const selectedCountry = countries.find((c) => c.name === value);
    setCountry(value);
    if (selectedCountry) {
      setCountryCode(selectedCountry.isoCode);
      setCity(""); // Reset city when country changes
    }
  };

  // Validate form fields
  const validateForm = () => {
    try {
      registerSchema.parse({
        name,
        email,
        password,
        phone,
        country,
        city,
      });
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      }
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // First API call - Register user
      const registerResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name, 
          email, 
          password, 
          type,
          roleId: "679cd2ec2b0f000ac3e9a147" // Add default roleId
        }),
      });

      const userData = await registerResponse.json();
      console.log(userData,'userData');
      

      if (!registerResponse.ok) {
        setError(userData.message || "Registration failed");
        return;
      }

      const userId = userData.user._id;
      console.log(userId,'userId');
      

      // Second API call - Save profile information
      const profileResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/Profiles`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId,
            phone,
            country,
            city
          })
        }
      );

      const profileData = await profileResponse.json();

      if (!profileResponse.ok) {
        setError(profileData.message || "Failed to save profile information");
        return;
      }

      setSuccess("Registration successful! Redirecting to verify code...");
      
      // Redirect to verify-code page
      setTimeout(() => {
        window.location.href = `/verify-code?id=${userId}`;
      }, 2000);

    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={cn("flex flex-col gap-6")} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details to register
        </p>
      </div>
      <div className="grid gap-6">
        {/* Name and Email in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Country and City in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="country">Country</Label>
            <Select value={country} onValueChange={handleCountryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.isoCode} value={country.name}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Select value={city} onValueChange={setCity} disabled={!country}>
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.name} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        {/* Submit Button with Loader */}
        <Button
          type="submit"
          className="w-full bg-primary-hex"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
              <span>Registering...</span>
            </div>
          ) : (
            "Register"
          )}
        </Button>

        {/* Login Link */}
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Log in
          </Link>
        </div>
      </div>
    </form>
  );
}