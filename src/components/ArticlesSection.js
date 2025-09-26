import React from 'react';
import ArticleCard from './ArticleCard'; 

// We destructure the 'articles' array and the 'onOpenArticle' handler from props.
const ArticlesSection = ({ articles, onOpenArticle = () => {} }) => {
    
    // Ensure 'articles' is an array before mapping to prevent runtime errors
    const articlesToDisplay = Array.isArray(articles) ? articles : [];

    // The handler calls the prop function provided by the parent (LikitaBaBokaBa)
    const handleCardClick = (article) => {
        onOpenArticle(article); 
    };

    return (
        <section className="articles-section" id="articles">
            <div className="container">
                <h2 className="section-title">Sabbin Labarai</h2>
                {articlesToDisplay.length === 0 ? (
                    <p className="no-results-message">
                        Babu labarai da suka dace da bincikenka.
                    </p>
                ) : (
                    <div className="articles-grid" id="articlesGrid">
                        {articlesToDisplay.map((article) => ( 
                            <ArticleCard 
                                key={article.id} 
                                article={article} 
                                // Call the handler, passing the article object when the card is clicked
                                onCardClick={() => handleCardClick(article)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ArticlesSection;
