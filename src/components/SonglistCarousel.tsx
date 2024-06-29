import { TopSong } from "@/types";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getChunkedArray } from "@/lib/utils";

import SongCard from "./SongCard";

interface SonglistCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: React.ReactNode;
  top10Songlist: TopSong[];
}

const SonglistPart = ({ songlist }: { songlist: TopSong[] }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {songlist.map((song, index) => (
        <SongCard song={song} key={index} />
      ))}
    </div>
  );
};

const SonglistCarousel: React.FC<SonglistCarouselProps> = ({ title, subTitle, thumbnail, top10Songlist }) => {
  const chunkedSonglist = getChunkedArray(top10Songlist, 4) as TopSong[][];
  console.log("chunked", chunkedSonglist);
  return (
    <div className="w-full">
      <Carousel>
        <article className="flex flex-row items-end justify-between my-2">
          <div className="flex flex-row gap-3 items-center">
            {thumbnail}
            <div>
              <div>{subTitle && <div className="text-sm text-neutral-400">{subTitle}</div>}</div>
              <div className="text-[34px] leading-[34px] font-bold">{title}</div>
            </div>
          </div>
          <div className="relative left-[-60px] bottom-[25px] ">
            <CarouselPrevious className="right-2" />
            <CarouselNext className="left-2" />
          </div>
        </article>
        <CarouselContent>
          {chunkedSonglist?.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 ">
              <SonglistPart songlist={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SonglistCarousel;
