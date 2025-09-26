
import React from 'react';
import ArticleCard from './ArticleCard'; // Import the reusable ArticleCard

const ArticlesSection = ({ articles, onOpenArticle }) => {
  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <h2 className="section-title">Sabbin Labarai</h2>
        <div className="articles-grid" id="articlesGrid">
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard 
                key={article.id} // Important for React list rendering
                article={article} 
                onOpenArticle={onOpenArticle} 
              />
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%', color: '#718096' }}>Babu labarai da suka dace da bincikenka.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;