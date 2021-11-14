import SearchIcon from "./SearchIcon";
interface IProps {
  loading?: boolean;
  options?: { value: string; id: number }[];
  onChange?: (e: string) => void;
  onSubmit?: (e: string) => void;
}

function SearchBar({ options = [], onChange, onSubmit }: IProps) {
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
          {options.map((option) => (
            <option value={option.value} key={option.id} />
          ))}
        </datalist>
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
