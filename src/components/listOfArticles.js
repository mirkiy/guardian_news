import React from "react";
import Article from "./article";

const ListOfArticles = ({ filteredArticle, onArticleClick }) => {
  const list = filteredArticle.map((article, key) => {
    return (
      <Article key={key} article={article} onArticleClick={onArticleClick} />
    );
  });

  return (
    <div className="listOfArticles">
      <h3>All Sections:</h3>

      <ul>{list}</ul>
    </div>
  );
};

export default ListOfArticles;
