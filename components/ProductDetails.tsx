"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Minus,
  Plus,
  ArrowLeft,
  Star,
} from "lucide-react";
import { Product, products } from "@/lib/products";
import { useCart } from "./CartProvider";
import ProductCard from "./ProductCard";

export default function ProductDetails({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] =
    useState(0);

  const [selectedSize, setSelectedSize] =
    useState(product.sizes[0]);

  const [quantity, setQuantity] = useState(1);

  const [liked, setLiked] = useState(false);

  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(
      product.id,
      selectedSize,
      quantity
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  const related = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="product-page">
      <div className="product-breadcrumb">
        <Link href="/shop">
          <ArrowLeft size={15} />
          Back to shop
        </Link>
      </div>

      <div className="product-layout">
        <div className="product-gallery">
          <div className="thumbnail-list">
            {product.images.map((image, index) => (
              <button
                key={image}
                className={
                  selectedImage === index
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() =>
                  setSelectedImage(index)
                }
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />
              </button>
            ))}
          </div>

          <div className="main-product-image">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
            />
          </div>
        </div>

        <div className="product-details">
          <p className="eyebrow">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="rating">
            <div>
              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill={
                      index <
                      Math.round(product.rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                )
              )}
            </div>

            <span>
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="detail-price">
            ₹{product.price.toLocaleString("en-IN")}

            {product.originalPrice && (
              <del>
                ₹
                {product.originalPrice.toLocaleString(
                  "en-IN"
                )}
              </del>
            )}
          </div>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-divider" />

          <div className="size-header">
            <span>Size</span>

            <button>Size guide</button>
          </div>

          <div className="size-grid">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={
                  selectedSize === size
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>
            ))}
          </div>

          <div className="detail-stock">
            <span className="stock-dot" />
            Only {product.stock} left in stock
          </div>

          <div className="quantity-row">
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity(
                    Math.max(1, quantity - 1)
                  )
                }
              >
                <Minus size={16} />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(
                    Math.min(
                      product.stock,
                      quantity + 1
                    )
                  )
                }
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              className="wishlist-large"
              onClick={() => setLiked(!liked)}
            >
              <Heart
                size={19}
                fill={
                  liked ? "currentColor" : "none"
                }
              />
            </button>
          </div>

          <button
            className="add-cart-button"
            onClick={handleAdd}
          >
            {added ? "Added to bag ✓" : "Add to bag"}
          </button>

          <div className="product-info-block">
            <div>
              <span>Shipping</span>
              <p>
                Free shipping over ₹2,999.
                Delivered in 3–5 business days.
              </p>
            </div>

            <div>
              <span>Returns</span>
              <p>
                Easy 14-day returns on unworn items.
              </p>
            </div>

            <div>
              <span>Material</span>
              <p>
                Premium materials selected for
                everyday durability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related-products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOU MAY ALSO LIKE</p>
              <h2>Complete the look</h2>
            </div>
          </div>

          <div className="product-grid">
            {related.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}