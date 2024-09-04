import Loading from "./Loading";

interface IProps {
  children?: React.ReactNode;
  text?: string;
  handleClick?: () => void;
  loading?: boolean;
  classes?: string;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const Button: React.FC<IProps> = ({
  children,
  text,
  loading = false,
  handleClick,
  classes,
  rounded = false,
  size = "lg",
  style,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`bg-brand hover:bg-[rgba(16,173,181,0.9)]  hover:shadow-md text-white px-4 
      flex items-center justify-center gap-4
      ${size == "sm" ? "h-[32px]" : size == "md" ? "h-[40px]" : "h-[48px]"} 
      ${
        size == "sm"
          ? "text-[12px] min-w-12"
          : size == "md"
          ? "text-[14px] min-w-16"
          : "text-[16px] min-w-20"
      } 
      ${rounded ? "rounded-md" : "rounded-sm"} ${classes} `}
      style={style}
    >
      {loading ? <Loading /> : text ?? children}
    </button>
  );
};
export default Button;
