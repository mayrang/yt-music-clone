"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCheck } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
const Category = () => {
  const libraryCategoryList = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];
  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-10">
      <ul className="max-w-full flex  flex-row gap-4 overflow-x-auto">
        {libraryCategoryList.map((item) => (
          <li
            key={item}
            className={
              "px-4 min-w-fit text-white h-[38px] border flex items-center justify-center border-transparent bg-black/20 rounded-lg cursor-pointer hover:bg-black/45"
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="h-[42px] w-[142px] flex flex-row items-center justify-between rounded-3xl bg-neutral-800 border border-neutral-600 p-4 ">
            <div>최근활동</div>
            <div>
              <AiOutlineCaretDown size={20} />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={"end"} className="w-[300px] bg-neutral-800">
          <DropdownMenuLabel className="text-sm font-semibold p-4">
            <div>정렬 기준</div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-neutral-700" />
          <DropdownMenuCheckboxItem className="p-4">
            <span className="min-w-[40px]">
              <FaCheck />
            </span>
            <div>최근 활동</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="p-4">
            <span className="min-w-[40px]"></span>
            <div>최근에 저장됨</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="p-4">
            <span className="min-w-[40px]"></span>
            <div>최근 재생한 음악</div>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Category;
