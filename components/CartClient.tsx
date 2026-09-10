"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function CartClient() {
  const {
    items,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const cartProducts = items.map((item) => ({
    item,
    product: products.find(
      (product) => product.id === item.productId
    ),
  }));

  const subtotal = cartProducts.reduce(
    (total, { item, product }) =>
      total + (product?.price || 0) * item.quantity,
    0
  );

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 2999
      ? 0
      : 149;

  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <section className="empty-cart">
        <p className="eyebrow">YOUR BAG</p>

        <h1>Your bag is empty.</h1>

        <p>
          Looks like you haven't added anything yet.
        </p>

        <Link
          href="/shop"
          className="button button-black"
        >
          Start shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-header">
        <div>
          <p className="eyebrow">YOUR BAG</p>
          <h1>Shopping bag</h1>
        </div>

        <span>
          {items.reduce(
            (total, item) => total + item.quantity,
            0
          )}{" "}
          items
        </span>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartProducts.map(({ item, product }) => {
            if (!product) return null;

            return (
              <div
                className="cart-item"
                key={`${item.productId}-${item.size}`}
              >
                <Link
                  href={`/product/${product.slug}`}
                  className="cart-image"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                  />
                </Link>

                <div className="cart-item-info">
                  <div>
                    <p className="product-category">
                      {product.category}
                    </p>

                    <h3>{product.name}</h3>

                    <p>Size: {item.size}</p>
                  </div>

                  <div className="cart-item-bottom">
                    <div className="quantity">
                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            item.size,
                            item.quantity - 1
                          )
                        }
                      >
                        <Minus size={14} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            item.size,
                            item.quantity + 1
                          )
                        }
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <strong>
                      ₹
                      {(
                        product.price * item.quantity
                      ).toLocaleString("en-IN")}
                    </strong>

                    <button
                      className="remove-item"
                      onClick={() =>
                        removeFromCart(
                          product.id,
                          item.size
                        )
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="cart-summary">
          <h2>Summary</h2>

          <div className="summary-line">
            <span>Subtotal</span>
            <span>
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="summary-line">
            <span>Shipping</span>
            <span>
              {shipping === 0
                ? "FREE"
                : `₹${shipping}`}
            </span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>

          <Link
            href="/checkout"
            className="checkout-button"
          >
            Proceed to checkout
          </Link>

          <Link href="/shop" className="continue-shopping">
            <ArrowLeft size={15} />
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}