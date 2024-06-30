"use client";
import useUIState from "@/hooks/useUIState";
import Image from "next/image";
import React, { useEffect } from "react";

export default function HeaderBgChanger({ imageSrc }: { imageSrc: string }) {
  const { setHomeImgSrc, homeImgSrc } = useUIState();

  useEffect(() => {
    setHomeImgSrc(imageSrc);
  }, [imageSrc]);

  return null;
}
