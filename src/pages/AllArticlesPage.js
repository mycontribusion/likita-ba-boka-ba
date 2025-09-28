import React, { useState } from "react";
import ArticleSection from "../components/ArticleSection";
import articlesData from "../data/articles";

const AllArticlesPage = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const paginatedArticles = articlesData.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container">
      <h2 className="section-title">Dukkan Labarai</h2>
      <ArticleSection articles={paginatedArticles} />
      {/* Add simple pagination buttons */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
        {page * perPage < articlesData.length && <button onClick={() => setPage(page + 1)}>Next</button>}
      </div>
    </div>
  );
};

export default AllArticlesPage;
