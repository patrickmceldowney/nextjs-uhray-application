import React, { useState, useEffect } from "react";

const ArticleCards = ({ articles }) => {
  useEffect(() => {
    setArticles();
  });

  const setArticles = () => {
    let title = articles.title;
    let image = articles.image;
    let text = articles.text;
  };

  return (
    <div className="article-card">
      <h5>{articles.title}</h5>
      <h5>{articles.text}</h5>
    </div>
  );
};

export default ArticleCards;
