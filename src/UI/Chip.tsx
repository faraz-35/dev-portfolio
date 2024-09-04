import React from "react";

type ChipProps = {
  status: "successful" | "pending" | "unsuccessful";
  classes?: string;
};

const Chip: React.FC<ChipProps> = ({ status, classes }) => {
  let chipStyle = "";

  switch (status) {
    case "successful":
      chipStyle = "bg-[#D8FEE1] text-[#2D9725]";
      break;
    case "pending":
      chipStyle = "bg-[#FFEAC7] text-[#D87C22]";
      break;
    case "unsuccessful":
      chipStyle = "bg-[#FFE0E0] text-[#D92D2D]";
      break;
  }

  return (
    <div
      className={`py-2 px-4 rounded-full text-center text-[14px] w-fit capitalize ${chipStyle} ${classes} `}
    >
      {status}
    </div>
  );
};

export default Chip;
