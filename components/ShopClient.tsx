"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/lib/products";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";

export default function ShopClient() {
  const searchParams = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "All";

  const [category, setCategory] =
    useState(initialCategory);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((product) => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(query)
          )
        );
      });
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, search, sort]);

  return (
    <section className="shop-page">
      <div className="shop-header">
        <div>
          <p className="eyebrow">NOIR / SHOP</p>

          <h1>Everything.</h1>

          <p className="shop-description">
            Designed essentials for everyday life.
          </p>
        </div>

        <div className="shop-count">
          {filteredProducts.length} products
        </div>
      </div>

      <div className="shop-controls">
        <div className="category-tabs">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item ? "active" : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="shop-tools">
          <div className="search-box">
            <Search size={17} />
            <input
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <button
            className="filter-button"
            onClick={() =>
              setShowFilters(!showFilters)
            }
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">
              Price: Low to high
            </option>
            <option value="price-high">
              Price: High to low
            </option>
            <option value="rating">
              Highest rated
            </option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div>
            <span>Category</span>

            <div className="filter-options">
              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item ? "selected" : ""
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="shop-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-search">
          <h2>No products found.</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </section>
  );
}