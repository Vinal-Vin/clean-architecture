import axios from "axios";

// Allow self-signed certificates
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false, // Ignore self-signed certificate errors
});

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  httpsAgent: agent,
});

export default api;
