import * as z from "zod";

const assessmentTypeSchema = z.object({
  passingPercentage: z.number().min(0).max(100),
  attemptsAllowed: z.number().min(1).max(10),
  isRequired: z.boolean().optional()
});

export const subjectFormSchema = z.object({
  _id: z.string().optional(),
  name: z.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-z0-9-]+$/, "Name must contain only lowercase letters, numbers, and hyphens"),
  displayName: z.string()
    .min(3, "Display name must be at least 3 characters")
    .max(100, "Display name must be less than 100 characters"),
  classId: z.string().min(1, "Class is required"),
  assessmentTypes: z.object({
    activities: assessmentTypeSchema,
    chapterTests: assessmentTypeSchema,
    finalExam: assessmentTypeSchema.extend({
      isRequired: z.boolean().default(true)
    })
  }),
  currentVersion: z.string().regex(/^\d+\.\d+\.\d+$/, "Version must be in semver format (e.g., 1.0.0)"),
  isActive: z.boolean(),
  metadata: z.object({
    department: z.string().min(2, "Department is required"),
    credits: z.number().min(0).max(20)
  })
});

export type SubjectFormData = z.infer<typeof subjectFormSchema>;
