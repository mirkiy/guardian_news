import React, { useState } from "react";

const Article = ({ article, onArticleClick }) => {
  const [selected, setSelected] = useState(false);

  const dateString = article.webPublicationDate;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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
        {selected && (
          <>
            {" "}
            <span>{article.webTitle}</span>
            <span> {formattedDate}</span>
            <li>
              <a href="">{article.webUrl}</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Article;
