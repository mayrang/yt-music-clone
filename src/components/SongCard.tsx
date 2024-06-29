import { TopSong } from "@/types";
import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import IconButton from "./element/IconButton";
import { FaRegPlayCircle } from "react-icons/fa";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { FaEllipsisVertical } from "react-icons/fa6";
const SongCard = ({ song }: { song: TopSong }) => {
  return (
    <div className="flex flex-row gap-4 w-full h-[48px] items-center relative group ">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="song image" fill />
        <div className="group-hover:flex hidden items-center justify-center h-[48px] w-[48px] absolute top-0 bg-black/80 cursor-pointer">
          <FaRegPlayCircle size={20} />
        </div>
      </div>
      <div>
        {song.rank === song.prevRank ? (
          <FaCircle size={10} />
        ) : song.rank > song.prevRank ? (
          <AiOutlineCaretUp color={"#3CA63F"} size={10} />
        ) : (
          <AiOutlineCaretDown color="#FF0000" size={10} />
        )}
      </div>
      <div>{song.rank + 1}</div>
      <div>{song.name}</div>
      <div className="w-1/2 right-0 absolute h-[48px] hidden group-hover:flex flex-row items-center justify-end gap-2 group-hover:bg-black/60 md:group-hover:bg-inherit">
        <IconButton icon={<GoThumbsup size={20} />} />
        <IconButton icon={<GoThumbsdown size={20} />} />
        <IconButton icon={<FaEllipsisVertical size={20} />} />
      </div>
    </div>
  );
};

export default SongCard;
