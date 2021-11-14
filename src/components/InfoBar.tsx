import React from "react";
import { IJob } from "../interfaces/job";
import BuildingIcon from "./icons/BuildingIcon";
import LocationIcon from "./icons/LocationIcon";

interface IProps {
  job: IJob;
}
function InfoBar({ job }: IProps) {
  return (
    <div className="d-block">
      <BuildingIcon />
      <span className="fs-5 mx-1">{job.department.title}</span>
      <LocationIcon />
      <span className="fs-5 mx-2">{job.location.title}</span>
      <span className="badge bg-secondary mx-2">{job.type}</span>
    </div>
  );
}

export default InfoBar;
