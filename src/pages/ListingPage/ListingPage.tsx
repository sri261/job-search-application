import { useState } from "react";
import Spinner from "../../components/icons/Spinner";
import SearchBox from "../../components/SearchBox/SearchBox";
import { IJob } from "../../interfaces/job";

function ListingPage() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mt-5">
      <div className="row">
        <SearchBox onChange={setJobs} isLoading={setLoading} />
      </div>
      <div className="row">
        {loading ? (
          <div className="w-100 d-flex justify-content-center mt-5 pt-5">
            <Spinner />
          </div>
        ) : (
          jobs.map((job: IJob) => <div>{job.title}</div>)
        )}
      </div>
    </div>
  );
}

export default ListingPage;
