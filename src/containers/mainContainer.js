import React, { useEffect, useState } from "react";
import ListOfArticles from "../components/listOfArticles";
import Article from "../components/article";
import Filter from "../components/filter";

const MainContainer = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filteredArticle, setFilteredArticle] = useState([]);
  const [sectionNames, setSectionNames] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    fetch(
      "https://content.guardianapis.com/search?q=brexit&format=json&api-key=test"
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.response.results;
        setArticlesList(results);
        const names = results.map((article) => article.sectionName);
        const uniqueNames = [...new Set(names)];
        setSectionNames(uniqueNames);
        setFilteredArticle(results);
      });
  };

  const onArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const filter = (searchTerm) => {
    const lowerSearch = searchTerm.toLowerCase();
    const filteredArticle = articlesList.filter((article) => {
      return article.sectionName.toLowerCase().indexOf(lowerSearch) > -1;
    });
    setFilteredArticle(filteredArticle);
  };

  return (
    <>
      <h2>The Guardian News Headlines</h2>
      <Filter handleChange={filter} />
      <ListOfArticles
        filteredArticle={filteredArticle}
        onArticleClick={onArticleClick}
      />
      {selectedArticle && <Article article={selectedArticle} onArticleClick={onArticleClick} />}
    </>
  );
};

export default MainContainer;
