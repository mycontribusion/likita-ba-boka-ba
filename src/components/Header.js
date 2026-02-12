import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/favicon.ico" alt="Likita Ba Boka Ba Logo" />
            <h1>Likita Ba Boka Ba</h1>
          </Link>

          <div className="header-right">
            <nav className="main-nav mobile-nav-hidden">
              <ul>
                <li><Link to="/">Gida</Link></li>
                <li><Link to="/articles">Labarai</Link></li>
                <li><Link to="/categories">Rukunai</Link></li>
                <li><Link to="/about">Game da Mu</Link></li>
              </ul>
            </nav>

            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              title={isDarkMode ? "Koma Yanayin Haske" : "Koma Yanayin Duhu"}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
