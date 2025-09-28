import React from 'react';
import './FullArticleView.css';

const FullArticleView = ({ article, onBack }) => {
  return (
    <div className="full-article">
      <button onClick={onBack}>← Komawa</button>
      <h2>{article.title}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{article.content}</p>
    </div>
  );
};

export default FullArticleView;
