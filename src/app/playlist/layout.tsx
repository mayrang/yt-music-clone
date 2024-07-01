import React from "react";

const layout = async (props: { children: React.ReactNode }) => {
  console.log(props);
  return <div className="h-full w-full">{props.children}</div>;
};

export default layout;
