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

  // Filter articles when a category is selected
  const filteredArticles = selectedCategory
    ? articlesData.filter(a => a.category === selectedCategory)
    : articlesData;

  return (
    <div className="app">
      <Header />
      <HeroSection />

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
