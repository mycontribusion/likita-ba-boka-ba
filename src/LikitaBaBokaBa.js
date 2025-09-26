
import React, { useState, useEffect } from 'react';
import { articlesData, categoriesData } from './data/articles'; // Import data
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArticlesSection from './components/ArticlesSection';
import CategoriesSection from './components/CategoriesSection';
import Footer from './components/Footer';

// The main component manages the data and filtering logic
function LikitaBaBokaBa() {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle Search from HeroSection
  const handleSearch = (term) => {
    const lowerCaseTerm = term.toLowerCase();
    setSearchTerm(lowerCaseTerm);
    
    // Filter articles based on title or excerpt
    const results = articlesData.filter(article =>
      article.title.toLowerCase().includes(lowerCaseTerm) ||
      article.excerpt.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredArticles(results);
  };

  // The existing openArticle logic (simplified with an alert)
  const openArticle = (id) => {
    const article = articlesData.find(a => a.id === id);
    if (article) {
      alert(`${article.title}\n\n${article.excerpt}\n\n[Wannan shine misali na labarin...]`);
    }
  };

  // Note: The original filter logic was complex and transient (reset after 3s).
  // In React, you'd typically implement a persistent filter.

  return (
    <div className="app-container"> {/* Your existing body/container styles apply here */}
      <Header />
      <HeroSection onSearch={handleSearch} /> {/* Pass the search handler down */}
      
      <ArticlesSection 
        articles={filteredArticles} // Pass the filtered data to the section
        onOpenArticle={openArticle} 
      />
      
      <CategoriesSection 
        categories={categoriesData} 
        onFilter={() => alert("Filter logic would be implemented here in a real app!")} 
      />
      
      <Footer />
    </div>
  );
}

export default LikitaBaBokaBa;