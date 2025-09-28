import React from "react";
import './ArticleCard.css';

const ArticleCard = ({ article, onClick, showExcerpt = true }) => {
  return (
    <div className="article-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="icon">{article.icon}</div>
      <h3>{article.title}</h3>
      {showExcerpt && (
        <p>{(article.fullContent || "").slice(0, 120)}...</p>
      )}
    </div>
  );
};

export default ArticleCard;
