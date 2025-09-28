import React from "react";
import ArticleCard from "./ArticleCard";
import './ArticleSection.css';

const ArticleSection = ({ articles, onSelectArticle, showExcerpt = true }) => {
  return (
    <section className="article-section">
      <h2>{showExcerpt ? "Sabbin Labarai" : "Labarai"}</h2>
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => onSelectArticle(article)}
            showExcerpt={showExcerpt} 
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
