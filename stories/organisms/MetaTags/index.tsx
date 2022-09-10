import Head from "next/head";
import React, { useMemo } from "react";
import { MetaData } from "utilities/meta-data";

interface Props {
  page?: string;
}

export default function MetaTags({ page = "home" }: Props) {
  let data = useMemo(() => MetaData[page], [page]);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
