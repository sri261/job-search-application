import React from "react";
import { IJob } from "../../interfaces/job";
import Button from "../Button";
import InfoBar from "../InfoBar";

interface IProps {
  job: IJob;
}
function Header({ job }: IProps) {
  return (
    <div>
      <p className="fs-5 fw-bold">
        {job.department.title} At Teknorix Systems Goa
      </p>
      <h1 className="fw-bold">{job.title}</h1>
      <InfoBar job={job} />
      <div className="mt-5">
        <Button type="primary" filled label="Apply" className="px-5" />
      </div>
      <div
        style={{ height: "2px", background: "rgb(210, 215, 231)" }}
        className="mt-5"
      ></div>
    </div>
  );
}

export default Header;
