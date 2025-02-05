import axios from "axios";
import {
  requestHandler,
  successHandler,
  errorHandler,
} from "./requestModifications";
import { API_BASE_URL } from "../constant/apiEndPoints";

const httpFormRequest = (
  config = {
    headers: { contentType: "application/json" },
  }
) => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": config.headers.contentType || "application/json",
      "Content-Type": "multipart/form-data",
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(successHandler, errorHandler);

  return instance;
};

export default httpFormRequest();
