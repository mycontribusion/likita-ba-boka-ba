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
    const title = (a.title || "").toLowerCase();
    const content = (a.fullContent || "").toLowerCase();
    const category = (a.category || "").toLowerCase();
    return (
      title.includes(searchTerm) ||
      content.includes(searchTerm) ||
      category.includes(searchTerm)
    );
  });

  return (
    <div>
      <HeroSection onSearch={handleSearch} />

      {searchTerm ? (
        <div className="search-results container">
          {/*
          <h3 align="center"  style={{ fontSize:"0.7em", color:"white", fontWeight:"lighter"}}>
            Sakamakon Bincike: “{searchTerm}”
          </h3>*/}

          {filteredArticles.length > 0 ? (
            <ArticleSection
              articles={filteredArticles}
              showExcerpt={true}
            />
          ) : (
            <p>Babu sakamako da ya dace.</p>
          )}
        </div>
      ) : (
        <>
          <ArticleSection
            articles={articlesData.slice(0, 5)}
            onSelectArticle={onSelectArticle}
          />
          <CategorySection
            categories={categoriesData}
            selectedCategory={selectedCategory}
            onSelectCategory={(name) => setSelectedCategory(name)}
            onSelectArticle={onSelectArticle}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
