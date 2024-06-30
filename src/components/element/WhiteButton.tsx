import { cn } from "@/lib/utils";
import React from "react";
import { FiPlay } from "react-icons/fi";

interface WhiteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

const WhiteButton = ({ icon, label, className, ...props }: WhiteButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-2xl text-[14px] bg-white text-black hover:bg-neutral-400 h-[36px] flex flex-row items-center gap-3 min-w-[80px] p-3",
        className
      )}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default WhiteButton;
