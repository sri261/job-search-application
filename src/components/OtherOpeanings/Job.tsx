import { IJob } from "../../interfaces/job";
import { useHistory } from "react-router";
import InfoBar from "../InfoBar";

interface IProps {
  job: IJob;
}

function Job({ job }: IProps) {
  const history = useHistory();

  return (
    <div className="my-4">
      <p
        className="fw-bold text_color fs-5 m-0"
        onClick={() => history.push(`/details/${job.id}`)}
      >
        {job.title}
      </p>

      <InfoBar job={job} small />
    </div>
  );
}

export default Job;
