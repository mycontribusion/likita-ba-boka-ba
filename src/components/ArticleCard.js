import React from "react";
import './ArticleCard.css';

const ArticleCard = ({ article, onClick, showExcerpt = true }) => {
  const categories = Array.isArray(article.category) ? article.category : [article.category];

  return (
    <div className="article-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card-top">
        <div className="icon">{article.icon}</div>
        <div className="categories-badges">
          {categories.map((cat, idx) => (
            <span key={idx} className="cat-badge">{cat}</span>
          ))}
        </div>
      </div>
      <h3>{article.title}</h3>
      {showExcerpt && (
        <p>{(article.fullContent || "").replace(/#/g, '').slice(0, 120)}...</p>
      )}
    </div>
  );
};

export default ArticleCard;
