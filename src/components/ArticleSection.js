// ArticleSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import './ArticleSection.css';

const ArticleSection = ({ articles, showExcerpt = true, showTitle = true }) => {
  const navigate = useNavigate();

  return (
    <section className="article-section">
      {showTitle && <h2>{showExcerpt ? "Sabbin Labarai" : "Labarai"}</h2>}
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => navigate(`/article/${article.id}`)}
            showExcerpt={showExcerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
