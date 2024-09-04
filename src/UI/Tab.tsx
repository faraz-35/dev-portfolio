interface ITab {
  options: string[];
  active: string;
  setActive: (active: string) => void;
  disabled?: boolean;
}
const Tab: React.FC<ITab> = ({ options, active, setActive, disabled }) => {
  return (
    <div className="flex justify-between items-center w-[200px] lg:w-[260px] h-[42px] bg-white p-1 rounded-md">
      {options.map((option, index) => (
        <button
          key={index}
          disabled={disabled}
          onClick={() => {
            setActive(option);
          }}
          className={`w-[100px] lg:w-[120px] h-[32px] px-4   
          ${active === option ? "bg-[#10ADB5] text-white rounded-md" : ""} 
          ${disabled ? "cursor-not-allowed " : "cursor-pointer "} 

          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default Tab;
