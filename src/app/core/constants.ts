import { SubmissionData, SubmissionStatuses } from "../submission/models/submission.model";


let submissions_data: Array<SubmissionData> = [
  {
    title: 'Work Flow: Requires Location 1',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.UNCOMPLETE,
    location: {
      lat: -15.344,
      lng: 121.031
    }
  },
  {
    title: 'Work Flow: Requires Location 2',
    from: 'hello@gmail.com',
    to: 'disco@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.NEEDS_REVIEW,
    location: {
      lat: -15.344,
      lng: 122.031
    }
  },
  {
    title: 'Work Flow: Requires 3',
    from: 'hello2@gmail.com',
    to: 'disco2@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.LOW_RISK,
    location: {
      lat: -15.344,
      lng: 123.031
    }
  },
  {
    title: 'Work Flow: Requires 4',
    from: 'hello3@gmail.com',
    to: 'disco3@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.NEEDS_REVIEW,
    location: {
      lat: -16.344,
      lng: 124.031
    }
  },
  {
    title: 'Work Flow: Requires Location 5',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.UNCOMPLETE,
    location: {
      lat: -14.344,
      lng: 121.031
    }
  },
  {
    title: 'Work Flow: Requires Location 6',
    from: 'hello@gmail.com',
    to: 'disco@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.NEEDS_REVIEW,
    location: {
      lat: -13.344,
      lng: 121.031
    }
  },
  {
    title: 'Work Flow: Requires 7',
    from: 'hello2@gmail.com',
    to: 'disco2@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.LOW_RISK,
    location: {
      lat: -12.344,
      lng: 121.031
    }
  },
  {
    title: 'Work Flow: Requires 8',
    from: 'hello3@gmail.com',
    to: 'disco3@gmail.com',
    due_date: 1664960513861,
    status: SubmissionStatuses.NEEDS_REVIEW,
    location: {
      lat: -11.344,
      lng: 121.031
    }
  },
]
export default submissions_data;
