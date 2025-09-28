import React from 'react';

const ArticleCard = ({ article, onClick }) => {
  return (
    <div className="article-card" onClick={onClick}>
      {/* Article image area (uses emoji/icon as placeholder) */}
      <div className="article-image">
        <span>{article.icon || '📰'}</span>
      </div>

      {/* Article content */}
      <div className="article-content">
        <span className="article-category">{article.category}</span>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{(article.content || '').slice(0, 100)}...</p>

        <div className="article-meta">
          <span>{article.date}</span>
          <span>👁️ {article.views || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
