import React from 'react';
import './FullArticleView.css';

const FullArticleView = ({ article, onBack }) => {
  if (!article) return null;

  // Split content into paragraphs (for better formatting)
  const paragraphs = article.fullContent
    ?.trim()
    .split('\n')
    .filter(p => p.length > 0);

  return (
    <div className="full-article-container">
      {/* Back Button */}
      <div className="article-header-wrapper">
        <button className="back-button" onClick={onBack}>
          ← Komawa
        </button>
      </div>

      {/* Title */}
      <h2 className="article-full-title">{article.title}</h2>

      {/* Meta Info (optional) */}
      <div className="article-meta-full">
        <span>{article.category}</span>
        <span>{article.date}</span>
        <span>{article.views} karatu</span>
      </div>

      <hr className="article-divider" />

      {/* Content */}
      <div className="article-body">
        {paragraphs.map((para, index) => {
          // Detect Markdown-like subheadings (###)
          if (para.trim().startsWith('###')) {
            return (
              <h3 key={index} className="article-subheading">
                {para.replace('###', '').trim()}
              </h3>
            );
          }

          // Detect lists (start with "- " or "* ")
          if (para.trim().startsWith('-') || para.trim().startsWith('*')) {
            return (
              <p key={index} className="article-list-item">
                {para.replace(/^[-*]\s*/, '')}
              </p>
            );
          }

          // Normal paragraph
          return (
            <p key={index} className="article-paragraph">
              {para}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FullArticleView;
