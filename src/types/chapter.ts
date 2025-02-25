export interface Chapter {
  _id: string;
  name: string;
  displayName: string;
  description: string;
  subjectId: string;
  order: number;
  metadata: {
    estimatedHours: number;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    objectives: string[];
  };
  dateCreated?: string;
}

export type ChapterFormData = Omit<Chapter, '_id' | 'dateCreated'>;
