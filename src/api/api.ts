import axios, { AxiosResponse } from "axios";

const baseURL = "https://teknorix.jobsoid.com/";

export const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(`%cInterceptor Error`, "background: red; color: white", error);
  }
);

export const extractStandardResponseData = (res: AxiosResponse) => res.data;
