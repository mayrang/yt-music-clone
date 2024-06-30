import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist, Song } from "@/types";
import Image from "next/image";
import { permanentRedirect } from "next/navigation";
import React from "react";
import HeaderBgChanger from "./_components/HeaderBgChanger";
import Header from "@/components/element/Header";
import PagePadding from "@/components/element/PagePadding";
import PlaylistHead from "@/components/PlaylistHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";

const page = async (props: { searchParams: { list: string } }) => {
  const playlist: Playlist | undefined = await getPlaylistById(Number(props.searchParams.list));
  if (!playlist) permanentRedirect("/");
  const imageSrc = (getRandomElementFromArray(playlist.songList) as Song)?.imageSrc;
  return (
    <Header imageSrc={imageSrc}>
      <PagePadding>
        <HeaderBgChanger imageSrc={imageSrc} />
        {/* <section className="fixed top-0 h-[400px] w-[calc(100%-240px)]">
        <div className="relative h-full w-full">
          <Image className="object-cover" placeholder="empty" src={imageSrc} fill alt="back media image" />
        </div>
        <div className="h-full top-0 absolute opacity-40  w-full bg-black"></div>
        <div className="h-full top-0 absolute   w-full bg-gradient-to-t from-black"></div>
      </section> */}
        <div className="mt-12"></div>
        <PlaylistHead playlist={playlist} />
        <div className="my-8"></div>
        <div className="flex flex-col gap-2 ">
          {playlist.songList.map((song, index) => (
            <SongCardRowExpand key={index} song={song} />
          ))}
        </div>
      </PagePadding>
    </Header>
  );
};

export default page;
