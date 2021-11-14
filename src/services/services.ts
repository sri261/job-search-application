import { api, extractStandardResponseData } from "../api/api";

export enum LookUp {
  locations = "locations",
  departments = "departments",
  functions = "functions",
}

export const getJobs = async (
  q?: string,
  loc?: number | null,
  dept?: number | null,
  fun?: number | null
) =>
  api
    .get(`/api/v2/jobs`, { params: { q, loc, dept, fun } })
    .then(extractStandardResponseData);

export const getJob = async () =>
  api.get("/api/v2/jobs/42245").then(extractStandardResponseData);

export const getLookUps = async (lookup: LookUp) =>
  api.get(`/api/v2/${lookup}`).then(extractStandardResponseData);
