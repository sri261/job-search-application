import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { IGeneral, IJob } from "../../interfaces/job";
import { getJobs, getLookUps, LookUp } from "../../services/services";
import CancelIcon from "../icons/CancelIcon";
import SearchBar from "../SearchBar/SearchBar";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import FilterTag from "./FilterTag";

interface IProps {
  onChange?: (jobs: IJob[]) => void;
  isLoading?: (loading: boolean) => void;
}

interface IFilters {
  department: IGeneral;
  location: IGeneral;
  $function: IGeneral;
}

function SearchBox({ onChange, isLoading }: IProps) {
  const location = useLocation();
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
  const history = useHistory();
  const isLoadingHandler = (loading: boolean) => {
    isLoading && isLoading(loading);
  };

  const searchHandler = (e?: string) => {
    isLoadingHandler(true);
    const locationState = location.state as IFilters;
    getJobs(
      e,
      locationState?.location?.id || null,
      locationState?.department?.id || null,
      locationState?.$function?.id || null
    )
      .then((jobs: IJob[]) => {
        onChange && onChange(jobs);
        isLoadingHandler(false);
        setSearchOptions(
          jobs.map((job: IJob) => ({ value: job.title, id: job.id }))
        );
      })
      .catch(() => isLoadingHandler(false));
  };

  useEffect(() => {
    searchHandler();
    setFilters(location.state as IFilters);
  }, [location.state]);

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
    <div className="mt-2">
      <div className="row p-4" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="row mt-2">
          <SearchBar
            onChange={(e) => {
              if (e.length === 0) {
                searchHandler();
              }
            }}
            onSubmit={searchHandler}
            options={searchOptions}
          />
        </div>
        <div className="row">
          <div className="col-4">
            <SelectDropDown
              onChange={(e: any) => {
                history.push({
                  pathname: "/listing",
                  state: {
                    ...(location.state as typeof location),
                    department: JSON.parse(e.currentTarget.value),
                  },
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
                history.push({
                  pathname: "/listing",
                  state: {
                    ...(location.state as typeof location),
                    location: JSON.parse(e.currentTarget.value),
                  },
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
                history.push({
                  pathname: "/listing",
                  state: {
                    ...(location.state as typeof location),
                    $function: JSON.parse(e.currentTarget.value),
                  },
                });
              }}
              options={functions}
              placeholder="Function"
              loading={loading}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3 p-4" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="col-10">
          {Object.keys(filters || {}).map((key) => {
            return (
              filters[key as keyof IFilters].title && (
                <FilterTag
                  label={filters[key as keyof IFilters].title}
                  onCancel={() => {
                    history.push({
                      pathname: "/listing",
                      state: {
                        ...(location.state as typeof location),
                        [key]: {},
                      },
                    });
                  }}
                />
              )
            );
          })}
        </div>
        <div className="col-2">
          <p
            className="h6 text-success cursor_pointer"
            onClick={() => {
              history.push({
                pathname: "/listing",
                state: {},
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
