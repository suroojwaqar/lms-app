// src/components/auth/student-registration-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { classesApi, type Class } from "@/lib/api/classes";
import { DatePicker } from "@/components/ui/date-picker";
import {
  studentRegisterSchema,
  type StudentRegisterInput
} from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { FormSkeleton } from "@/components/ui/skeleton-form";

interface StudentRegistrationFormProps {
  onSubmit: (data: StudentRegisterInput) => Promise<void>;
  isLoading?: boolean;
}

export function StudentRegistrationForm({
  onSubmit,
  isLoading
}: StudentRegistrationFormProps) {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loadingClasses, setLoadingClasses] = useState(true);
  const [error, setError] = useState<string>("");

  const form = useForm<StudentRegisterInput>({
    resolver: zodResolver(studentRegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "male",
      class: ""
    }
  });

  useEffect(() => {
    const loadClasses = async () => {
      try {
        setLoadingClasses(true);
        const classList = await classesApi.getClasses();
        setClasses(classList || []); // Ensure we always set an array
      } catch (error) {
        console.error("Failed to load classes:", error);
        setError("Failed to load classes. Please try again.");
      } finally {
        setLoadingClasses(false);
      }
    };
    loadClasses();
  }, []);

  if (isLoading || loadingClasses) {
    return <FormSkeleton />;
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-2 text-center"></div>
        <h1 className="text-2xl font-bold">Student Registration</h1>
        <p className="text-balance text-sm text-muted-foreground">
                 Add student details to complete the registration

        </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <DatePicker
                      date={field.value ? new Date(field.value) : undefined}
                      onChange={(date) => field.onChange(date?.toISOString())}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={loadingClasses}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={
                          loadingClasses 
                            ? "Loading classes..." 
                            : error 
                            ? "Error loading classes" 
                            : "Select class"
                        } />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {error ? (
                        <SelectItem value="error" disabled>
                          {error}
                        </SelectItem>
                      ) : (
                        classes.map((cls) => (
                          <SelectItem key={cls._id} value={cls._id}>
                            {cls.displayName}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Adding Student..." : "Add Student"}
          </Button>
        </form>
      </Form>
    </div>
  );
}