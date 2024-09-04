interface ILoadingProps {
  classes?: string;
  color?: "white" | "brand";
  size?: "sm" | "md" | "lg";
}

const Loading: React.FC<ILoadingProps> = ({
  classes,
  color = "white",
  size = "sm",
}) => {
  return (
    <div
      className={`${
        size == "sm" ? "w-4 h-4" : size == "md" ? "w-6 h-6" : "w-8 h-8"
      }  border-4 border-t-4  border-${color} border-r-transparent rounded-full animate-spin m-auto ${classes} `}
    ></div>
  );
};
export default Loading;
