import { create } from "zustand";

type UIStateTypes = {
  homeCategory: string;
  homeImgSrc: string;
  setHomeCategory: (value: string) => void;
  setHomeImgSrc: (value: string) => void;
};

const useUIState = create<UIStateTypes>((set) => ({
  homeCategory: "",
  homeImgSrc: "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value: string) => {
    set({ homeCategory: value });
  },
  setHomeImgSrc: (src: string) => {
    set({ homeImgSrc: src });
  },
}));

export default useUIState;
