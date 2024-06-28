import React from "react";

const PagePadding = ({ children }: { children: React.ReactNode }) => {
  return <div className="py-2 px-[10px] mx-auto lg:px-[100px]">{children}</div>;
};

export default PagePadding;
