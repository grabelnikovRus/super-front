import { KEY_STORAGE_AUTH } from "@shared/constants/common";
import axios from "axios";

export const api = axios.create({
  baseURL: _API_,
  headers: {
    Authorization: localStorage.getItem(KEY_STORAGE_AUTH),
  },
});
