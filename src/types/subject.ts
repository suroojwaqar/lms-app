export interface AssessmentType {
  passingPercentage: number;
  attemptsAllowed: number;
  isRequired?: boolean;
}

export interface Subject {
  _id: string;
  name: string;
  displayName: string;
  classId: string;
  assessmentTypes: {
    activities: AssessmentType;
    chapterTests: AssessmentType;
    finalExam: AssessmentType;
  };
  currentVersion: string;
  isActive: boolean;
  metadata: {
    department: string;
    credits: number;
  };
  dateCreated?: string;
}

export type SubjectFormData = Omit<Subject, '_id' | 'dateCreated'>;
