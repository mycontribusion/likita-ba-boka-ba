import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleSection = ({ articles, onSelectArticle }) => {
  return (
    <section className="articles-section">
      <div className="container">
        <h2 className="section-title">Sabbin Labarai</h2>
        <div className="articles-grid">
          {articles.map(article => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => onSelectArticle(article)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
