import React, { useState, useEffect } from 'react';
// 1. All component imports must come first (reordered to the top)
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArticlesSection from './components/ArticlesSection';
import CategoriesSection from './components/CategoriesSection';
import Footer from './components/Footer';
import FullArticleView from './components/FullArticleView';

// 2. Import the data module (Default Import)
import DataModule from './data/articlesData'; 

// 3. Destructure the required arrays from the imported DataModule object
const { articlesData, categoriesData } = DataModule;


// The main component manages the data, filtering, and view state
function LikitaBaBokaBa() {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for conditional rendering of the full article view
  const [selectedArticle, setSelectedArticle] = useState(null); 

  // Function to handle Search from HeroSection
  const handleSearch = (term) => {
    // If the full article view is active, close it first
    if (selectedArticle) {
        setSelectedArticle(null);
    }
    
    const lowerCaseTerm = term.toLowerCase();
    setSearchTerm(lowerCaseTerm);
    
    // Filter articles based on title or excerpt
    const results = articlesData.filter(article =>
      article.title.toLowerCase().includes(lowerCaseTerm) ||
      article.excerpt.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredArticles(results);
  };

  // HANDLER: Sets the state to display the full article
  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  // HANDLER: Resets the state to return to the list view
  const handleCloseArticle = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0); 
  };


  // ----------------------------------------------------------------------
  // CONDITIONAL RENDERING LOGIC
  // ----------------------------------------------------------------------

  return (
    <div className="app-container">
      <Header />

      {selectedArticle ? (
        // RENDER 1: If an article is selected, show the full content
        <FullArticleView 
          article={selectedArticle} 
          onClose={handleCloseArticle} 
        />
      ) : (
        // RENDER 2: If no article is selected, show the Home Page (Hero, List, Categories)
        <>
          <HeroSection onSearch={handleSearch} />
          
          <ArticlesSection 
            articles={filteredArticles} 
            onOpenArticle={handleOpenArticle} 
          />
          
          <CategoriesSection 
            categories={categoriesData} 
            onFilter={() => alert("Filter logic would be implemented here in a real app!")} 
          />
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default LikitaBaBokaBa;
