import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/articles");
  const json = await res.json();

  return {
    props: {
      data: json,
    },
  };
}
export default Home;
