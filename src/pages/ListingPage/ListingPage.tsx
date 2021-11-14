import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { IJob } from "../../interfaces/job";
import { getAllJobs } from "../../services/services";

function ListingPage() {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    getAllJobs()
      .then((jobs: IJob[]) => {
        console.log("jobs", jobs);
        console.log(
          jobs.reduce((accumulator: any, currentValue, currentIndex, array) => {
            return accumulator.push(currentValue.applyUrl);
          }, [])
        );
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="container mt-5">
      <SearchBox onChange={setJobs} />
    </div>
  );
}

export default ListingPage;
