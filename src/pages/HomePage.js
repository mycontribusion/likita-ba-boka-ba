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

  // 🟡 Highlight matched text in titles/excerpts
  const highlightMatch = (text, term) => {
    if (!term || !text) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  // 🟢 Filter articles based on search or category
  const filteredArticles = articlesData.filter((a) => {
    const title = a.title ? a.title.toLowerCase() : "";
    const content = a.content ? a.content.toLowerCase() : "";
    const category = a.category ? a.category.toLowerCase() : "";
    return (
      title.includes(searchTerm) ||
      content.includes(searchTerm) ||
      category.includes(searchTerm)
    );
  });

  // 🟢 If category selected, filter by it
  const categoryArticles = selectedCategory
    ? articlesData.filter((a) => a.category === selectedCategory)
    : [];

  return (
    <div>
      <HeroSection onSearch={handleSearch} />

      {/* Show normal homepage when nothing searched */}
      {!selectedCategory && searchTerm === "" && (
        <ArticleSection
          articles={articlesData.slice(0, 5)} // 5 recent articles
          onSelectArticle={onSelectArticle}
        />
      )}

      {/* Show category results */}
      {selectedCategory && (
        <ArticleSection
          articles={categoryArticles.map((article) => ({
            ...article,
            highlightedTitle: highlightMatch(article.title, searchTerm),
            highlightedExcerpt: highlightMatch(
              article.content?.slice(0, 120) + "...",
              searchTerm
            ),
          }))}
          onSelectArticle={onSelectArticle}
        />
      )}

      {/* Show search results */}
      {!selectedCategory && searchTerm !== "" && (
        <>
        {/* Show search results 
          <h2 style={{ textAlign: "center", margin: "30px 0", fontSize:"0.7em", color:"white" }}>
            Sakamakon bincike: “{searchTerm}”
          </h2>*/}
          {filteredArticles.length > 0 ? (
            <ArticleSection
              articles={filteredArticles.map((article) => ({
                ...article,
                highlightedTitle: highlightMatch(article.title, searchTerm),
                highlightedExcerpt: highlightMatch(
                  article.content?.slice(0, 120) + "...",
                  searchTerm
                ),
              }))}
              onSelectArticle={onSelectArticle}
              showExcerpt={true}
            />
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Ba a sami sakamako ba.
            </p>
          )}
        </>
      )}

      {/* Always show categories */}
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
