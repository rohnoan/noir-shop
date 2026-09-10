"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function CheckoutClient() {
  const router = useRouter();

  const { items, clearCart } = useCart();

  const [loading, setLoading] = useState(false);

  const subtotal = items.reduce(
    (total, item) => {
      const product = products.find(
        (p) => p.id === item.productId
      );

      return (
        total +
        (product?.price || 0) * item.quantity
      );
    },
    0
  );

  const shipping =
    subtotal >= 2999 ? 0 : subtotal === 0 ? 0 : 149;

  const total = subtotal + shipping;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const orderNumber =
      "NR-" +
      Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    localStorage.setItem(
      "noir-last-order",
      JSON.stringify({
        orderNumber,
        total,
        createdAt: new Date().toISOString(),
      })
    );

    setTimeout(() => {
      clearCart();
      router.push("/order-success");
    }, 1200);
  }

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <p className="eyebrow">CHECKOUT</p>

        <h1>Your bag is empty.</h1>

        <p>Add products before checking out.</p>
      </div>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <p className="eyebrow">NOIR CHECKOUT</p>

        <h1>Complete your order.</h1>
      </div>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <div className="checkout-section">
            <h2>Contact</h2>

            <input
              type="email"
              placeholder="Email address"
              required
            />
          </div>

          <div className="checkout-section">
            <h2>Delivery</h2>

            <div className="two-inputs">
              <input
                placeholder="First name"
                required
              />

              <input
                placeholder="Last name"
                required
              />
            </div>

            <input
              placeholder="Address"
              required
            />

            <div className="two-inputs">
              <input
                placeholder="City"
                required
              />

              <input
                placeholder="Postal code"
                required
              />
            </div>

            <input
              placeholder="Phone number"
              required
            />
          </div>

          <div className="checkout-section">
            <h2>Payment</h2>

            <div className="fake-payment">
              <Lock size={17} />

              <span>
                Secure payment simulation
              </span>

              <small>
                No real payment will be processed.
              </small>
            </div>

            <input
              placeholder="Card number"
              inputMode="numeric"
              required
            />

            <div className="two-inputs">
              <input
                placeholder="MM / YY"
                required
              />

              <input
                placeholder="CVV"
                required
              />
            </div>
          </div>

          <button
            className="checkout-button"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : `Place order · ₹${total.toLocaleString(
                  "en-IN"
                )}`}
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order summary</h2>

          {items.map((item) => {
            const product = products.find(
              (p) => p.id === item.productId
            );

            if (!product) return null;

            return (
              <div
                className="checkout-product"
                key={`${item.productId}-${item.size}`}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                />

                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {item.size} × {item.quantity}
                  </span>
                </div>

                <strong>
                  ₹
                  {(
                    product.price * item.quantity
                  ).toLocaleString("en-IN")}
                </strong>
              </div>
            );
          })}

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
        </aside>
      </div>
    </section>
  );
}