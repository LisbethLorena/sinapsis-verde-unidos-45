
// User type definition
export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  city: string;
  interests: string[];
  skills: string[];
  attitudes: string[];
  points: number;
  savedProfiles: number[];
  participatingChallenges: number[];
}

// Company type definition
export interface Company {
  id: number;
  name: string;
  logo: string;
  description: string;
  sector: string;
  city: string;
  website: string;
  publishedChallenges: number[];
}

// Challenge type definition
export interface Challenge {
  id: number;
  title: string;
  description: string;
  company: number; // Company ID
  contributionType: string;
  reward: string;
  startDate: string;
  endDate: string;
  participants: number[]; // User IDs
  image: string;
  location: string;
  category: string;
  difficulty: string;
  status: string;
}

// Activity type definition
export interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  image: string;
  duration: string;
  participants: number; // Maximum number of participants
  category: string;
  interestedUsers: number[]; // User IDs
}

// Recognition type definition
export interface Recognition {
  id: number;
  title: string;
  description: string;
  user: number; // User ID
  date: string;
  image: string;
  category: string;
}

// Feed activity types
export type FeedActivityType = 
  | 'join-challenge' 
  | 'complete-profile' 
  | 'receive-recognition'
  | 'interest-activity';

// Feed activity interface
export interface FeedActivity {
  id: number;
  type: FeedActivityType;
  user: number; // User ID
  challenge?: number; // Optional Challenge ID
  recognition?: number; // Optional Recognition ID
  activity?: number; // Optional Activity ID
  date: string;
}
