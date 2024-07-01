"use client";
import { Playlist, Song } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoEllipsisVertical, IoPlayOutline } from "react-icons/io5";
import IconButton from "./element/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import usePlayerState from "@/hooks/usePlayerState";
interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { addSonglist } = usePlayerState();
  const { owner = "", playlistName, songList = [], id } = playlist;
  const { push } = useRouter();
  const imgSrc = (getRandomElementFromArray(songList) as Song)?.imageSrc;
  const onClickPlay = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("play");
    e.stopPropagation();
    addSonglist(playlist.songList);
  };
  const onClickPlaylist = () => {
    push(`/playlist?list=${id}`);
  };
  return (
    <article onClick={onClickPlaylist} className="h-[240px] cursor-pointer group">
      <section className="relative h-[136px]">
        <Image
          src={imgSrc || "https://images.unsplash.com/photo-1487956382158-bb926046304a"}
          alt="thumbnail"
          className="object-cover rounded-md"
          fill
        />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-black/70 top-0 w-full h-[136px]">
          <div className="absolute top-2 right-4 ">
            <div
              onClick={onClickPlaylist}
              className="flex justify-center items-center top-2 right-4 w-[36px] h-[36px] hover:bg-[#909090]/45 rounded-full cursor-pointer"
            >
              <IconButton onClickIcon={onClickPlaylist} icon={<IoEllipsisVertical size={20} />} />
            </div>
          </div>
          <div
            onClick={onClickPlay}
            className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu bg-black/70 transition-transform hover:scale-110 w-[45px] h-[45px] rounded-full hover:bg-black/90 pl-[1.5px]"
          >
            <IoPlayOutline color="red" size={24} />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{owner}&apos;s playlist</div>
        <div className="text-neutral-500">
          {owner} - 트랙 {songList.length}개
        </div>
      </section>
    </article>
  );
};

export default PlaylistCard;
