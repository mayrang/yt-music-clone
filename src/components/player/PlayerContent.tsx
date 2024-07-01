"use client";
import { Slider as PlayerSlider } from "@/components/ui/slider";
import usePlayerState from "@/hooks/usePlayerState";
import React, { useCallback, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useAudio } from "react-use";
import { MdPause, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import { IoShuffle, IoVolumeHighOutline } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";
import { AiFillCaretUp } from "react-icons/ai";
const PlayerContent = () => {
  const { activeSong, prevSongArrayQueue, nextSongArrayQueue, prevSong, nextSong } = usePlayerState();
  if (!activeSong) {
    return null;
  }
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src,

    autoPlay: false,
  });
  const isLoading = activeSong.src && state.buffered.length === 0 && state.time === 0;
  console.log(state);
  useEffect(() => {
    if (activeSong?.src) {
      controls.play();
    }
  }, [activeSong?.src]);

  const onClickNext = useCallback(() => {
    if (nextSongArrayQueue.length === 0) {
      controls.pause();
    } else {
      nextSong();
    }
  }, [controls, nextSong, nextSongArrayQueue]);
  const onEventFinish = useCallback(() => {
    onClickNext();
  }, [onClickNext]);

  useEffect(() => {
    ref?.current?.addEventListener("ended", onEventFinish);
    return () => {
      ref?.current?.removeEventListener("ended", onEventFinish);
    };
  }, [ref, onEventFinish]);

  // console.log(state, audio, activeSong);
  const onClickPrev = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevSongArrayQueue.length === 0) return;
    prevSong();
  };
  const onClickPlay = () => {
    if (activeSong) {
      controls.play();
    } else {
      nextSong();
    }
  };

  const onClickPause = () => {
    controls.pause();
  };
  return (
    <div className="w-full h-full relative">
      {audio}
      <div className="absolute top-[-16px] w-full ">
        <PlayerSlider
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value[0]);
          }}
          className="w-full "
        />
      </div>
      <div className="w-full items-center px-4 lg:px-10 h-full flex flex-row gap-2">
        <div className="flex flex-row items-center gap-4 lg:gap-8">
          <MdSkipPrevious onClick={onClickPrev} className="cursor-pointer" size={36} />
          <div className="w-fit flex flex-row items-center justify-center">
            {isLoading ? (
              <ClipLoader color="#fff" />
            ) : state.playing ? (
              <MdPause className="cursor-pointer" size={32} onClick={onClickPause} />
            ) : (
              <FaPlay onClick={onClickPlay} className="cursor-pointer" size={24} />
            )}
          </div>
          <MdSkipNext onClick={onClickNext} className="cursor-pointer" size={34} />
        </div>
        <article>
          <div className="flex flex-row">
            <div className="relative w-[40px] h-[40px]">
              <Image alt="image cover" fill className="object-cover" src={activeSong?.imageSrc || ""} />
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-netral-500 text-[14px]">{activeSong?.channel} </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className="lg:flex flex-row hidden">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
