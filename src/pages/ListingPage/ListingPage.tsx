import { useState } from "react";
import Spinner from "../../components/icons/Spinner";
import JobsSection from "../../components/JobsSection";
import Navbar from "../../components/Navbar/Navbar";
import SearchBox from "../../components/SearchBox/SearchBox";
import { IJob } from "../../interfaces/job";
import { modifyArray } from "../../utils/utils";

function ListingPage() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <SearchBox onChange={setJobs} isLoading={setLoading} />
        </div>
        <div className="row">
          {loading ? (
            <div className="w-100 d-flex justify-content-center mt-5 pt-5">
              <Spinner />
            </div>
          ) : (
            <div className="list-group mt-5">
              {modifyArray(jobs).map((jobs: IJob[], i) => (
                <JobsSection jobsArray={jobs} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
