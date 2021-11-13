import { api, extractStandardResponseData } from "../api/api";

export enum LookUp {
  locations = "locations",
  departments = "departments",
  functions = "functions",
}

export const getAllJobs = async () =>
  api.get("/api/v1/jobs").then(extractStandardResponseData);

export const getJob = async () =>
  api.get("/api/v1/jobs/42245").then(extractStandardResponseData);

export const getLookUps = async (lookup: LookUp) =>
  api.get(`/api/v1/${lookup}`).then(extractStandardResponseData);

export const getJobByFilter = async (
  q: string,
  loc?: string,
  dept?: string,
  fun?: string
) =>
  api
    .get(`/api/v1/jobs`, { params: { q, loc, dept, fun } })
    .then(extractStandardResponseData);
