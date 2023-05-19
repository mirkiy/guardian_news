import React from "react";

const Article = ({article, onArticleClick}) => {

    const handleClick = () => {
        onArticleClick(article)
    }
  return <li onClick={handleClick}> {article.sectionName}</li>;
};

export default Article;
