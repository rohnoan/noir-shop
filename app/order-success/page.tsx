"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function OrderSuccess() {
  const order = (() => {
    if (typeof window === "undefined") return null;

    const saved =
      localStorage.getItem("noir-last-order");

    if (!saved) return null;

    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  })();

  return (
    <section className="success-page">
      <div className="success-icon">
        <Check size={30} />
      </div>

      <p className="eyebrow">ORDER CONFIRMED</p>

      <h1>Thank you.</h1>

      <p>
        Your order has been received and is being
        prepared.
      </p>

      {order && (
        <div className="order-card">
          <span>Order number</span>

          <strong>{order.orderNumber}</strong>

          <span>Total</span>

          <strong>
            ₹{order.total.toLocaleString("en-IN")}
          </strong>
        </div>
      )}

      <Link
        href="/shop"
        className="button button-black"
      >
        Continue shopping
      </Link>
    </section>
  );
}