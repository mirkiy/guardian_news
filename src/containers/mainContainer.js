import React, { useEffect, useState } from "react";
import ListOfArticles from "../components/listOfArticles";
import Article from "../components/article";

const MainContainer = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

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

  const onArticleClick = (article) => {
    setSelectedArticle(article);
  }

  return (
    <>
      <h2> hello from the main container</h2>
      <ListOfArticles articlesList={articlesList} onArticleClick={onArticleClick}/>
      {/* {selectedArticle ? <Article selectedArticle={selectedArticle}/> : null} */}
      {/* <Article /> */}
    </>
  );
};

export default MainContainer;
