import Spinner from "../icons/Spinner";
import SearchIcon from "./SearchIcon";
interface IProps {
  loading?: boolean;
  options?: { value: string }[];
  onChange?: (e: string) => void;
  onSubmit?: (e: string) => void;
}

function SearchBar({
  options = [],
  onChange,
  onSubmit,
  loading = false,
}: IProps) {
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    onSubmit && onSubmit(e.target[0].value);
  };
  const onChangeHandler = (e: any) => {
    onChange && onChange(e.currentTarget[0].value);
  };

  return (
    <form
      className="form-horizontal"
      onSubmit={onSubmitHandler}
      onChange={onChangeHandler}
    >
      <div className="input-group mb-3 w-100">
        <input
          className="form-control"
          list="datalistOptions"
          id="search"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          {options.map((option, i) => (
            <option value={option.value} key={i} />
          ))}
        </datalist>
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          {/* {loading && <Spinner />} */}
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
