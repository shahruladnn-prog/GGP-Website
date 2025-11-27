
export interface Accommodation {
  id: string;
  title: string;
  description: string;
  price: string;
  capacity: string;
  features: string[];
  images: string[]; // Changed from single imageUrl to array
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  imageUrl: string;
  price?: string;
  priceUnit?: string;
  videoUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export enum AppSection {
  HOME = 'home',
  STAY = 'stay',
  RATES = 'rates',
  PLAY = 'play',
  TEAM_BUILDING = 'team_building',
  GALLERY = 'gallery',
  REVIEWS = 'reviews',
  CONTACT = 'contact',
}
