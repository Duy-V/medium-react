import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../libs/axios-client";
import { TArticle } from "../types/article";
import { getArticlesAPI } from "../services/aticles";

// export const useArticles = ({page, limit, tags}: {page:number, limit:number, tags: string[]}) => {
export const useArticles = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["posts", { page, limit }],
    queryFn: () => getArticlesAPI({ page, limit }),
  });

  const addArticleMutation = useMutation({
    mutationFn: async (article: TArticle) => {
      return axiosClient.post("/posts", article);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(["posts"]);
    },
    onError: async () => {
    },
  });

  const deleteArticleMutation = useMutation({
    mutationFn: async (book: TArticle) => {
      return axiosClient.delete(`/articles/${book.id}`);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const editBook = async (id: string, book: TArticle) => {
    await axiosClient.patch(`/articles/${id}`, book);
  };

  return {
    // articles: data || [],
    data: data || [],
    isLoading,
    addArticleMutation,
    deleteArticleMutation,

    editBook,
  };
};
