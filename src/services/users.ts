import axiosClient from "../libs/axios-client";
export const loginAPI = async (email: string, password: string) => {
  const response = await axiosClient.post("/users/login", {
    email, password 
  });
  return response.data;
};
export const signupAPI = async (username:string,email: string, password: string) => {
  const response = await axiosClient.post("/users/signup", {
    username,email, password 
  });
  return response.data;
};
export const getCurrentUserAPI = async () => {
  const response = await axiosClient.get("/users/me");
  return response.data;
};
