import { GetStaticProps } from "next";
import { AppProps } from "next/app";
import styles from "../styles/Home.module.scss";
import Layout from "stories/organisms/Layout";
import classNames from "classnames";

export default function Home(props: AppProps) {
  return (
    <Layout page="home">
      <div className={classNames(styles.home, "container mx-auto")}></div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
