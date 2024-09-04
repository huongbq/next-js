import axios from "axios";

export const axiosUser = axios.create({
  baseURL: process.env.URL_USER,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosBlog = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
