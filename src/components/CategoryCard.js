import React from 'react';

const CategoryCard = ({ category, isSelected, onSelectCategory }) => {
  return (
    <div
      className={`category-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectCategory(category.name)} // pass the name
    >
      <div className="icon">{category.icon}</div>
      <div className="category-title">{category.name}</div>
      <div className="category-count">{category.count} labarai</div>
    </div>
  );
};

export default CategoryCard;
