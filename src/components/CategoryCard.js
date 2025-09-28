import React from 'react';

const CategoryCard = ({ category, onSelectCategory, isSelected }) => {
  const handleClick = () => {
    onSelectCategory(category.name);
  };

  return (
    <div
      className={`category-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="icon">{category.icon}</div>
      <h3>{category.name}</h3>
      <p>{category.count} Labarai</p>
    </div>
  );
};

export default CategoryCard;
