import React from "react";
import { GetStaticProps } from "next";

interface Props {
  scrollTo: string;
}

const products = (props: Props) => {
  return (
    <div>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      scrollTo: "",
    },
  };
};

export default products;
