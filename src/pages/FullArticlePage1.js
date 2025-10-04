
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import articlesData from "../data/articles";
import FullArticleView from "../components/FullArticleView";

const FullArticlePage = () => {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === id);
  const navigate = useNavigate();

  if (!article) return <div>Article not found</div>;

  return <FullArticleView article={article} onBack={() => navigate(-1)} />;
};

export default FullArticlePage;
