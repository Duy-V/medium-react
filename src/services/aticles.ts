import axiosClient from "../libs/axios-client";

export const getArticlesAPI = async ({
  page,
  limit,
  // tags,
}: {
  page: number;
  limit: number;
  // tags: string[];
}) => {
  const response = await axiosClient.get("/posts", {
    params: {
      limit: limit,
      page: page,
      // "tags[]": tags,
    },
  });
  return response.data;
};
export const getArticleDetailsAPI = async (slug: string) => {
  const response = await axiosClient.get(`posts/${slug}`);
  return response.data;
};
