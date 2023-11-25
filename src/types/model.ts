type PostType = {
  author: AuthorType;
  title: string;
  slug: string;
  id: string;
  coverPhoto: {
    url: string;
  };
};

type AuthorType = {
  name: string;
  id: number;
  avatar: {
    url: string;
  };
};
export type { PostType,AuthorType };
