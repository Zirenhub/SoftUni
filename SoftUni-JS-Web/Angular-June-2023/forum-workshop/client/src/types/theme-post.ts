import { Post } from './post';
import { Theme } from './theme';

type ThemePost = Omit<Post, 'themeId'> & { themeId: string };

export type CurrentTheme = Omit<Theme, 'posts'> & { posts: ThemePost[] };
