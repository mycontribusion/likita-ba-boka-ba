import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticleSection from "../components/ArticleSection";
import articlesData from "../data/articles";

const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const filteredArticles = articlesData.filter(article => {
    const category = article.category;

    // If category is an array (e.g. ["Cututtuka", "Ruwa"])
    if (Array.isArray(category)) {
      return category.some(
        c => c.toLowerCase() === name.toLowerCase()
      );
    }

    // If category is a string (possibly comma-separated)
    if (typeof category === "string") {
      return category
        .split(",")
        .map(c => c.trim().toLowerCase())
        .includes(name.toLowerCase());
    }

    return false;
  });

  const handleSelectArticle = (article) => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="container">
      <h2 className="section-title">{name}</h2>

      <ArticleSection
        articles={filteredArticles}
        onSelectArticle={handleSelectArticle}
        showExcerpt={true}
      />

      {filteredArticles.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "1rem", color: "#666" }}>
          Babu labarai a wannan rukuni tukuna.
        </p>
      )}

    </div>
  );
};

export default CategoryPage;
