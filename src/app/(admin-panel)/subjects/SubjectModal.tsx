"use client";

import { useState, useEffect } from "react";
import { generateSlug } from "@/utils";
import { Subject } from "@/types/subject";
import { SubjectFormData, subjectFormSchema } from "@/lib/validations/subject";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Class } from "@/types/class";

interface SubjectModalProps {
  mode: "add" | "edit";
  subject?: Subject;
  classes: Class[];
  onSave: (data: SubjectFormData) => Promise<void>;
  children?: React.ReactNode;
}

export function SubjectModal({ mode, subject, classes, onSave, children }: SubjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<SubjectFormData>({
    resolver: zodResolver(subjectFormSchema),
    defaultValues: {
      name: subject?.name || "",
      displayName: subject?.displayName || "",
      classId: subject?.classId || "",
      assessmentTypes: subject?.assessmentTypes || {
        activities: {
          passingPercentage: 70,
          attemptsAllowed: 2
        },
        chapterTests: {
          passingPercentage: 70,
          attemptsAllowed: 2
        },
        finalExam: {
          passingPercentage: 60,
          attemptsAllowed: 1,
          isRequired: true
        }
      },
      currentVersion: subject?.currentVersion || "1.0.0",
      isActive: subject?.isActive ?? true,
      metadata: subject?.metadata || {
        department: "",
        credits: 4
      }
    }
  });

  // Add effect to update slug when display name changes
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "displayName") {
        const displayName = value.displayName as string;
        if (displayName) {
          const slug = generateSlug(displayName);
          form.setValue("name", slug, { shouldValidate: true });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = async (data: SubjectFormData) => {
    try {
      await onSave({
        ...data,
        ...(mode === "edit" && subject?._id ? { _id: subject._id } : {})
      });
      setIsOpen(false);
      if (mode === "add") {
        form.reset();
      }
    } catch (err) {
      form.setError("root", {
        message: err instanceof Error ? err.message : "An error occurred"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Subject" : "Edit Subject"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="displayName">Subject Name</Label>
              <Input
                {...form.register("displayName")}
                placeholder="Mathematics"
                className="mt-1"
              />
              {form.formState.errors.displayName && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.displayName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="name">Slug</Label>
              <Input
                {...form.register("name")}
                placeholder="mathematics-2024"
                className="mt-1"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Class Selection and Version */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Class</Label>
              <Select
                onValueChange={(value) => form.setValue("classId", value)}
                defaultValue={form.getValues("classId")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls._id} value={cls._id}>
                      {cls.displayName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.classId && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.classId.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="currentVersion">Version</Label>
              <Input
                {...form.register("currentVersion")}
                placeholder="1.0.0"
                className="mt-1"
              />
              {form.formState.errors.currentVersion && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.currentVersion.message}
                </p>
              )}
            </div>
          </div>

          {/* Assessment Types */}

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                {...form.register("metadata.department")}
                placeholder="Science"
                className="mt-1"
              />
              {form.formState.errors.metadata?.department && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.metadata.department.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="credits">Credits</Label>
              <Input
                type="number"
                {...form.register("metadata.credits", { valueAsNumber: true })}
                className="mt-1"
              />
              {form.formState.errors.metadata?.credits && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.metadata.credits.message}
                </p>
              )}
            </div>
          </div>

          {/* Active Status */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isActive"
              checked={form.watch("isActive")}
              onCheckedChange={(checked) =>
                form.setValue("isActive", checked as boolean)
              }
            />
            <Label htmlFor="isActive">Active</Label>
          </div>

          {form.formState.errors.root && (
            <p className="text-red-500">{form.formState.errors.root.message}</p>
          )}

          <Button type="submit" className="btn-fill primary float-right">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
