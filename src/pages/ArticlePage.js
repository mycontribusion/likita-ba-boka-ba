import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import articlesData from "../data/articles";
import FullArticleView from "../components/FullArticleView";

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articlesData.find(a => a.id === id);

  if (!article) return <p>Article not found</p>;

  return (
    <FullArticleView
      article={article}
      onBack={() => navigate(-1)}
    />
  );
};

export default ArticlePage;
