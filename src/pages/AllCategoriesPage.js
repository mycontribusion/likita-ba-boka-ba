
import React from "react";
import CategorySection from "../components/CategorySection";
import categoriesData from "../data/categories";

const AllCategoriesPage = () => {
  return (
    <div className="container">
      <h2 className="section-title"></h2>
      <CategorySection categories={categoriesData} />
      <h2></h2>
    </div>
  );
};

export default AllCategoriesPage;
