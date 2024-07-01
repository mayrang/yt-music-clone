"use client";
import usePlayerState from "@/hooks/usePlayerState";
import React from "react";
import PlayerContent from "./PlayerContent";

const PlayerWrapper = () => {
  const { isVisible } = usePlayerState();
  if (!isVisible) return null;
  return (
    <div className="h-[72px] fixed bottom-0 w-full bg-neutral-600">
      <PlayerContent />
    </div>
  );
};

export default PlayerWrapper;
