import { IJob } from "../interfaces/job";
import JobCard from "./JobCard/JobCard";

interface IProps {
  jobsArray: IJob[];
}

function JobsSection({ jobsArray }: IProps) {
  return (
    <div className="mt-4">
      <h2 className="fw-bold my-3">{jobsArray[0].department.title}</h2>
      <div
        style={{ backgroundColor: "#4d94e4", height: "5px", width: "80px" }}
      ></div>

      {jobsArray.map((job: IJob) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
}

export default JobsSection;
