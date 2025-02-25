import * as z from "zod";

export const lectureFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  chapterId: z.string().min(1, "Chapter is required"),
  order: z.number().min(1, "Order must be at least 1"),
  estimatedDuration: z.number().min(1, "Duration must be at least 1 minute"),
  prerequisites: z.array(z.string()).default([]),
  content: z.object({
    type: z.string(),
    data: z.object({
      videoUrl: z.string().url("Must be a valid URL"),
      duration: z.number()
    })
  }),
  isPublished: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  metadata: z.object({
    resourceUrls: z.array(z.string().url("Must be a valid URL")).default([]),
    attachments: z.array(z.string()).default([]),
    difficulty: z.enum(["beginner", "intermediate", "advanced"])
  })
});

export type LectureFormData = z.infer<typeof lectureFormSchema>;
