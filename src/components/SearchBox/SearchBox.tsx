import { useEffect, useState } from "react";
import { IGeneral, IJob } from "../../interfaces/job";
import { getJobByFilter, getLookUps, LookUp } from "../../services/services";
import { consoleLog } from "../../utils/utils";
import CancelIcon from "../icons/CancelIcon";
import SearchBar from "../SearchBar/SearchBar";
import SelectDropDown from "../SelectDropDown/SelectDropDown";

interface IProps {
  onChange?: (jobs: IJob[]) => void;
}

interface IFilters {
  department: IGeneral;
  location: IGeneral;
  $function: IGeneral;
}

function SearchBox({ onChange }: IProps) {
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState<IGeneral[]>([]);
  const [locations, setLocations] = useState<IGeneral[]>([]);
  const [functions, setFunctions] = useState<IGeneral[]>([]);
  const [searchOptions, setSearchOptions] = useState<
    { value: string; id: number }[]
  >([]);

  const [filters, setFilters] = useState<IFilters>({
    department: {} as IGeneral,
    location: {} as IGeneral,
    $function: {} as IGeneral,
  });

  const searchHandler = (e: string) => {
    console.log(filters);
    consoleLog("Search Api Call");
    getJobByFilter(
      e,
      filters.location.id,
      filters.department.id,
      filters.$function.id
    )
      .then((jobs: IJob[]) => {
        consoleLog("Search Api Response =>>>>", jobs);
        onChange && onChange(jobs);
        setSearchOptions(
          jobs.map((job: IJob) => ({ value: job.title, id: job.id }))
        );
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
      <div className="row bg-light">
        <div className="col"></div>
        <div className="row">
          <SearchBar
            onChange={searchHandler}
            onSubmit={searchHandler}
            options={searchOptions}
            loading={true}
          />
        </div>
        <div className="row">
          <div className="col-4">
            <SelectDropDown
              onChange={(e: any) => {
                setFilters({
                  ...filters,
                  department: JSON.parse(e.currentTarget.value),
                });
              }}
              options={departments}
              placeholder="Department"
              loading={loading}
            />
          </div>
          <div className="col-4">
            <SelectDropDown
              onChange={(e: any) => {
                setFilters({
                  ...filters,
                  location: JSON.parse(e.currentTarget.value),
                });
              }}
              options={locations}
              placeholder="Location"
              loading={loading}
            />
          </div>
          <div className="col-4">
            <SelectDropDown
              onChange={(e: any) => {
                setFilters({
                  ...filters,
                  $function: JSON.parse(e.currentTarget.value),
                });
              }}
              options={functions}
              placeholder="Function"
              loading={loading}
            />
          </div>
        </div>
      </div>
      <div className="row bg-light mt-3 p-4">
        <div className="col-10">
          {Object.keys(filters).map((key) => {
            return (
              filters[key as keyof IFilters].title && (
                <span className="badge bg-white text-body">
                  {filters[key as keyof IFilters].title}
                  <CancelIcon
                    onClick={() => {
                      console.log(key);
                      setFilters({
                        ...filters,
                        [key]: {},
                      });
                    }}
                  />
                </span>
              )
            );
          })}
        </div>
        <div className="col-2">
          <p
            className="h6 text-success cursor_pointer"
            onClick={() => {
              setFilters({
                department: {} as IGeneral,
                location: {} as IGeneral,
                $function: {} as IGeneral,
              });
            }}
          >
            Clear All
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
