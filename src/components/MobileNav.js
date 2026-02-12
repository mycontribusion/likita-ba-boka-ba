import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNav.css';

const MobileNav = () => {
    return (
        <nav className="mobile-bottom-nav">
            <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="nav-icon">🏠</span>
                <span className="nav-label">Gida</span>
            </NavLink>
            <NavLink to="/articles" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="nav-icon">📖</span>
                <span className="nav-label">Labarai</span>
            </NavLink>
            <NavLink to="/categories" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="nav-icon">🗂️</span>
                <span className="nav-label">Rukunai</span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="nav-icon">ℹ️</span>
                <span className="nav-label">Mu</span>
            </NavLink>
        </nav>
    );
};

export default MobileNav;
