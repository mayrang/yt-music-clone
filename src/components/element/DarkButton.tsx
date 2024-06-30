import { cn } from "@/lib/utils";
import React from "react";

interface DarkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
}

const DarkButton = ({ icon, label, className, ...props }: DarkButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-2xl text-[14px] bg-black text-white border border-neutral-700 hover:bg-neutral-800 h-[36px] flex flex-row items-center gap-3 min-w-[120px] p-3",
        className
      )}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default DarkButton;
