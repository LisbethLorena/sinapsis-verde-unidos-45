
import { FeedActivity, FeedActivityType } from '../types';

export const feedActivities: FeedActivity[] = [
  {
    id: 1,
    type: 'join-challenge' as FeedActivityType,
    user: "1",
    challenge: "3",
    date: '2025-04-10T14:30:00Z'
  },
  {
    id: 2,
    type: 'complete-profile' as FeedActivityType,
    user: "7",
    date: '2025-04-09T10:15:00Z'
  },
  {
    id: 3,
    type: 'receive-recognition' as FeedActivityType,
    user: "3",
    recognition: "1",
    date: '2025-04-01T09:00:00Z'
  },
  {
    id: 4,
    type: 'join-challenge' as FeedActivityType,
    user: "4",
    challenge: "5",
    date: '2025-04-08T16:45:00Z'
  },
  {
    id: 5,
    type: 'interest-activity' as FeedActivityType,
    user: "2",
    activity: "3",
    date: '2025-04-07T11:20:00Z'
  },
  {
    id: 6,
    type: 'join-challenge' as FeedActivityType,
    user: "5",
    challenge: "6",
    date: '2025-04-05T13:10:00Z'
  },
  {
    id: 7,
    type: 'interest-activity' as FeedActivityType,
    user: "6",
    activity: "2",
    date: '2025-04-03T15:30:00Z'
  }
];
