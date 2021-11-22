import axios from "axios";

export const URL_ENDPOINT = "https://jobs-api.squareboat.info/api/v1/";

const Api = axios.create({
  baseURL: URL_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = token;
  }

  return request;
});
export default Api;
