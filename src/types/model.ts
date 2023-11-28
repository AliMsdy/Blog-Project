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
  slug:string;
  avatar: {
    url: string;
  };
};

type CommentType={
  name:string;
  text:string;
  id:string;
  createdAt: string;

}
export type { PostType,AuthorType,CommentType };
