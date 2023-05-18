import React, { useEffect, useState } from "react";

const MainContainer = () => {
  useEffect(() => {
    getArticles();
  }, []);
  const getArticles = () => {
    fetch(
      "https://content.guardianapis.com/search?q=brexit&format=json&api-key=test"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <h2> hello from the main container</h2>
    </>
  );
};

export default MainContainer;
