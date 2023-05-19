import React from "react";
import Article from "./article";

const ListOfArticles = ({ articlesList, onArticleClick }) => {
  const list = articlesList.map((article, key) => {
    return (
      <Article key={key} article={article} onArticleClick={onArticleClick} />
    );
  });
  console.log(articlesList);
  return <ul>{list}</ul>;
};

export default ListOfArticles;
