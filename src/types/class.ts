export interface AssessmentCriteria {
  required?: boolean;
  passingPercentage: number;
  attemptsAllowed: number;
}

export interface ClassMetadata {
  academicYear: string;
  department: string;
}

export interface Class {
  _id: string;
  name: string;
  displayName: string;
  assessmentCriteria: {
    aptitudeTest: AssessmentCriteria;
    chapterTests: AssessmentCriteria;
    finalExam: AssessmentCriteria;
  };
  isActive: boolean;
  metadata: ClassMetadata;
  dateCreated?: string;
}

export interface ClassFormData {
  _id?: string;
  name: string;
  displayName: string;
  assessmentCriteria: {
    aptitudeTest: AssessmentCriteria;
    chapterTests: AssessmentCriteria;
    finalExam: AssessmentCriteria;
  };
  isActive: boolean;
  metadata: ClassMetadata;
}
