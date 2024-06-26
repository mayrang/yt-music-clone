import React from "react";
import Logo from "./element/Logo";
import Navigator from "./element/Navigator";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-full ">
      <nav className="w-[240px] border-r-[1px] border-neutral-400">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
