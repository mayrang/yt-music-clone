"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PagePadding from "./PagePadding";
import { FaChromecast, FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "./Logo";
import Navigator from "./Navigator";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";
import UserIcon from "./UserIcon";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <nav className=" w-[240px] border-r-[1px] border-neutral-400">
          <div className="p-[24px]">
            <Logo
              isTrigger={isOpen}
              onClickClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <div>
            <Navigator />
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const { homeImgSrc } = useUIState();
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledValue = headRef?.current?.scrollTop;
      console.log("test", scrolledValue);
      setIsScrolled(scrolledValue !== 0);
    };

    headRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      headRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="relative overflow-y-auto w-full h-full" ref={headRef}>
      <section className="absolute top-0 h-[400px] w-full">
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src={homeImgSrc === "" ? "https://images.unsplash.com/photo-1707833558984-3293e794031c" : homeImgSrc}
            fill
            alt="back media image"
          />
        </div>
        <div className="h-full top-0 absolute opacity-40  w-full bg-black"></div>
        <div className="h-full top-0 absolute   w-full bg-gradient-to-t from-black"></div>
      </section>
      <section className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
        <PagePadding>
          <div className=" flex flex-row items-center justify-between w-full h-[66px]">
            <article className="hidden lg:flex flex-row items-center min-w-[480px] rounded-lg px-[16px] gap-[16px] border-neutral-600 border-[1px] bg-black/15 h-[40px]">
              <div className="opacity-100">
                <FiSearch size={24} />
              </div>
              <input placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" className="w-full h-full bg-transparent " />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden block">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex items-center gap-6">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
