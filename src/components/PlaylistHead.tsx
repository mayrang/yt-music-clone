import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist, Song } from "@/types";
import Image from "next/image";
import React from "react";
import WhiteButton from "./element/WhiteButton";
import { FiFilePlus, FiPlay } from "react-icons/fi";
import DarkButton from "./element/DarkButton";
import IconButton from "./element/IconButton";
import { FaEllipsisVertical } from "react-icons/fa6";

const PlaylistHead = ({ playlist }: { playlist: Playlist }) => {
  const { owner, playlistName, songList } = playlist;
  const ramdomSong = getRandomElementFromArray(songList) as Song;

  return (
    <section>
      <div className="flex flex-row gap-10 items-center">
        <div className="w-[160px] h-[160px] lg:w-[240px] lg:h-[240px] relative">
          <Image className="object-cover" fill src={ramdomSong.imageSrc} alt={ramdomSong.name} />
        </div>
        <ul>
          <li className="text-[28px] font-bold">{playlistName}</li>
          <li className="text-[14px] text-neutral-400 mt-3">
            <div>{`앨범 • ${owner} • 2019`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </li>
          <li className="hidden lg:flex flex-row gap-4 items-center mt-2">
            <WhiteButton icon={<FiPlay size={20} />} label={"재생"} />
            <DarkButton icon={<FiFilePlus size={20} />} label="보관함에 저장" />
            <IconButton icon={<FaEllipsisVertical size={20} />} />
          </li>
        </ul>
      </div>
      <div className="lg:hidden flex flex-row gap-4 items-center mt-4">
        <WhiteButton icon={<FiPlay size={20} />} label={"재생"} />
        <DarkButton icon={<FiFilePlus size={20} />} label="보관함에 저장" />
        <IconButton icon={<FaEllipsisVertical size={20} />} />
      </div>
    </section>
  );
};

export default PlaylistHead;
