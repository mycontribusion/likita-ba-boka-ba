import React from 'react';

// Safety Fix: Provide a default empty function for onCardClick
const ArticleCard = ({ article, onCardClick = () => {} }) => { 
    const { icon, category, title, excerpt, date, views } = article;
    
    return (
        // Plain CSS classes used
        <div 
            className="article-card" 
            onClick={onCardClick}
        >
            <div className="article-image">{icon}</div>
            <div className="article-content">
                <span className="article-category">
                    {category}
                </span>
                <h3 className="article-title">
                    {title}
                </h3>
                <p className="article-excerpt">
                    {excerpt}
                </p>
                <div className="article-meta">
                    <span className="meta-item">
                        <span role="img" aria-label="date">📅</span> {date}
                    </span>
                    <span className="meta-item">
                        <span role="img" aria-label="views">👁️</span> {views} masu karanta
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
