import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import articlesData from "../data/articles";
import FullArticleView from "../components/FullArticleView";

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the index of the current article
  const currentIndex = articlesData.findIndex((a) => a.id === id);
  const article = articlesData[currentIndex];

  if (!article) return <p>Article not found</p>;

  // ✅ Safe back navigation
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // go back within app
    } else {
      navigate("/"); // fallback if opened directly
    }
  };

  // ✅ Next / Previous article navigation
  const handleNavigate = (direction) => {
    if (direction === "next" && currentIndex < articlesData.length - 1) {
      navigate(`/article/${articlesData[currentIndex + 1].id}`);
    } else if (direction === "prev" && currentIndex > 0) {
      navigate(`/article/${articlesData[currentIndex - 1].id}`);
    }
  };

  return (
    <FullArticleView
      article={article}
      onBack={handleBack}
      onNavigate={handleNavigate}
      hasNext={currentIndex < articlesData.length - 1}
      hasPrev={currentIndex > 0}
    />
  );
};

export default ArticlePage;
