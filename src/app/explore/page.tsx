import PagePadding from "@/components/element/PagePadding";
import React from "react";
import Category from "./_components/Category";
import { getAllPlaylist } from "@/lib/dummyData";
import PlaylistCarousel from "@/components/PlaylistCarousel";

const page = async () => {
  const allPlaylistArray = await getAllPlaylist();
  return (
    <PagePadding>
      <div className="mt-14"></div>
      <Category />
      <div className="my-20"></div>
      <PlaylistCarousel title="새 앨범 및 싱글" playlistArray={allPlaylistArray} />
    </PagePadding>
  );
};

export default page;
