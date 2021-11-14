interface IProps {
  type: "primary" | "light" | "secondary";
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  filled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
function Button({
  type,
  label = "",
  onClick,
  filled = false,
  style,
  className,
}: IProps) {
  return (
    <button
      style={style}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick && onClick(e);
      }}
      type="button"
      className={`btn btn${
        filled ? "" : "-outline"
      }-${type} rounded-pill mx-2 fw-bold ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
