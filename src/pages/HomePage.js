import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ArticleSection from "../components/ArticleSection";
import CategorySection from "../components/CategorySection";

import articlesData from "../data/articles";
import categoriesData from "../data/categories";

const HomePage = ({ onSelectArticle }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setSelectedCategory(null);
  };

  const filteredArticles = articlesData.filter(a => {
    const title = a.title ? a.title.toLowerCase() : "";
    const content = a.content ? a.content.toLowerCase() : "";
    return title.includes(searchTerm) || content.includes(searchTerm);
  });

  return (
    <div>
      <HeroSection onSearch={handleSearch} />

      {!selectedCategory && searchTerm === "" && (
        <ArticleSection
          articles={filteredArticles.slice(0, 5)} // recent 5 articles
          onSelectArticle={onSelectArticle}
        />
      )}

      <CategorySection
        categories={categoriesData}
        selectedCategory={selectedCategory}
        onSelectCategory={(name) => setSelectedCategory(name)}
        onSelectArticle={onSelectArticle}
      />
    </div>
  );
};

export default HomePage;
