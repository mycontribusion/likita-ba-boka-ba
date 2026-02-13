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
        <span className="full-view-cat-badge">{article.category}</span>
        {article.date && (
          <span className="article-date">
            📅 {new Date(article.date).toLocaleDateString('ha-NG', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) === 'Invalid Date'
              ? article.date
              : new Date(article.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
          </span>
        )}
        <button
          className="share-btn-premium"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: article.title,
                text: `Duba wannan labarin akan Likita Ba Boka: ${article.title}`,
                url: window.location.href,
              }).catch((err) => console.log('Error sharing:', err));
            } else {
              navigator.clipboard.writeText(window.location.href);
              const btn = document.querySelector('.share-btn-premium');
              const originalText = btn.innerHTML;
              btn.innerHTML = '✅ An Kwafo!';
              btn.classList.add('copied');
              setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('copied');
              }, 2000);
            }
          }}
          title="Raba wannan labarin"
        >
          <span>📤 Raba Labarin</span>
        </button>
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
