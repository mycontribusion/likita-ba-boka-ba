import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            <h1>Likita Ba Boka Ba</h1>
          </div>

          <nav>
            <ul>
              {/* Gida now reloads homepage */}
              <li>
                <Link to="/">Gida</Link>
              </li>

              {/* Labarai goes to main page showing all posts */}
              <li>
                <Link to="articles">Labarai</Link>
              </li>

              {/* Rukunai goes to All Categories page */}
              <li>
                <Link to="/categories">Rukunai</Link>
              </li>

              {/* About section */}
              <li>
                <Link to="/about">Game da Mu</Link>
              </li>

              {/* Contact section */}
              <li>
                <a href="#contact">Tuntuɓe mu</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
