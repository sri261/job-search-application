import axios, { AxiosResponse } from "axios";

const baseURL = "https://teknorix.jobsoid.com/";

export const api = axios.create({
  baseURL,
});

export const extractStandardResponseData = (res: AxiosResponse) => res.data;
