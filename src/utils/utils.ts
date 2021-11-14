import { IJob } from "../interfaces/job";

export function debounce() {}

export const consoleLog = (label?: string, data?: any) => {
  console.log(`%c ${label}`, "background: #222; color: #bada55", data);
};

export const modifyArray = (jobs: IJob[]): IJob[][] => {
  return Object.values(
    jobs.reduce((acc: any, job: IJob) => {
      if (Array.isArray(acc[job?.department?.title])) {
        acc[job?.department?.title].push(job);
      } else {
        acc[job?.department?.title] = [job];
      }
      return acc;
    }, {})
  );
};
