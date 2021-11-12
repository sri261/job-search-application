import SearchIcon from "./SearchIcon";

function SearchBar() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <span className="input-group-text" id="basic-addon1">
        <SearchIcon />
      </span>
    </div>
  );
}

export default SearchBar;
