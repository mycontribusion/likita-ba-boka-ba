import './categorySection.css';
import CategoryCard from "./CategoryCard";

const CategorySection = ({
  categories,
  articles,
  selectedCategory,
  onSelectCategory,
  onSelectArticle,
}) => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Rukunin Labarai</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index}>
              {/* Category Card */}
              <CategoryCard
                category={cat}
                isSelected={selectedCategory === cat.name}
                onSelectCategory={() =>
                  onSelectCategory(
                    selectedCategory === cat.name ? null : cat.name
                  )
                }
              />

              {/* Show article titles under this category if selected */}
              {selectedCategory === cat.name && (
                <div className="category-articles">
                  {articles
                    .filter((a) => a.category === cat.name)
                    .map((article) => (
                      <p
                        key={article.id}
                        className="category-article-title"
                        onClick={() => onSelectArticle(article)}
                      >
                        {article.title}
                      </p>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
