import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`} style={{ textDecoration: "none" }}>
      <div className="category-card">
        <div className="category-icon">{category.icon}</div>
        <div className="category-title">{category.name}</div>
        <div className="category-description">{category.description}</div>
        <div className="category-count">{category.count} Labarai</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
