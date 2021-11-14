import React from "react";
import { IJob } from "../interfaces/job";
import BuildingIcon from "./icons/BuildingIcon";
import LocationIcon from "./icons/LocationIcon";

interface IProps {
  job: IJob;
  small?: boolean;
}
function InfoBar({ job, small }: IProps) {
  return (
    <div className="d-block">
      <BuildingIcon />
      <span className={`fs-${small ? 7 : 5} mx-1`}>{job.department.title}</span>
      <LocationIcon />
      <span className={`fs-${small ? 7 : 5} mx-2`}>{job.location.title}</span>
      {!small && <span className="badge bg-secondary mx-2">{job.type}</span>}
    </div>
  );
}

export default InfoBar;
