"use client";
import React from "react";
import Logo from "./element/Logo";
import Navigator from "./element/Navigator";
import usePlayerState from "@/hooks/usePlayerState";
import { cn } from "@/lib/utils";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { isVisible } = usePlayerState();

  return (
    <div className={cn("flex flex-row h-full ", isVisible && "min-h-[calc(100dvh-72px)]")}>
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-400">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1 min-h-[600px]">{children}</div>
    </div>
  );
};

export default Sidebar;
