import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value); // 🔥 trigger live search update
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
            onChange={handleChange} // ✅ live update here
          />
          <button
            className="search-btn"
            onClick={() => onSearch(searchInput)} // still works manually
          >
            🔍
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
