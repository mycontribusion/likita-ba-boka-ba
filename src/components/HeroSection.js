
import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchClick = () => {
    onSearch(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchInput);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h4>Maraba da zuwa Shafin</h4>
        <h2>LIKITA-BA-BOKA-BA</h2>
        <p>Wurin koyon ilimin kiwon lafiya da Hausa</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Nemi labarin lafiya..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search-btn" onClick={handleSearchClick}>🔍</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;