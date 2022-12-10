import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
  },
);

const session = JSON.parse(localStorage.getItem("startdev-labs"));
api.defaults.headers.Authorization = `Bearer ${session?.token}`;

export default api;
