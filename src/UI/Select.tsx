import { useState, useRef, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

interface ITextInput {
  label: string;
  placeholder?: string;
  value: string | null;
  error: string | null;
  name: string;
  handleChange: (name: string, value: string) => void;
  options?: { label: string; value: string; icon?: any }[];
  disabled?: boolean;
  classes?: string;
  size?: "sm" | "md";
  color?: "gray" | "white";
}
const Select: React.FC<ITextInput> = ({
  label,
  placeholder,
  name,
  value,
  error,
  options,
  handleChange,
  disabled,
  size = "md",
  color = "white",
  classes,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleInputChange = (value: string) => {
    handleChange?.(name, value);
  };

  return (
    <div className={classes}>
      <p className="font-semibold mb-1 leading-[21px]">{label}</p>
      <div
        ref={ref}
        tabIndex={0}
        className={`relative  w-full rounded-md    shadow-sm  px-3  
        flex justify-between items-center
        ${size === "sm" ? "h-[40px]" : "h-[48px]"}
        ${
          color === "gray"
            ? "bg-[#EEEEEE] "
            : "bg-white border  outline-brand focus:border-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-100 "
        }
        ${error ? "border-red-500  " : "border-gray-300"}
        ${disabled ? "cursor-not-allowed  " : ""}
        `}
        onClick={() => {
          setIsOpen(!isOpen);
          ref.current?.focus();
        }}
      >
        <p
          className={` ${
            !value
              ? "text-gray-400"
              : size === "sm"
              ? "text-[12px]"
              : "text-[16px]"
          } `}
        >
          {value ?? placeholder}
        </p>
        <button className="h-full pl-2 ml-auto">
          {isOpen ? (
            <FaChevronUp size={size == "sm" ? 14 : 16} />
          ) : (
            <FaChevronDown size={size == "sm" ? 14 : 16} />
          )}
        </button>
        {isOpen && (
          <div className="w-[102%] bg-white absolute top-[49px] left-[-1%] shadow-xl rounded-md pt-4 pb-2 z-[10000] ">
            {options?.map((option, index) => (
              <div
                key={option.value}
                className={` hover:bg-gray-100 cursor-pointer
              ${index !== options.length - 1 ? " " : ""}
               `}
                onClick={() => handleInputChange(option.value)}
              >
                <p className="my-1 py-1 px-6">{option.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
export default Select;
