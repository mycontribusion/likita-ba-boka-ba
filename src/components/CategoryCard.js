import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`} style={{ textDecoration: "none" }}>
      <div className="category-card">
        <div className="category-title">{category.name}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
