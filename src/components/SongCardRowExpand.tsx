"use client";
import { Song } from "@/types";
import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import IconButton from "./element/IconButton";
import { FaRegPlayCircle } from "react-icons/fa";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const SongCardRowExpand = ({ song }: { song: Song }) => {
  const { push } = useRouter();
  const onClickChannel = () => {
    push(`/channer/${song.channelId}`);
  };
  return (
    <div className="flex flex-row gap-4 w-full h-[48px] items-center relative group ">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="song image" fill />
        <div className="group-hover:flex hidden items-center justify-center h-[48px] w-[48px] absolute top-0 bg-black/80 cursor-pointer">
          <FaRegPlayCircle size={20} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div className="text-neutral-400 hover:underline cursor-pointer" onClick={onClickChannel}>
          {song.channel}
        </div>
      </div>

      <div className="w-1/2 right-0 absolute h-[48px] hidden group-hover:flex flex-row items-center justify-end gap-2 group-hover:bg-black/60 md:group-hover:bg-inherit">
        <IconButton icon={<GoThumbsup size={20} />} />
        <IconButton icon={<GoThumbsdown size={20} />} />
        <IconButton icon={<FaEllipsisVertical size={20} />} />
      </div>
    </div>
  );
};

export default SongCardRowExpand;
