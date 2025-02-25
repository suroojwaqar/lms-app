"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { classApi } from "@/utils/classApi"
import { Class } from "@/types/class"
import { uploadApi } from "@/utils/uploadApi"
import { profileApi } from "@/utils/profileApi"

const formSchema = z.object({
  studentName: z.string().min(2, {
    message: "Student name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  dateOfBirth: z.date({
    required_error: "A date of birth is required",
  }),
  gender: z.string(),
  class: z.string(),
  image: z.instanceof(File).optional(),
})

export default function AddStudentForm() {
  const [selectedClass, setSelectedClass] = useState<string>("")
  const [selectedGender, setSelectedGender] = useState<string>("")
  const [previewImage, setPreviewImage] = useState<string>("")
  const [classes, setClasses] = useState<Class[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    const fetchClasses = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedClasses = await classApi.getClasses();
        if (Array.isArray(fetchedClasses)) {
          setClasses(fetchedClasses);
        } else {
          console.error('Fetched data is not an array:', fetchedClasses);
          setError('Invalid data format received');
        }
      } catch (error) {
        console.error('Failed to fetch classes:', error);
        setError('Failed to load classes');
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      email: "",
      password: "",
      dateOfBirth: undefined,
      gender: "",
      class: "",
      image: undefined,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    setSuccess("");
    
    try {
      let imageUrl = null;
      if (values.image) {
        try {
          console.log("Starting file upload for:", values.image.name);
          imageUrl = await uploadApi.uploadFile(values.image);
          console.log("Upload completed, URL:", imageUrl);
        } catch (error: any) {
          console.error("Upload failed:", error);
          setError(error.message || "Failed to upload image");
          return;
        }
      }

      // Register user
      const registerResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: values.studentName,
            email: values.email,
            password: values.password,
            type: "student",
            isVerified: true,
            roleId: "679cd2e82b0f000ac3e9a145"
          })
        }
      );

      const userData = await registerResponse.json();

      if (!registerResponse.ok) {
        setError(userData.message || "Registration failed");
        return;
      }

      // Create profile using the new profileApi
      try {
        await profileApi.createProfile({
          userId: userData.user._id,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender,
          classId: values.class,
          image: imageUrl
        });

        setSuccess("Student registration successful!");
        form.reset();
        setPreviewImage("");
        setSelectedClass("");
        setSelectedGender("");
      } catch (error) {
        setError("Failed to create profile");
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      console.error("Form submission error:", errorMessage);
      setError(errorMessage);
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      form.setValue("image", file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md mx-auto space-y-6 p-6"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Student Image</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {previewImage && (
                      <div className="mt-2">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-full"
                        />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="studentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter student name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="student@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} 
          />
          </div>

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
                <FormControl>
                  <div className="grid grid-cols-3 gap-2">
                    {["Male", "Female", "Other"].map((gender) => (
                      <Button
                        key={gender}
                        type="button"
                        variant={
                          selectedGender === gender.toLowerCase()
                            ? "default"
                            : "outline"
                        }
                        onClick={() => {
                          setSelectedGender(gender.toLowerCase());
                          field.onChange(gender.toLowerCase());
                        }}
                        className="w-full"
                      >
                        {gender}
                      </Button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Class</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-3 gap-2">
                    {loading ? (
                      <div className="col-span-3 text-center">
                        Loading classes...
                      </div>
                    ) : error ? (
                      <div className="col-span-3 text-center text-red-500">
                        {error}
                      </div>
                    ) : classes.length === 0 ? (
                      <div className="col-span-3 text-center">
                        No classes available
                      </div>
                    ) : (
                      classes.map((classItem) => (
                        <Button
                          key={classItem._id}
                          type="button"
                          variant={
                            selectedClass === classItem._id
                              ? "default"
                              : "outline"
                          }
                          onClick={() => {
                            console.log("Selected class:", classItem);
                            setSelectedClass(classItem._id);
                            field.onChange(classItem._id);
                          }}
                          className="w-full"
                        >
                          {classItem.name}
                        </Button>
                      ))
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
