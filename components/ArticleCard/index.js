import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
export default function ArticleCard({ image, title, text, date }) {
  return (
    <div className={styles.card}>
      {/* 
        I'm using the same image for all articles since the image src is unknown.
        But I did store the DB input as the alt text just to show that the data is there.

        Using unknown image urls will most likely be blocked by CORS.
        The nextjs image component also can't load assets from external sources
        unless that external source is listed in the next.js.config 
      */}
      <Image
        className={styles.card_image}
        src="/images/default.png"
        alt={image}
        layout="responsive"
        height={100}
        width={150}
      />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_text}>{text}</p>
      <p className={styles.card_date}>{date}</p>
    </div>
  );
}
