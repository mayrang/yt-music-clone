import Header from "@/components/element/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Header>{children}</Header>;
};

export default layout;
