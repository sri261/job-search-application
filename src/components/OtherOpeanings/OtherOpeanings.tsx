import { useEffect, useState } from "react";
import { IJob } from "../../interfaces/job";
import { getJobs } from "../../services/services";
import Spinner from "../icons/Spinner";
import Job from "./Job";

function OtherOpeanings() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs()
      .then((jobs: IJob[]) => {
        setJobs(jobs);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="mt-5 p-3"
      style={{
        backgroundColor: "rgb(239, 243, 251)",
        border: "1px solid rgb(210, 215, 231)",
      }}
    >
      <p className="fs-5 fw-bold">OTHER JOB OPEANINGS</p>
      {loading ? (
        <div className="w-100 d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        jobs.slice(0, 4).map((job: IJob) => <Job job={job} />)
      )}
    </div>
  );
}

export default OtherOpeanings;
