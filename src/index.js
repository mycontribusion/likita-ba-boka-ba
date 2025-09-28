import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  </BrowserRouter>
);
