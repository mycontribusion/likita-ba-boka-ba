import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="header-brand-group">
            <Link to="/" className="logo-img-link">
              <img src="/favicon.ico" alt="Likita Ba Boka Ba Logo" />
            </Link>

            <Link to="/" className="logo-text-link">
              <h1>Likita Ba Boka Ba</h1>
            </Link>

            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              title={isDarkMode ? "Koma Yanayin Haske" : "Koma Yanayin Duhu"}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <nav className="main-nav desktop-nav mobile-nav-hidden">
            <ul>
              <li><Link to="/">Gida</Link></li>
              <li><Link to="/articles">Labarai</Link></li>
              <li><Link to="/categories">Rukunai</Link></li>
              <li><Link to="/about">Game da Mu</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
