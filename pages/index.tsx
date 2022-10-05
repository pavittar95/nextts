import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import styles from "../styles/Home.module.scss";
import Layout from "stories/organisms/Layout";
import classNames from "classnames";
import HomeBanner from "stories/templates/Home/Banner";

export default function Home(props: AppProps) {
  return (
    <Layout page="home">
      <div className={classNames(styles.home, "container mx-auto")}>
        <HomeBanner />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
};