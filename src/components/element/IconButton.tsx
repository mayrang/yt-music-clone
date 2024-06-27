"use client";
import React from "react";

const IconButton = ({ icon, onClickIcon = () => {} }: { icon: React.ReactNode; onClickIcon: () => void }) => {
  return (
    <div
      onClick={onClickIcon}
      className="flex flex-row items-center cursor-pointer justify-center w-[36px] h-[36px] hover:bg-[#909090]/45 rounded-full"
    >
      {icon}
    </div>
  );
};

export default IconButton;
