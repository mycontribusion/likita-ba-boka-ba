import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticleSection from "../components/ArticleSection";
import articlesData from "../data/articles";

const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const filteredArticles = articlesData.filter(a => a.category === name);

  const handleSelectArticle = (article) => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="container">
      <h2 className="section-title">{name}</h2>
      <ArticleSection
        articles={filteredArticles}
        onSelectArticle={handleSelectArticle}
        showExcerpt={false} // only show titles
      />
    </div>
  );
};

export default CategoryPage;
