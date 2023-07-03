import { KEY_STORAGE_AUTH } from "@shared/constants/common";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Authorization: localStorage.getItem(KEY_STORAGE_AUTH)
  }
})
