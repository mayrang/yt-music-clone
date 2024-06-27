"use client";
import React from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
type PlaylistNavProps = {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: {
      name: string;
      channelId: number;
      channel: string;
      src: string;
      imageSrc: string;
    }[];
  };
};

const PlaylistNav = ({ playlist }: PlaylistNavProps) => {
  const { id, owner, playlistName } = playlist;

  const clickPlaylist = () => {};
  return (
    <li className="flex flex-row items-center justify-between mx-4 px-2 rounded-lg h-[56px] hover:bg-neutral-700 group">
      <div>
        <div className="text-[14px]">{playlistName}</div>
        <div className="text-[12px] text-neutral-400">{owner}</div>
      </div>
      <div onClick={clickPlaylist} className="hidden group-hover:block cursor-pointer">
        <MdOutlinePlayCircleFilled size={30} />
      </div>
    </li>
  );
};

export default PlaylistNav;
