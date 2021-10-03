import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thedogapi.com/v1"
});

// Add a request interceptor
api.interceptors.request.use(async function (config) {
  const token = "c0ff1603-d3f3-4061-901c-e4a124021499";

  const authorization = `x-api-key ${token}`;
  config.headers.Authorization = authorization;

  return config;
});

export { api };
