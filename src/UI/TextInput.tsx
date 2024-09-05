interface ITextInput {
  label: string;
  placeholder?: string;
  value: string | null;
  error: string | null;
  name: string;
  handleChange: (name: string, value: string) => void;
  disabled?: boolean;
  multiline?: boolean;
  classes?: string;
  type?: "text" | "password" | "email" | "number" | "date";
}
const TextInput: React.FC<ITextInput> = ({
  label,
  placeholder,
  name,
  value,
  error,
  handleChange,
  disabled,
  classes,
  multiline = false,
  type = "text",
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let formattedValue = e.target.value;
   
    handleChange?.(name, formattedValue);
  };

  return (
    <div className={classes}>
      <p className="font-semibold mb-1 leading-[21px]">{label}</p>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          value={value ?? ""}
          disabled={disabled}
          onChange={handleInputChange}
          className={`p-4 w-full overflow-scroll rounded-md  border  shadow-sm  px-3 bg-white  outline-brand focus:border-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-100 
          ${error ? "border-red-500  " : "border-gray-300"}
          ${disabled ? "cursor-not-allowed  " : ""}
          `}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value ?? ""}
          disabled={disabled}
          onChange={handleInputChange}
          className={`h-[48px] overflow-scroll w-full rounded-md  border  shadow-sm  px-3 bg-white  outline-brand focus:border-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-100 
            ${error ? "border-red-500  " : "border-gray-300"}
            ${disabled ? "cursor-not-allowed  " : ""}
            ${type === "number" ? "appearance-none" : ""}

        `}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
export default TextInput;
