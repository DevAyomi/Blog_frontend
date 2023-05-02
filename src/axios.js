/* eslint-disable prettier/prettier */
/**
 * Created by Zura on 12/25/2021.
 */
import axios from "axios";
import { useMainStore } from "@/stores/main.js";
import router from "@/router";

const axiosClient = axios.create({
  baseURL: "https://investigationdigest.com/api/api/",
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${useMainStore().token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      useMainStore().setUser({
        name: "",
        email: "",
        token: null,
        avatar: "",
      });
      sessionStorage.removeItem("TOKEN");
      sessionStorage.removeItem("userType");
      router.push("/");
      location.reload();
    } else if (error.response.status === 404) {
      router.push({ name: "NotFound" });
    }
    throw error;
  }
);

export default axiosClient;
