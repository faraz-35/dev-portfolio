import React from "react";
import { BiCross } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

interface AlertProps {
  message: string;
  type: "success" | "error";
  close?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, close }) => {
  const alertStyles = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div
      className={`p-4 min-w-[40vw] rounded  fixed top-12 left-[30%] m-6 flex justify-between ${alertStyles[type]}`}
    >
      <p>{message}</p>
      <CgClose onClick={close} className="ml-auto cursor-pointer" />
    </div>
  );
};

export default Alert;
