import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  prevSongArrayQueue: Song[];
  nextSongArrayQueue: Song[];
  activeSong: null | Song;
  addSonglist: (songlist: Song[]) => void;
  nextSong: () => void;
  prevSong: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible) => {
    set({ isVisible });
  },
  activeSong: null,
  prevSongArrayQueue: [],
  nextSongArrayQueue: [],
  addSonglist: (songlist) => {
    set((prev) => {
      const prevSong = prev.activeSong;
      const cloneSonglist = [...songlist];
      const currentSong = cloneSonglist.splice(0, 1)?.[0];

      return {
        ...prev,
        isVisible: true,
        activeSong: currentSong,
        prevSongArrayQueue: [...(prevSong ? [prevSong] : []), ...prev.prevSongArrayQueue],
        nextSongArrayQueue: [...cloneSonglist],
      };
    });
  },
  nextSong: () => {
    set((prev) => {
      const prevSong = prev.activeSong;
      const currentSong = prev.nextSongArrayQueue.splice(0, 1)?.[0];

      return {
        ...prev,
        prevSongArrayQueue: [...(prevSong ? [prevSong] : []), ...prev.prevSongArrayQueue],
        activeSong: currentSong,
        nextSongArrayQueue: prev.nextSongArrayQueue,
      };
    });
  },
  prevSong: () => {
    set((prev) => {
      const prevSong = prev.activeSong;
      const currentSong = prev.prevSongArrayQueue.splice(0, 1)?.[0];
      return {
        prevSongArrayQueue: prev.prevSongArrayQueue,
        activeSong: currentSong,
        nextSongArrayQueue: [...(prevSong ? [prevSong] : []), ...prev.nextSongArrayQueue],
      };
    });
  },
}));

export default usePlayerState;
