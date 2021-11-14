import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Button from "../../components/Button";
import DetailsSection from "../../components/DetailsSection";
import Header from "../../components/Header/Header";
import Spinner from "../../components/icons/Spinner";
import Navbar from "../../components/Navbar/Navbar";
import OtherOpeanings from "../../components/OtherOpeanings/OtherOpeanings";
import ShareOpeanings from "../../components/ShareOpeanings";
import { IJob } from "../../interfaces/job";
import { getJob } from "../../services/services";

function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<IJob>({} as IJob);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getJob(id)
      .then((res) => {
        setJob(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {loading ? (
          <div className="w-100 d-flex justify-content-center mt-5 pt-5">
            <Spinner />
          </div>
        ) : (
          <>
            <Button
              type="secondary"
              label="Back"
              showBack
              onClick={() => history.push("/listing")}
            />
            <Header job={job} />
            <div className="row">
              <div className="col-9">
                <DetailsSection job={job} />
              </div>
              <div className="col-3">
                <OtherOpeanings />
                <ShareOpeanings />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
