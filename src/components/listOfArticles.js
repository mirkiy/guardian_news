import React from "react";

const ListOfArticles = ({ articlesList }) => {
  const list = articlesList.map((article) => {
    return <p>{article.sectionName}</p>;
  });
  console.log(articlesList);
  return (
    <>
      <h3> hello from the list of articles</h3>
      {list}
    </>
  );
};

export default ListOfArticles;
