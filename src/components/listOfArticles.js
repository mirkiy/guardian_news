import React from "react";
import Article from "./article";

const ListOfArticles = ({ articlesList, onArticleClick }) => {
  const list = articlesList.map((article, key) => {
    // return <p key={key}>{article.sectionName} </p>;
    return <Article key={key} article={article} onArticleClick={onArticleClick} />;
  });
//   console.log(articlesList);
  return (
    <ul>
      {/* <h3> hello from the list of articles</h3> */}
      {list}
    </ul>
  );
};

export default ListOfArticles;
