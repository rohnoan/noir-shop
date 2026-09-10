"use client";

import Link from "next/link";
import { Search, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={21} />
          </button>

          <Link href="/" className="logo">
            NOIR
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/shop?category=T-Shirts">
              T-Shirts
            </Link>
            <Link href="/shop?category=Hoodies">
              Hoodies
            </Link>
            <Link href="/shop?category=Pants">
              Pants
            </Link>
          </nav>

          <div className="nav-actions">
            <Link href="/shop" aria-label="Search">
              <Search size={20} />
            </Link>

            <Link href="/checkout" aria-label="Account">
              <UserRound size={20} />
            </Link>

            <Link href="/cart" className="bag-link">
              <ShoppingBag size={20} />

              {cartCount > 0 && (
                <span className="cart-count">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu-panel">
          <div className="mobile-menu-top">
            <span className="logo">NOIR</span>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-links">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>

            <Link
              href="/shop?category=T-Shirts"
              onClick={() => setMenuOpen(false)}
            >
              T-Shirts
            </Link>

            <Link
              href="/shop?category=Hoodies"
              onClick={() => setMenuOpen(false)}
            >
              Hoodies
            </Link>

            <Link
              href="/shop?category=Pants"
              onClick={() => setMenuOpen(false)}
            >
              Pants
            </Link>
          </div>
        </div>
      )}
    </>
  );
}