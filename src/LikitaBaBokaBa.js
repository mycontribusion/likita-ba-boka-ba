import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ArticleSection from "./components/ArticleSection";
import ArticlePage from "./pages/ArticlePage";
import AllArticlesPage from "./pages/AllArticlesPage";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import AboutPage from "./pages/AboutPage";


const LikitaBaBokaBa = () => {
  return (
    <div className="app">
      <Header />

      <main style={{ minHeight: "70vh" }}>
        <Routes>
          {/* ✅ Use index route for homepage */}
          <Route path="/*" element={<HomePage />} />
          <Route path="/articles" element={<AllArticlesPage />} />
          <Route path="/categories" element={<AllCategoriesPage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Optional 404 fallback */}
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>Shafin bai samu ba 😅</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default LikitaBaBokaBa;
