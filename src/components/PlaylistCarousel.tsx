import { Playlist } from "@/types";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PlaylistCard from "./PlaylistCard";
interface PlaylistCarouselProps {
  title?: string;
  subTitle?: string;
  thumbnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlaylistCarousel: React.FC<PlaylistCarouselProps> = ({ title, subTitle, thumbnail, playlistArray }) => {
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
          {playlistArray?.map((item) => (
            <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <PlaylistCard playlist={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlaylistCarousel;
