import React, { useState } from "react";
import articlesData from "./data/articles";
import categoriesData from "./data/categories";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ArticleSection from "./components/ArticleSection";
import FullArticleView from "./components/FullArticleView";
import Footer from "./components/Footer";

const LikitaBaBokaBa = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setSelectedCategory(null);
    setSelectedArticle(null);
  };

  // 🔹 Filter articles by search term only (categories just expand dropdowns)
  const filteredArticles = articlesData.filter((a) => {
    const title = a.title ? a.title.toLowerCase() : "";
    const content = a.content ? a.content.toLowerCase() : "";
    return (
      title.includes(searchTerm) ||
      content.includes(searchTerm)
    );
  });

  return (
    <div className="app">
      <Header />
      <HeroSection onSearch={handleSearch} />

      {!selectedArticle ? (
        <>
          {/* 🔹 Recent articles first */}
          {searchTerm === "" && (
            <ArticleSection
              articles={filteredArticles.slice(0, 5)} // last 5 recent articles
              onSelectArticle={setSelectedArticle}
            />
          )}

          <CategorySection
            categories={categoriesData}
            articles={filteredArticles} // only show matching articles if searched
            selectedCategory={selectedCategory}
            onSelectCategory={(name) => setSelectedCategory(name)}
            onSelectArticle={setSelectedArticle}
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
