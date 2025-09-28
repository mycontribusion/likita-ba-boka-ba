import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = ({ categories }) => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Rukunai</h2>
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
