import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://ulitmate-blog-app-production.up.railway.app/api",
});
axiosClient.interceptors.request.use(
  function (config) {
    const tokenFromLocalStorage = localStorage.getItem("conduit_jwt_token");
    if (tokenFromLocalStorage) {
      config.headers.Authorization = `Bearer ${tokenFromLocalStorage}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
