interface IProps {
  size?: "sm";
}

function Spinner({ size }: IProps) {
  return (
    <div className="clearfix">
      <div
        className={`spinner-border float-end spinner-border-${size && size}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
