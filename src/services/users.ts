import axiosClient from "../libs/axios-client";
export const loginAPI = async (email: string, password: string) => {
  const response = await axiosClient.post("/users/login", {
    user: { email, password },
  });
  return response.data;
};
export const getCurrentUserAPI = async () => {
  const response = await axiosClient.get("/users/me");
  return response.data;
};
