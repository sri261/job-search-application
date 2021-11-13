function Spinner() {
  return (
    <span className="input-group-text" id="basic-addon1">
      <div className="clearfix">
        <div
          className="spinner-border float-end spinner-border-sm"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </span>
  );
}

export default Spinner;
