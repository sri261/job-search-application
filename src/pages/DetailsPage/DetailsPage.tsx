import { useEffect } from "react";
import { getJob } from "../../services/services";

function DetailsPage() {
  useEffect(() => {
    getJob()
      .then((res) => {
        console.log(res);
      })
      .catch(() => {});
  }, []);

  return <div>DetailsPage</div>;
}

export default DetailsPage;
