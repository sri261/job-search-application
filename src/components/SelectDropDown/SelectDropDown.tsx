import React from "react";
import { IGeneral } from "../../interfaces/job";
import CancelIcon from "../icons/CancelIcon";
import Spinner from "../icons/Spinner";

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

  const cancelClickHandler = () => {};

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

      {/* {!loading && (
        <span
          className="input-group-text"
          id="basic-addon1"
          onClick={cancelClickHandler}
        >
          <CancelIcon />
        </span>
      )} */}

      {loading && <Spinner />}
    </div>
  );
}

export default SelectDropDown;
