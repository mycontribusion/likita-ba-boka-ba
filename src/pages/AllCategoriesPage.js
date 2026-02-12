
import React from "react";
import CategorySection from "../components/CategorySection";
import categoriesData from "../data/categories";

const AllCategoriesPage = () => {
  return (
    <div className="container">
      <h2 className="section-title">Duk Rukunai</h2>
      <CategorySection categories={categoriesData} showTitle={false} />
    </div>
  );
};

export default AllCategoriesPage;
