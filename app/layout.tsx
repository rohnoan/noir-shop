import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: {
    default: "NOIR — Modern Essentials",
    template: "%s | NOIR",
  },
  description:
    "Modern everyday essentials designed with a focus on quality, simplicity and timeless style.",
  keywords: [
    "minimal clothing",
    "oversized t-shirts",
    "streetwear",
    "premium basics",
    "modern fashion",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}