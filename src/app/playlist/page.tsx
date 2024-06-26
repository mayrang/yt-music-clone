import React from "react";

const page = (props: { searchParams: { list: string } }) => {
  return <div>playlist/{props.searchParams.list}</div>;
};

export default page;
