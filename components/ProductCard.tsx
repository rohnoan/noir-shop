"use client";

import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { Product } from "@/lib/products";
import { useState } from "react";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image"
          />
        </Link>

        {product.bestseller && (
          <span className="product-badge">
            Bestseller
          </span>
        )}

        <button
          className={`wishlist ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label="Add to wishlist"
        >
          <Heart
            size={18}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        <Link
          href={`/product/${product.slug}`}
          className="quick-view"
        >
          View product
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="product-info">
        <div>
          <p className="product-category">
            {product.category}
          </p>

          <Link
            href={`/product/${product.slug}`}
            className="product-name"
          >
            {product.name}
          </Link>
        </div>

        <div className="product-price">
          <span>₹{product.price.toLocaleString("en-IN")}</span>

          {product.originalPrice && (
            <del>
              ₹
              {product.originalPrice.toLocaleString(
                "en-IN"
              )}
            </del>
          )}
        </div>
      </div>
    </article>
  );
}