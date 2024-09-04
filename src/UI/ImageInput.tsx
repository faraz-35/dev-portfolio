import usePostApi from "@/hooks/usePostApi";
import { ChangeEvent, useEffect } from "react";
import Loading from "./Loading";

interface IImageInput {
  value: string;
  label: string;
  error: string | null;
  name: string;
  handleChange: (name: string, value: string) => void;
  disabled?: boolean;
  classes?: string;
}
const ImageInput: React.FC<IImageInput> = ({
  value,
  label,
  name,
  error,
  handleChange,
  disabled,
  classes,
}) => {
  const {
    data,
    loading,
    error: apiError,
    postData,
  } = usePostApi("image/upload");

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const data = {
          fileName: file.name,
          fileBase64: base64String,
          folder: "Persons",
        };
        await postData(data);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (data) handleChange(name, data);
  }, [data]);
  return (
    <div className={classes}>
      <p className="font-semibold mb-1 leading-[21px]">{label}</p>
      <label
        className={`flex items-center  h-[48px] w-full rounded-md  border  shadow-sm  px-3 bg-white outline-brand focus:border-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-100 
          ${error ? "border-red-500  " : "border-gray-300"}
          ${disabled || loading ? "cursor-not-allowed " : "cursor-pointer"}
          block text-center line-height-[48px]`}
      >
        <input
          type="file"
          accept="image/*"
          disabled={disabled || loading}
          onChange={handleImageChange}
          hidden
        />
        {loading ? (
          <Loading color="brand" />
        ) : (
          <p>{value !== "" ? value?.split("/")[4]?.split(".")[0] : ""}</p>
        )}
      </label>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ImageInput;
