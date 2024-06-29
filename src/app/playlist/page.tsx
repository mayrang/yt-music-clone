import PagePadding from "@/components/element/PagePadding";
import React from "react";
import Category from "../playlist/_components/Category";

const page = () => {
  return (
    <PagePadding>
      <div className="mt-6"></div>
      <Category />
    </PagePadding>
  );
};

export default page;
