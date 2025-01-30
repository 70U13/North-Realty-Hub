import axios from "axios";

export const imgUrl = import.meta.env.VITE_IMG_URL;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use((config) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]');
  const userToken = localStorage.getItem('authToken');
  if (csrfToken) {
    const token = csrfToken.getAttribute("content");
    if (token) {
      config.headers["X-CSRF-TOKEN"] = token;
    }

    if(userToken) {
      config.headers['Authorization'] = `Bearer ${userToken}`;
    }
  }
  return config;
});

export default apiService;
