import React from 'react';
import './FullArticleView.css';

const FullArticleView = ({ article, onBack, onNavigate, hasNext, hasPrev }) => {
  if (!article) return null;

  // Split content for better formatting
  const paragraphs = article.fullContent
    ?.trim()
    .split('\n')
    .filter(p => p.length > 0);

  return (
    <div className="full-article-container">
      {/* Back Button 
      <div className="article-header-wrapper">
        <button className="back-button" onClick={onBack}>
          ← Komawa
        </button>
      </div>*/}

      {/* Title */}
      <h2 className="article-full-title">{article.title}</h2>

      {/* Meta Info */}
      <div className="article-meta-full">
        <span>{article.category}</span>
        <span>{article.date}</span>
        <span>{article.views} karatu</span>
      </div>

      <hr className="article-divider" />

      {/* Content */}
      <div className="article-body">
        {paragraphs.map((para, index) => {
          if (para.trim().startsWith('###')) {
            return (
              <h3 key={index} className="article-subheading">
                {para.replace('###', '').trim()}
              </h3>
            );
          }

          if (para.trim().startsWith('-') || para.trim().startsWith('*')) {
            return (
              <p key={index} className="article-list-item">
                {para.replace(/^[-*]\s*/, '')}
              </p>
            );
          }

          return (
            <p key={index} className="article-paragraph">
              {para}
            </p>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="article-navigation">
        {hasPrev && (
          <button
            className="nav-btn prev-btn"
            onClick={() => onNavigate('prev')}
          >
            ← Labari Na Baya
          </button>
        )}
        {hasNext && (
          <button
            className="nav-btn next-btn"
            onClick={() => onNavigate('next')}
          >
            Labari Na Gaba →
          </button>
        )}
      </div>
    </div>
  );
};

export default FullArticleView;
