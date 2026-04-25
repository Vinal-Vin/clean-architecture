import axios from "axios";

// Self-signed cert handling is done via NODE_TLS_REJECT_UNAUTHORIZED=0 in .env.local
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default api;
