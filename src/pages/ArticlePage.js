import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import articlesData from "../data/articles";
import FullArticleView from "../components/FullArticleView";

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articlesData.find((a) => a.id === id);

  if (!article) return <p>Article not found</p>;

  // ✅ Safe back navigation
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // Go back within the app
    } else {
      navigate("/"); // Fallback to home if opened directly
    }
  };

  return <FullArticleView article={article} onBack={handleBack} />;
};

export default ArticlePage;
