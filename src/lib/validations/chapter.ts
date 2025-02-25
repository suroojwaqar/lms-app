import * as z from "zod";

export const chapterFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  displayName: z.string().min(1, "Display name is required"),
  description: z.string().min(1, "Description is required"),
  subjectId: z.string().min(1, "Subject is required"),
  order: z.number().min(1, "Order must be at least 1"),
  metadata: z.object({
    estimatedHours: z.number().min(1, "Estimated hours must be at least 1"),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]),
    objectives: z.array(z.string()).min(1, "At least one objective is required")
  })
});

export type ChapterFormData = z.infer<typeof chapterFormSchema>;
