import PagePadding from "@/components/element/PagePadding";
import React from "react";
import Category from "./_components/Category";
import PlaylistCard from "@/components/PlaylistCard";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomInt } from "@/lib/utils";

const page = async () => {
  return (
    <PagePadding>
      <div className="mt-6"></div>
      <Category />
      <div className="my-14"></div>
      <section className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
        <PlaylistCard playlist={await getPlaylistById(getRandomInt(1, 5))} />
      </section>
      <div className="my-14"></div>
    </PagePadding>
  );
};

export default page;
