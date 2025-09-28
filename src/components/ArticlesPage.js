import React, { useState } from "react";
import articlesData from "../data/articles";
import ArticleSection from "./ArticleSection";
import FullArticleView from "./FullArticleView";
import './ArticlesPage';

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="articles-page">
      {!selectedArticle ? (
        <ArticleSection
          articles={articlesData} // you can add pagination here
          onSelectArticle={setSelectedArticle}
        />
      ) : (
        <FullArticleView
          article={selectedArticle}
          onBack={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
};

export default ArticlesPage;
