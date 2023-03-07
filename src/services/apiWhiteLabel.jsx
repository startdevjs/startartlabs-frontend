import axios from "axios";

const apiWhiteLabel = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_WHITE_LABEL,
});

export default apiWhiteLabel;
