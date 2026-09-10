import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">NOIR</div>

          <p>
            Modern essentials.
            <br />
            Nothing unnecessary.
          </p>
        </div>

        <div className="footer-column">
          <h4>Shop</h4>

          <Link href="/shop">All Products</Link>
          <Link href="/shop?category=T-Shirts">
            T-Shirts
          </Link>
          <Link href="/shop?category=Hoodies">
            Hoodies
          </Link>
          <Link href="/shop?category=Pants">
            Pants
          </Link>
        </div>

        <div className="footer-column">
          <h4>Help</h4>

          <span>Shipping</span>
          <span>Returns</span>
          <span>Size Guide</span>
          <span>Contact</span>
        </div>

        <div className="footer-column">
          <h4>Follow</h4>

          <span>Instagram</span>
          <span>Pinterest</span>
          <span>TikTok</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NOIR</span>
        <span>Built for the everyday.</span>
      </div>
    </footer>
  );
}