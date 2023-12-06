import { useQuery } from "@tanstack/react-query";
import { getTagsAPI } from "../services/tags";
import axiosClient from "../libs/axios-client";

export const useTags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    // queryFn: () => getTagsAPI(),
    queryFn: async () => {
      const response = await axiosClient.get("/tags");
      return response.data;
    },
  });

  return {
    data: data || [],
    isLoading,
  };
};
