import Header from "@/components/element/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full w-full">{children}</div>;
};

export default layout;
