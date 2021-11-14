import { useHistory } from "react-router";
import { IJob } from "../../interfaces/job";
import Button from "../Button";
import BuildingIcon from "../icons/BuildingIcon";
import LocationIcon from "../icons/LocationIcon";
import InfoBar from "../InfoBar";

interface IProps {
  job: IJob;
}
function JobCard({ job }: IProps) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center py-4 JobCard"
    >
      <div>
        <h4
          className="fw-bold text_color"
          onClick={() => history.push(`/details/${job.id}`)}
        >
          {job.title}
        </h4>
        <InfoBar job={job} />
      </div>

      <div>
        <Button
          type="primary"
          label="Apply"
          onClick={() => history.push(`/details/${job.id}`)}
        />
        <Button
          type="secondary"
          label="View"
          onClick={() => history.push(`/details/${job.id}`)}
        />
      </div>
    </button>
  );
}

export default JobCard;
