"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-20 gap-4">
      <GridLoader color="red" />
      <div className="text-[50px]">Oops!</div>
      <div className="text-lg">잠시 후 다시 시도해주세요!</div>
    </div>
  );
};

export default ErrorMessage;
