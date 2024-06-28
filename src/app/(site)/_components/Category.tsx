"use client";
import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import React from "react";

const Category = () => {
  const { homeCategory, setHomeCategory, setHomeImgSrc } = useUIState();

  const onClickCategory = (value: { label: string; src: string }) => {
    if (value.label === homeCategory) {
      setHomeCategory("");
      setHomeImgSrc("");
    } else {
      setHomeCategory(value.label);
      setHomeImgSrc(value.src);
    }
  };

  return (
    <ul className="max-w-full flex  flex-row gap-4 overflow-x-auto">
      {homeCategoryList.map((item) => (
        <li
          onClick={() => onClickCategory(item)}
          key={item.label}
          className={cn(
            "px-4 min-w-fit text-white h-[38px] border flex items-center justify-center border-transparent bg-black/20 rounded-lg cursor-pointer hover:bg-black/45",
            homeCategory === item.label && "bg-white text-black hover:bg-white/40"
          )}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Category;
