import React from 'react';

const ArticleCard = ({ article, onOpenArticle }) => {
  return (
    <div className="article-card" onClick={() => onOpenArticle(article.id)}>
      <div className="article-image">{article.icon}</div>
      <div className="article-content">
        <span className="article-category">{article.category}</span>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <span>📅 {article.date}</span>
          <span>👁️ {article.views} masu karanta</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;