import { useQuery } from "@tanstack/react-query";
import { getArticleDetailsAPI } from "../services/aticles";

export const useArticle = (slug: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticleDetailsAPI(slug),
  });
  return {
    article: data || null,
    isLoading,
  };
};
