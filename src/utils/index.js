import axios from "axios";

export const customFetch = axios.create({
  // baseURL: 'http://localhost:8080'
  baseURL: 'https://aztronix-api.onrender.com'
})