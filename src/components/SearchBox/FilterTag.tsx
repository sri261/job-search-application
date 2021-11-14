import CancelIcon from "../icons/CancelIcon";

interface IProps {
  label: string;
  onCancel?: () => void;
}

function FilterTag({ label, onCancel }: IProps) {
  return (
    <span className="badge bg-white text-body mx-1">
      <span className="mx-1 fs-7 fw-normal">{label}</span>
      <CancelIcon
        onClick={() => {
          onCancel && onCancel();
        }}
      />
    </span>
  );
}

export default FilterTag;
