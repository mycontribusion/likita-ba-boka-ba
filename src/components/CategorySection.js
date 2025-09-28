import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Rukunin Labarai</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <CategoryCard
              key={index}
              category={cat}
              isSelected={selectedCategory === cat.name}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
