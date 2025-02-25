"use client";

import { useState, useEffect } from "react";
import { Class } from "@/types/class";
import { ClassFormData, classFormSchema } from "@/lib/validations/class";
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
import { generateSlug } from "@/utils";

interface ClassModalProps {
  mode: "add" | "edit";
  class?: Class;
  onSave: (data: ClassFormData) => Promise<void>;
  children?: React.ReactNode;
}

export function ClassModal({ mode, class: classData, onSave, children }: ClassModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<ClassFormData>({
    resolver: zodResolver(classFormSchema),
    defaultValues: {
      name: classData?.name || "",
      displayName: classData?.displayName || "",
      assessmentCriteria: classData?.assessmentCriteria || {
        aptitudeTest: {
          required: true,
          passingPercentage: 60,
          attemptsAllowed: 3
        },
        chapterTests: {
          passingPercentage: 70,
          attemptsAllowed: 2
        },
        finalExam: {
          passingPercentage: 50,
          attemptsAllowed: 1
        }
      },
      isActive: classData?.isActive ?? true,
      metadata: classData?.metadata || {
        academicYear: "",
        department: ""
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

  const onSubmit = async (data: ClassFormData) => {
    try {
      await onSave({
        ...data,
        ...(mode === "edit" && classData?._id ? { _id: classData._id } : {})
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
            {mode === "add" ? "Add New Class" : "Edit Class"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name and Display Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="displayName">Class Name</Label>
              <Input
                id="displayName"
                {...form.register("displayName")}
                placeholder="Class 2024 Batch A"
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
                id="name"
                {...form.register("name")}
                placeholder="class-2024-a"
                className="mt-1"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Academic Year and Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="academicYear">Academic Year</Label>
              <Input
                id="academicYear"
                {...form.register("metadata.academicYear")}
                placeholder="2024-25"
                className="mt-1"
              />
              {form.formState.errors.metadata?.academicYear && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.metadata.academicYear.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                {...form.register("metadata.department")}
                placeholder="Computer Science"
                className="mt-1"
              />
              {form.formState.errors.metadata?.department && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.metadata.department.message}
                </p>
              )}
            </div>
          </div>

          {/* Assessment Criteria sections - similarly update other fields */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Assessment Criteria</h3>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="aptRequired"
                checked={form.watch("assessmentCriteria.aptitudeTest.required")}
                onCheckedChange={(checked) =>
                  form.setValue(
                    "assessmentCriteria.aptitudeTest.required",
                    checked as boolean
                  )
                }
              />
              <Label htmlFor="aptRequired">Is aptitude test required for addmision in this class?</Label>
            </div>

            {/* Aptitude Test */}
            <fieldset className="border p-4 rounded">
              <legend className="text-sm font-medium">Aptitude Test Criteria</legend>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="aptPassing">Minimum Passing %</Label>
                  <Input
                    id="aptPassing"
                    type="number"
                    {...form.register(
                      "assessmentCriteria.aptitudeTest.passingPercentage",
                      { valueAsNumber: true }
                    )}
                  />
                  {form.formState.errors.assessmentCriteria?.aptitudeTest
                    ?.passingPercentage && (
                    <p className="text-red-500 text-sm mt-1">
                      {
                        form.formState.errors.assessmentCriteria.aptitudeTest
                          .passingPercentage.message
                      }
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="aptAttempts">Maximum Attempts Allowed</Label>
                  <Input
                    id="aptAttempts"
                    type="number"
                    {...form.register(
                      "assessmentCriteria.aptitudeTest.attemptsAllowed",
                      { valueAsNumber: true }
                    )}
                  />
                  {form.formState.errors.assessmentCriteria?.aptitudeTest
                    ?.attemptsAllowed && (
                    <p className="text-red-500 text-sm mt-1">
                      {
                        form.formState.errors.assessmentCriteria.aptitudeTest
                          .attemptsAllowed.message
                      }
                    </p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Chapter Tests */}
            <fieldset className="border p-4 rounded">
              <legend className="text-sm font-medium">Chapter Tests Criteria</legend>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="chapterPassing">Minimum Passing %</Label>
                  <Input
                    id="chapterPassing"
                    type="number"
                    {...form.register(
                      "assessmentCriteria.chapterTests.passingPercentage",
                      { valueAsNumber: true }
                    )}
                  />
                  {form.formState.errors.assessmentCriteria?.chapterTests
                    ?.passingPercentage && (
                    <p className="text-red-500 text-sm mt-1">
                      {
                        form.formState.errors.assessmentCriteria.chapterTests
                          .passingPercentage.message
                      }
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="chapterAttempts">Maximum Attempts Allowed</Label>
                  <Input
                    id="chapterAttempts"
                    type="number"
                    {...form.register(
                      "assessmentCriteria.chapterTests.attemptsAllowed",
                      { valueAsNumber: true }
                    )}
                  />
                  {form.formState.errors.assessmentCriteria?.chapterTests
                    ?.attemptsAllowed && (
                    <p className="text-red-500 text-sm mt-1">
                      {
                        form.formState.errors.assessmentCriteria.chapterTests
                          .attemptsAllowed.message
                      }
                    </p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Final Exam */}
            <fieldset className="border p-4 rounded">
              <legend className="text-sm font-medium">Final Exam Criteria</legend>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="finalPassing">Minimum Passing %</Label>
                  <Input
                    id="finalPassing"
                    type="number"
                    {...form.register(
                      "assessmentCriteria.finalExam.passingPercentage",
                      { valueAsNumber: true }
                    )}
                  />
                  {form.formState.errors.assessmentCriteria?.finalExam
                    ?.passingPercentage && (
                    <p className="text-red-500 text-sm mt-1">
                      {
                        form.formState.errors.assessmentCriteria.finalExam
                          .passingPercentage.message
                      }
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="finalAttempts">Maximum Attempts Allowed</Label>
                  <Input
                    id="finalAttempts"
                    type="number"
                    {...form.register(
                      "assessmentCriteria.finalExam.attemptsAllowed",
                      { valueAsNumber: true }
                    )}
                  />
                  {form.formState.errors.assessmentCriteria?.finalExam
                    ?.attemptsAllowed && (
                    <p className="text-red-500 text-sm mt-1">
                      {
                        form.formState.errors.assessmentCriteria.finalExam
                          .attemptsAllowed.message
                      }
                    </p>
                  )}
                </div>
              </div>
            </fieldset>
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
