import { Theme } from './theme';
import { UserId } from './user-id';

type ThemeIdRef = Theme & { userId: string };

export type Post = {
  likes: string[];
  _id: string;
  text: string;
  userId: UserId;
  themeId: ThemeIdRef;
  created_at: string;
  updatedAt: string;
  __v: number;
};
