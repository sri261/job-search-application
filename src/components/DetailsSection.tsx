import { IJob } from "../interfaces/job";
import parse from "html-react-parser";

interface IProps {
  job: IJob;
}

function DetailsSection({ job }: IProps) {
  return <div className="row mt-5">{parse(job.description)}</div>;
}

export default DetailsSection;
