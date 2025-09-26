

const FullArticleView = ({ article, onClose }) => {
    // If for some reason the full content is structured with markdown headings,
    // you might need a library to render it properly. For now, we use <pre> 
    // to preserve line breaks, or just basic <p> tags.
    
    // We'll split the content by new lines for cleaner rendering (recommended)
    const paragraphs = article.fullContent.trim().split('\n\n'); 

    return (
        <div className="full-article-container">
            <button className="back-button" onClick={onClose}>← Koma Baya (Go Back)</button>
            <h1 className="article-full-title">{article.title}</h1>
            <div className="article-meta-full">
                <span>Nau'i: {article.category}</span>
                <span>An buga: {article.date}</span>
                <span>👁️ {article.views} masu karanta</span>
            </div>
            
            <hr />

            <div className="article-body">
                {paragraphs.map((p, index) => (
                    // This handles paragraphs and basic headings (if formatted with #)
                    <p key={index} style={{ whiteSpace: 'pre-wrap' }}>{p.trim()}</p>
                ))}
            </div>
        </div>
    );
};

export default FullArticleView;