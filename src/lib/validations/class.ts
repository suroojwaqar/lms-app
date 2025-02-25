import * as z from "zod";

export const assessmentCriteriaSchema = z.object({
  required: z.boolean().optional(),
  passingPercentage: z.number().min(0).max(100),
  attemptsAllowed: z.number().min(1).max(10)
});

export const classFormSchema = z.object({
  _id: z.string().optional(),
  name: z.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-z0-9-]+$/, "Name must contain only lowercase letters, numbers, and hyphens"),
  displayName: z.string()
    .min(3, "Display name must be at least 3 characters")
    .max(100, "Display name must be less than 100 characters"),
  assessmentCriteria: z.object({
    aptitudeTest: assessmentCriteriaSchema,
    chapterTests: assessmentCriteriaSchema,
    finalExam: assessmentCriteriaSchema
  }),
  isActive: z.boolean(),
  metadata: z.object({
    academicYear: z.string()
      .min(7, "Academic year must be in format YYYY-YY")
      .regex(/^\d{4}-\d{2}$/, "Academic year must be in format YYYY-YY"),
    department: z.string()
      .min(2, "Department name must be at least 2 characters")
      .max(100, "Department name must be less than 100 characters")
  })
});

export type ClassFormData = z.infer<typeof classFormSchema>;
