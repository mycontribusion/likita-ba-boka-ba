

const CategoryCard = ({ category, onFilter }) => {
  return (
    <div 
      className="category-card" 
      onClick={() => onFilter(category.filterKey)} // Use filterKey for action
    >
      <div className="category-icon">{category.icon}</div>
      <h3 className="category-title">{category.title}</h3>
      <p className="category-count">{category.count} labarai</p>
    </div>
  );
};

export default CategoryCard;