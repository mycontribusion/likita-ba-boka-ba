import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = ({ categories, showTitle = true }) => {
  return (
    <section className="categories">
      <div className="container">
        {showTitle && <h2 className="section-title">Rukunai</h2>}
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <CategoryCard key={index} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
