import React from "react";
import Article from "./article";

const ListOfArticles = ({ filteredArticle, onArticleClick }) => { // Update prop name from articlesList to filteredArticle
  const list = filteredArticle.map((article, key) => { // Use filteredArticle instead of articlesList
    return (
      <Article key={key} article={article} onArticleClick={onArticleClick} />
    );
  });
  console.log(filteredArticle); // Update console.log to use filteredArticle
  return <ul>{list}</ul>;
};

export default ListOfArticles;
