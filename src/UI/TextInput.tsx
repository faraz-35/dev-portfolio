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
    if (name === "cnic") {
      formattedValue = formattedValue
        .replace(/\D/g, "")
        .replace(/(\d{5})/, "$1-")
        .replace(/(\d{5})-(\d{7})/, "$1-$2-")
        .replace(/(\d{5})-(\d{7})-(\d{1})/, "$1-$2-$3");
      if (formattedValue.length > 15) {
        formattedValue = formattedValue.slice(0, 15);
      }
    } else if (name === "passport") {
      formattedValue = formattedValue
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .replace(/^([A-Z]{2})(\d{7})$/, "$1$2");
      if (formattedValue.length > 9) {
        formattedValue = formattedValue.slice(0, 9);
      }
    } else if (name === "zip") {
      formattedValue = formattedValue.replace(/[^0-9]/g, "");
      if (formattedValue.length > 5) {
        formattedValue = formattedValue.slice(0, 5);
      }
    } else if (name === "phone") {
      formattedValue = formattedValue.replace(/(?!^)\+|[^\d+]/g, "");
      if (formattedValue.length > 14) {
        formattedValue = formattedValue.slice(0, 14);
      }
    } else if (name === "iban") {
      formattedValue = formattedValue
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .replace(/^([A-Z]{2})(\d{2})([A-Z0-9]{1,30})?/, "$1 $2 $3")
        .trim();
      if (formattedValue.length > 34) {
        formattedValue = formattedValue.slice(0, 34);
      }
    }
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
