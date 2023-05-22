import React, { useEffect, useState } from "react";
import ListOfArticles from "../components/listOfArticles";
import Article from "../components/article";
import Filter from "../components/filter";

const MainContainer = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filteredArticle, setFilteredArticle] = useState([])

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
    console.log(article);
    setSelectedArticle(article);
  };

  const filter = (searchTerm) => {
const lowerSearch = searchTerm.toLowerCase();
const filteredArticle = articlesList.filter((article) => {
return article.sectionName.toLowerCase().indexOf(lowerSearch) > -1;
 })
 setFilteredArticle(filteredArticle)
  }

  return (
    <>
      <h2>The Guardian News Headlines</h2>
      <Filter handleChange={filter} />
      <ListOfArticles
        articlesList={articlesList}
        onArticleClick={onArticleClick}
        filteredArticle = {filteredArticle}
      />
      {selectedArticle && <Article article={selectedArticle} />}
    </>
  );
};

export default MainContainer;
