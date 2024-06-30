import PlaylistCarousel from "@/components/PlaylistCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import DarkButton from "@/components/element/DarkButton";
import Header from "@/components/element/Header";
import PagePadding from "@/components/element/PagePadding";
import WhiteButton from "@/components/element/WhiteButton";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { Song } from "@/types";
import { permanentRedirect } from "next/navigation";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

const page = async (props: { params: { id: string } }) => {
  const channel = await getChannelById(Number(props.params.id));

  if (!channel) permanentRedirect("/");

  const imageSrc = (getRandomElementFromArray(channel.songList) as Song)?.imageSrc;
  return (
    <Header imageSrc={imageSrc}>
      <PagePadding>
        <section className="mt-[150px] flex flex-col gap-4">
          <div className="text-[28px] font-bold">{channel.name}</div>
          <div className="hidden lg:flex text-[20px] flex-row items-center gap-4">
            <WhiteButton icon={<FiShuffle size={16} />} label="셔플" />
            <WhiteButton icon={<FiMusic size={16} />} label="뮤직 스테이션" />
            <DarkButton
              className="flex flex-row items-center justify-center min-w-[200px]"
              label={`구독중 ${channel.subscribers}`}
            />
          </div>
          <div className="flex lg:hidden flex-col  gap-2">
            <DarkButton
              className="flex flex-row items-center text-[20px] justify-center max-w-[200px]"
              label={`구독중 ${channel.subscribers}`}
            />
            <div className="flex flex-row items-center gap-2">
              <WhiteButton icon={<FiShuffle size={16} />} label="셔플" />
              <WhiteButton icon={<FiMusic size={16} />} label="뮤직 스테이션" />
            </div>
          </div>
        </section>
        <section className="mt-24 flex flex-col gap-4">
          <div className="text-[28px] font-bold">노래</div>
          <ul className="flex flex-col  gap-2">
            {channel.songList.map((song, idx) => (
              <SongCardRowExpand song={song} key={idx} />
            ))}
          </ul>
        </section>
        <section className="mt-24 flex flex-col gap-4">
          <div className="text-[28px] font-bold">앨범</div>

          <PlaylistCarousel playlistArray={channel.playlistArray} />
        </section>
        <div className="my-6"></div>
      </PagePadding>
    </Header>
  );
};

export default page;
