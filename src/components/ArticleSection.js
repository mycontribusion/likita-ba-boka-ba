// ArticleSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import './ArticleSection.css';

import categoriesData from "../data/categories";

const ArticleSection = ({ articles, showExcerpt = true, showTitle = true }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = React.useState("Duka");

  const filteredArticles = activeCategory === "Duka"
    ? articles
    : articles.filter(a => {
      const cats = Array.isArray(a.category) ? a.category : [a.category];
      return cats.includes(activeCategory);
    });

  return (
    <section className="article-section">
      {showTitle && <h2>{showExcerpt ? "Sabbin Labarai" : "Labarai"}</h2>}

      <div className="filter-bar">
        <button
          className={`filter-pill ${activeCategory === "Duka" ? "active" : ""}`}
          onClick={() => setActiveCategory("Duka")}
        >
          Duka
        </button>
        {categoriesData.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-pill ${activeCategory === cat.name ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="article-grid">
        {filteredArticles.map((article) => (
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
