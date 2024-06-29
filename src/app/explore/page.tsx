import PagePadding from "@/components/element/PagePadding";
import React from "react";
import Category from "./_components/Category";
import { getAllPlaylist, getSongListTop10, dymmyGenreList } from "@/lib/dummyData";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import SonglistCarousel from "@/components/SonglistCarousel";
import GenrelistCarousel from "@/components/GenrelistCarousel";

const page = async () => {
  const [allPlaylistArray, top10Songlist] = await Promise.all([getAllPlaylist(), getSongListTop10()]);
  return (
    <PagePadding>
      <div className="mt-14"></div>
      <Category />
      <div className="my-20"></div>
      <PlaylistCarousel title="새 앨범 및 싱글" playlistArray={allPlaylistArray} />
      <div className="my-20"></div>
      <SonglistCarousel title="실시간 차트" top10Songlist={top10Songlist} />
      <div className="my-20"></div>
      <GenrelistCarousel title="장르 및 분위기" genrelist={dymmyGenreList} />
    </PagePadding>
  );
};

export default page;
