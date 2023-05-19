import React from "react";

const Article = ({ article, onArticleClick }) => {
  if (!article || !article.sectionName) {
    return <li>No article available</li>;
  }

  const handleClick = () => {
    onArticleClick(article);
  };

  return <li onClick={handleClick}> {article.sectionName}</li>;
};

export default Article;
