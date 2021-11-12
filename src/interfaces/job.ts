import { ILocation } from "./location";

export interface IJob {
  applyUrl: string;
  id: number;
  code: string;
  title: string;
  description: string;
  type: string;
  positions: number;
  experience: string;
  salary: string;
  industry: string;
  location: ILocation;
  department: IGeneral;
  division: IGeneral;
  function: IGeneral;
  postedDate: string;
  closingDate: string;
  hostedUrl: string;
}

export interface IGeneral {
  id: number;
  title: string;
}
