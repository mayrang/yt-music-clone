import React from "react";
import { FiMusic, FiBarChart, FiSmile } from "react-icons/fi";
const CategoryMenu = ({ label, icon }: { label: string; icon: React.ReactNode }) => {
  return (
    <div className="flex py-4 text-[20px] flex-row flex-1 items-center w-full h-[56px] bg-neutral-700 rounded-sm gap-4 transition hover:bg-neutral-600">
      {icon}
      <div>{label}</div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row ">
      <CategoryMenu icon={<FiMusic color="#AAAAAA" />} label="최신음악" />
      <CategoryMenu icon={<FiBarChart color="#AAAAAA" />} label="차트" />
      <CategoryMenu icon={<FiSmile color="#AAAAAA" />} label="분위기 및 장르" />
    </div>
  );
};

export default Category;
