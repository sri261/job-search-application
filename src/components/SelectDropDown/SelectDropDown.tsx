import React from "react";
import { IGeneral } from "../../interfaces/job";
import Spinner from "../Spinner";

interface IProps {
  options: IGeneral[];
  placeholder?: string;
  loading?: boolean;
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void;
}

function SelectDropDown({
  options,
  placeholder = "Select Option",
  loading = false,
  onChange,
}: IProps) {
  const onChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
  };

  return (
    <div className="input-group mb-3">
      <select
        defaultValue={"DEFAULT"}
        disabled={loading}
        className="form-select"
        id="inputGroupSelect01"
        onChange={onChangeHandler}
      >
        <option value="DEFAULT" disabled>
          {placeholder}
        </option>
        {options.map((option: IGeneral) => (
          <option value={option.title} key={option.id}>
            {option.title}
          </option>
        ))}
      </select>
      {loading && <Spinner />}
    </div>
  );
}

export default SelectDropDown;
