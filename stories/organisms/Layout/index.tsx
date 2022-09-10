import React from "react";
import Header from "../Header";
import MetaTags from "../MetaTags";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
  page?: string;
};

export default function Layout({ children, page = "home" }: Props) {
  return (
    <>
      <MetaTags page={page} />
      <Header />
      <div className="pt-20">{children}</div>
    </>
  );
}
