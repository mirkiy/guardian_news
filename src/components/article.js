import React, { useState } from "react";

const Article = ({ article, onArticleClick }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    if (!selected) {
      onArticleClick(article);
    } else {
      onArticleClick(null);
    }
  };

  return (
    <div>
      <ul onClick={handleClick}>
        {article.sectionName}
        {selected && <li>{article.webTitle} {article.webPublicationDate} {article.webUrl}</li>}
      </ul>
    </div>
  );
};

export default Article;

