import axiosClient from "../libs/axios-client";


export const getTagsAPI = async () => {
  const response = await axiosClient.get(`/tags`);
  return response.data;
};
