import React, { useState } from "react";
import ArticleSection from "../components/ArticleSection";
import articlesData from "../data/articles";

const AllArticlesPage = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const paginatedArticles = articlesData.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container">

      {/* Pass showExcerpt={false} to remove the "Sabbin Labarai" heading */}
      <ArticleSection articles={paginatedArticles} showExcerpt={false} />
      
      {/* Pagination */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
        {page * perPage < articlesData.length && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default AllArticlesPage;
