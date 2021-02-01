import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import AddMore from "../components/AddMore";

let defaultImage = "/images/default.png";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uhray Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.card_container}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard
              key={article._id}
              image={article.image_url ? article.image_url : defaultImage}
              title={article.title}
              text={article.text}
              date={article.date}
            />
          ))
        ) : (
          <h3>No articles to show, click the button to add one!</h3>
        )}
        <AddMore />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.ARTICLE_CONNECTION_HOST}/api/articles`
  );
  const json = await res.json();

  return {
    props: {
      articles: json,
    },
    revalidate: 1,
  };
}
