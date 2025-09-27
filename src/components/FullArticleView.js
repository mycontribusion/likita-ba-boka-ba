

import './FullArticleView.css';

const FullArticleView = ({ article, onClose }) => {
    // Safety check for null article 
    if (!article) {
        return <div className="full-article-container">Babu Labarin da aka zaɓa (No article selected).</div>;
    }

    // Prepare content for display, splitting by newlines for paragraph rendering
    const contentToDisplay = article.fullContent || '';
    const paragraphs = contentToDisplay
        .trim()
        .split('\n') // Split by single new lines
        .filter(p => p.trim() !== ''); // Remove any resulting empty lines

    return (
        // Main container for the article page content
        <div className="full-article-container">
            
            <div className="article-header-wrapper">
                <button className="back-button" onClick={onClose}>
                    ← Koma Baya (Go Back)
                </button>
            </div>
            
            {/* Main Article Title */}
            <h1 className="article-full-title">{article.title}</h1>
            
            {/* Metadata (Category, Date, Views) */}
            <div className="article-meta-full">
                <span>Nau'i: {article.category}</span>
                <span>An buga: {article.date}</span>
                <span>👁️ {article.views} masu karanta</span>
            </div>
            
            <hr className="article-divider" />

            {/* Article Body */}
            <div className="article-body">
                {paragraphs.map((p, index) => {
                    // Check if the paragraph starts with a Markdown heading (#) to style it differently
                    if (p.startsWith('###')) {
                        // This assumes level 3 headings based on the data format provided
                        return <h3 key={index} className="article-subheading">{p.replace('###', '').trim()}</h3>;
                    }
                    
                    // Render as a standard paragraph
                    return <p key={index} className="article-paragraph">{p}</p>;
                })}
            </div>
        </div>
    );
};

export default FullArticleView;
