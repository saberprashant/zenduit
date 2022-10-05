export interface SubmissionData {
  title: string;
  from: string;
  to: string;
  due_date: number;
  status: SubmissionStatuses;
  location: {
    lat: number;
    lng: number;
  }
}

export enum SubmissionStatuses {
  UNCOMPLETE = 'Uncomplete',
  LOW_RISK = 'Low Risk',
  NEEDS_REVIEW = 'Needs Review'
}
