import axios from "axios";
import { BASE_URL } from "../config/constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
