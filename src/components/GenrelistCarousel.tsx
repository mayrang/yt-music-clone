import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getChunkedArray } from "@/lib/utils";
import GenreCard from "./GenreCard";

interface GenrelistCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: React.ReactNode;
  genrelist: string[];
}

const GenrelistColumn = ({ genrelist }: { genrelist: string[] }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {genrelist.map((genre) => (
        <GenreCard genre={genre} key={genre} />
      ))}
    </div>
  );
};

const GenrelistCarousel: React.FC<GenrelistCarouselProps> = ({ title, subTitle, thumbnail, genrelist }) => {
  const chunkedGenrelist = getChunkedArray(genrelist, 4) as string[][];

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
          {chunkedGenrelist?.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/4 basis-1/3 ">
              <GenrelistColumn genrelist={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenrelistCarousel;
