
// User type definition
export interface User {
  id: string; // UUID
  name: string;
  email: string;
  avatar: string;
  bio: string;
  city: string;
  interests: string[];
  skills: string[];
  attitudes: string[];
  points: number;
  savedProfiles: string[]; // UUIDs
  participatingChallenges: string[]; // UUIDs
}

// Company type definition
export interface Company {
  id: string; // UUID
  name: string;
  logo: string;
  description: string;
  sector: string;
  city: string;
  website: string;
  publishedChallenges: string[]; // UUIDs
}

// Challenge type definition
export interface Challenge {
  id: string; // UUID
  title: string;
  description: string;
  company: string; // Company UUID
  contributionType: string;
  reward: string;
  startDate: string;
  endDate: string;
  participants: string[]; // User UUIDs
  image: string;
  location: string;
  category: string;
  difficulty: string;
  status: string;
}

// Activity type definition
export interface Activity {
  id: string; // UUID
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  image: string;
  duration: string;
  participants: number;
  category: string;
  interestedUsers: string[]; // User UUIDs
}

// Recognition type definition
export interface Recognition {
  id: string; // UUID
  title: string;
  description: string;
  user: string; // User UUID
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
  user: string; // User UUID
  challenge?: string; // Optional Challenge UUID
  recognition?: string; // Optional Recognition UUID
  activity?: string; // Optional Activity UUID
  date: string;
}
