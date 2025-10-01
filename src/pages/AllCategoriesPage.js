
import React from "react";
import CategorySection from "../components/CategorySection";
import categoriesData from "../data/categories";

const AllCategoriesPage = () => {
  return (
    <div className="container">
      <CategorySection categories={categoriesData} />
    </div>
  );
};

export default AllCategoriesPage;
