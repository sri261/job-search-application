import axios, { AxiosResponse } from "axios";

const baseURL = "https://teknorix.jobsoid.com/";

export const api = axios.create({
  baseURL,
  //   timeout: 1000,
  //   headers: {
  //     ["Content-Type"]: "application/json",
  //   },
});

export const extractStandardResponseData = (res: AxiosResponse) => res.data;
