"use client";
import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
const Logo = ({ isTrigger = false, onClickClose = () => {} }: { isTrigger?: boolean; onClickClose?: () => void }) => {
  const { push } = useRouter();
  const clickLogo = () => {
    push("/");
  };
  return (
    <div className="flex flex-row items-center gap-3">
      {isTrigger ? (
        <IconButton onClickIcon={onClickClose} icon={<IoMdClose size={30} />} />
      ) : (
        <IconButton onClickIcon={() => {}} icon={<RxHamburgerMenu size={24} />} />
      )}

      <Image onClick={clickLogo} className="cursor-pointer" width={100} height={30} alt="logo" src="/main-logo.svg" />
    </div>
  );
};

export default Logo;
