export interface Lecture {
  _id: string;
  title: string;
  description: string;
  chapterId: string;
  order: number;
  estimatedDuration: number;
  prerequisites: string[];
  content: {
    type: string;
    data: {
      videoUrl: string;
      duration: number;
    };
  };
  isPublished: boolean;
  tags: string[];
  metadata: {
    resourceUrls: string[];
    attachments: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
  };
  dateCreated?: string;
}

export type LectureFormData = Omit<Lecture, '_id' | 'dateCreated'>;
