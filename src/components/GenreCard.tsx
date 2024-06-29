import { generateRandomHex } from "@/lib/utils";
import React from "react";

const GenreCard = ({ genre }: { genre: string }) => {
  const hex = generateRandomHex();
  return (
    <div className="flex flex-row items-center w-full h-[56px] bg-neutral-600 rounded-lg">
      <div className="w-2 h-full rounded-l-lg" style={{ backgroundColor: hex }}></div>
      <div className="px-2">{genre}</div>
    </div>
  );
};

export default GenreCard;
