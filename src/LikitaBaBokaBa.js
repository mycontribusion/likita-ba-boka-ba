import React, { useState } from 'react';
import articlesData from './data/articles';
import categoriesData from './data/categories';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import ArticleSection from './components/ArticleSection';
import FullArticleView from './components/FullArticleView';
import Footer from './components/Footer';

const LikitaBaBokaBa = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setSelectedCategory(null);
    setSelectedArticle(null);
  };

  // 🟢 FILTER ARTICLES BASED ON CATEGORY OR SEARCH (SAFE VERSION)
const filteredArticles = articlesData.filter((a) => {
  const title = a.title ? a.title.toLowerCase() : '';
  const content = a.content ? a.content.toLowerCase() : '';
  const matchesCategory = selectedCategory ? a.category === selectedCategory : true;
  const matchesSearch =
    title.includes(searchTerm.toLowerCase()) || content.includes(searchTerm.toLowerCase());
  return matchesCategory && matchesSearch;
});


  return (
    <div className="app">
      <Header />
      <HeroSection onSearch={handleSearch} />

      {!selectedArticle ? (
        <>
        <ArticleSection
            articles={filteredArticles}
            onSelectArticle={setSelectedArticle}
          />
          <CategorySection
            categories={categoriesData}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
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
