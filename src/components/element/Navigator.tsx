"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlaylistNav from "./PlaylistNav";

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      { label: "홈", icon: <GoHome size={24} />, href: "/", isActive: pathname === "/" },
      { label: "둘러보기", icon: <FiCompass size={24} />, href: "/explore", isActive: pathname === "/explore" },
      { label: "보관함", icon: <FiMusic size={24} />, href: "/library", isActive: pathname === "/library" },
    ];
  }, [pathname]);
  return (
    <div>
      <section className="flex flex-col gap-2 p-4 text-[16px]">
        {routes.map((route: { label: string; icon: React.ReactNode; href: string; isActive: boolean }) => (
          <Link
            className={cn(
              "flex flex-row gap-3 items-center p-2 hover:bg-neutral-700 rounded-xl",
              route.isActive && "bg-neutral-800"
            )}
            href={route.href}
            key={route.label}
          >
            {route.icon}
            <span>{route.label}</span>
          </Link>
        ))}
      </section>
      <section className="px-4 ">
        <div className="h-[1px] w-full bg-neutral-600"></div>
      </section>
      <section className="px-4 ">
        <div className="flex font-[200] flex-row items-cewnter justify-center rounded-3xl bg-neutral-800 my-6 p-3 hover:bg-neutral-700">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
      <section>
        <ul className="flex flex-col">
          {dummyPlaylistArray.map((playlist) => (
            <PlaylistNav playlist={playlist} key={playlist.id} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Navigator;
