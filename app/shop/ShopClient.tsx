"use client";

import { useMemo, useState } from "react";
import { categories, products, type CategorySlug } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type Filter = "all" | CategorySlug;

export default function ShopClient() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = filter === "all" || product.category === filter;
      const textMatch = !normalized || [product.name, product.subcategory, product.summary, ...product.bestFor]
        .join(" ").toLowerCase().includes(normalized);
      return categoryMatch && textMatch;
    });
  }, [query, filter]);

  return (
    <>
      <div className="shop-controls">
        <label className="search-field">
          <span>Search recommendations</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try acne, glow, heat styling…" />
        </label>
        <div className="filter-row" aria-label="Filter products by category">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          {categories.map((category) => (
            <button key={category.slug} className={filter === category.slug ? "active" : ""} onClick={() => setFilter(category.slug)}>{category.name}</button>
          ))}
        </div>
      </div>
      <p className="results-count">Showing {filtered.length} recommendation{filtered.length === 1 ? "" : "s"}</p>
      <div className="product-grid">
        {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
      {filtered.length === 0 && <div className="empty-state"><h2>No exact match yet</h2><p>Try a broader term or switch back to All.</p></div>}
    </>
  );
}
