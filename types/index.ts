export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  stats: {
    plants: number;
    posts: number;
    followers: number;
    following: number;
  };
}

export interface AgavePlant {
  id: string;
  name: string;
  images: string[];
  tags: string[];
  description?: string;
  visibility: 'public' | 'private';
  parentId?: string;
  childrenIds: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
  position?: {
    shelfId: string;
    row: number;
    column: number;
  };
  metadata: {
    acquisitionDate?: string;
    acquisitionSource?: string;
    price?: number;
    lastWatered?: string;
    nextWateringDue?: string;
  };
}

export interface Shelf {
  id: string;
  name: string;
  columns: number;
  userId: string;
  plants: (string | null)[][]; // Plant IDs in grid positions
  createdAt: string;
  updatedAt: string;
  order: number;
}

export interface TimelinePost {
  id: string;
  userId: string;
  content: string;
  images: string[];
  linkedPlantId?: string;
  tags: string[];
  visibility: 'public' | 'private';
  createdAt: string;
  updatedAt: string;
  stats: {
    likes: number;
    comments: number;
    reposts: number;
  };
  userReactions: {
    liked: boolean;
    reposted: boolean;
  };
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface NFCTag {
  id: string;
  plantId: string;
  tagData: string;
  lastReadAt?: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'repost' | 'watering_reminder';
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  createdAt: string;
}

export interface SearchFilters {
  query?: string;
  tags: string[];
  visibility: 'all' | 'public' | 'my';
  userId?: string;
  sortBy: 'updated' | 'created' | 'name';
  sortOrder: 'asc' | 'desc';
}

export interface UserFollow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: string;
}