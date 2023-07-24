type RegisterData = {
  username: string;
  email: string;
  tel?: string;
  password: string;
  rePassword: string;
};

type LoginData = {
  email: string;
  password: string;
};

type User = {
  _id: string;
  created_at: string;
  email: string;
  posts: [];
  tel: string;
  themes: [];
  updatedAt: string;
  username: string;
};

export { RegisterData, LoginData, User };
