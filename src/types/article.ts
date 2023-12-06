export type TArticle = {
  id: string;
  slug: string;
  title: string;
  description: string;
  createdAt:string;
  bookmarks: [];
  tags: [];
  author: {
    id: string;
    image: string | null;
    username: string;
  };
};
