import { useEffect, useState } from "react";
import { IGeneral } from "../../interfaces/job";
import { getJobByFilter, getLookUps, LookUp } from "../../services/services";
import SearchBar from "../SearchBar/SearchBar";
import SelectDropDown from "../SelectDropDown/SelectDropDown";

interface IProps {
  onChange: ({}: any) => void;
}

function SearchBox() {
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState<IGeneral[]>([]);
  const [locations, setLocations] = useState<IGeneral[]>([]);
  const [functions, setFunctions] = useState<IGeneral[]>([]);
  const [searchOptions, setSearchOptions] = useState<{ value: string }[]>([
    { value: "sample" },
    { value: "new" },
  ]);

  const searchHandler = (e: string) => {
    console.log(e);
    getJobByFilter(e)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    Promise.all([
      getLookUps(LookUp.departments),
      getLookUps(LookUp.locations),
      getLookUps(LookUp.functions),
    ])
      .then(([departments, locations, functions]) => {
        setDepartments(departments);
        setLocations(locations);
        setFunctions(functions);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="row">
          <SearchBar
            onChange={searchHandler}
            onSubmit={(e) => {}}
            options={searchOptions}
            loading={true}
          />
        </div>
        <div className="row">
          <div className="col-4">
            <SelectDropDown
              onChange={(e) => {
                console.log(e);
              }}
              options={departments}
              placeholder="Department"
              loading={loading}
            />
          </div>
          <div className="col-4">
            <SelectDropDown
              onChange={(e) => {
                console.log(e.currentTarget.value);
              }}
              options={locations}
              placeholder="Location"
              loading={loading}
            />
          </div>
          <div className="col-4">
            <SelectDropDown
              onChange={(e) => {
                console.log(e);
              }}
              options={functions}
              placeholder="Function"
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
