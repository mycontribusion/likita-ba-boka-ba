import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h4>Shafin Koyarwa Na Musamman</h4>
          <h2>LIKITA BA BOKA BA</h2>
          <p style={{ fontStyle: "italic" }}>Hanyar samun sahihin ilimin kiwon lafiya cikin harshen Hausa.</p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Nemi labaran lafiya..."
              value={searchInput}
              onChange={handleChange}
              aria-label="Search articles"
            />
            <button
              className="search-btn"
              onClick={() => onSearch(searchInput)}
              aria-label="Submit search"
            >
              <span className="search-icon">🔍</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
