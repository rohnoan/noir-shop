import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import {
  ArrowDown,
  ArrowUpRight,
  MoveRight,
} from "lucide-react";

export default function Home() {
  const featured = products.filter(
    (product) => product.featured
  );

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">NEW COLLECTION — 2026</p>

          <h1>
            LESS
            <br />
            BUT BETTER.
          </h1>

          <p className="hero-description">
            Modern essentials designed around quality,
            simplicity and everyday wear.
          </p>

          <div className="hero-buttons">
            <Link href="/shop" className="button button-black">
              Shop collection
              <MoveRight size={17} />
            </Link>

            <Link
              href="#featured"
              className="button button-white"
            >
              Explore
              <ArrowDown size={16} />
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=90"
            alt="NOIR collection"
          />

          <div className="hero-image-label">
            <span>01 / 04</span>
            <span>THE ESSENTIALS</span>
          </div>
        </div>
      </section>

      <section className="ticker">
        <div>
          FREE SHIPPING ON ORDERS OVER ₹2,999
        </div>
        <div>DESIGNED FOR EVERYDAY</div>
        <div>EASY 14-DAY RETURNS</div>
      </section>

      <section className="intro">
        <p className="eyebrow">OUR APPROACH</p>

        <h2>
          Clothes without
          <br />
          the unnecessary.
        </h2>

        <div className="intro-bottom">
          <p>
            NOIR focuses on the pieces you actually wear.
            Clean silhouettes, considered materials and
            timeless design.
          </p>

          <Link href="/shop">
            Discover NOIR <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section
        className="featured-section"
        id="featured"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURATED FOR YOU</p>
            <h2>Featured pieces</h2>
          </div>

          <Link href="/shop">
            View all <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {featured.slice(0, 4).map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </section>

      <section className="split-banner">
        <div>
          <p className="eyebrow">THE NOIR STANDARD</p>

          <h2>
            Built to be
            <br />
            worn.
          </h2>

          <Link
            href="/shop"
            className="button button-white"
          >
            Shop essentials
            <MoveRight size={17} />
          </Link>
        </div>

        <div className="split-image">
          <img
            src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85"
            alt="NOIR clothing"
          />
        </div>
      </section>
    </>
  );
}