

import CategoryCard from './CategoryCard'; // Import the reusable CategoryCard

const CategoriesSection = ({ categories, onFilter }) => {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <h2 className="section-title">Nau'i-nau'in Labarai</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.filterKey} // Important for React list rendering
              category={category}
              onFilter={onFilter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;