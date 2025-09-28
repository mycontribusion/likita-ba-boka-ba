import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import articlesData from "./data/articles";
import categoriesData from "./data/categories";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ArticleSection from "./components/ArticleSection";
import FullArticleView from "./components/FullArticleView";
import Footer from "./components/Footer";

const LikitaBaBokaBa = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="app">
      <Header />

      {!selectedArticle ? (
        <>
        {/* ✅ Add the Hero section */}
        <HeroSection />
          {/* Show 5 recent articles with excerpt */}
          <ArticleSection
            articles={articlesData.slice(0, 5)}
            onSelectArticle={handleSelectArticle}
            showExcerpt={true}
          />

          {/* Show categories */}
          <CategorySection
            categories={categoriesData}
          />
        </>
      ) : (
        <FullArticleView
          article={selectedArticle}
          onBack={() => setSelectedArticle(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default LikitaBaBokaBa;
