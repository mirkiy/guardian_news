import React, { useEffect, useState } from "react";
import ListOfArticles from "../components/listOfArticles";
import Article from "../components/article";

const MainContainer = () => {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = () => {
    fetch(
      "https://content.guardianapis.com/search?q=brexit&format=json&api-key=test"
    )
      .then((response) => response.json())
      .then((data) => setArticlesList(data.response.results));
  };
  console.log(articlesList);

  return (
    <>
      <h2> hello from the main container</h2>
      <ListOfArticles articlesList={articlesList} />
      <Article />
    </>
  );
};

export default MainContainer;
