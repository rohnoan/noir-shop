export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  stock: number;
  featured?: boolean;
  bestseller?: boolean;
  tags: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "essential-oversized-tee",
    name: "Essential Oversized Tee",
    category: "T-Shirts",
    price: 1499,
    originalPrice: 1999,
    shortDescription: "Heavyweight cotton. Relaxed silhouette.",
    description:
      "A heavyweight everyday essential designed with a relaxed oversized silhouette. Made for comfort without sacrificing structure.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
    rating: 4.8,
    reviews: 124,
    stock: 18,
    featured: true,
    bestseller: true,
    tags: ["oversized", "cotton", "essential"],
  },

  {
    id: "p2",
    slug: "minimal-heavy-hoodie",
    name: "Minimal Heavy Hoodie",
    category: "Hoodies",
    price: 2499,
    originalPrice: 2999,
    shortDescription: "400 GSM heavyweight fleece.",
    description:
      "A premium heavyweight hoodie built around a minimal silhouette. Soft brushed interior with a structured exterior.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey"],
    rating: 4.9,
    reviews: 89,
    stock: 12,
    featured: true,
    bestseller: true,
    tags: ["hoodie", "heavyweight", "fleece"],
  },

  {
    id: "p3",
    slug: "utility-cargo-pants",
    name: "Utility Cargo Pants",
    category: "Pants",
    price: 2199,
    shortDescription: "Relaxed utility fit with six pockets.",
    description:
      "Relaxed utility trousers with a contemporary silhouette, adjustable waist and functional pocket construction.",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506629905607-d9c297d7b6b5?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Olive"],
    rating: 4.7,
    reviews: 67,
    stock: 23,
    featured: true,
    tags: ["cargo", "utility", "pants"],
  },

  {
    id: "p4",
    slug: "structured-overshirt",
    name: "Structured Overshirt",
    category: "Shirts",
    price: 2799,
    shortDescription: "Clean structure. Everyday layering.",
    description:
      "A versatile structured overshirt designed for layering. Clean lines and a slightly relaxed fit.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream"],
    rating: 4.6,
    reviews: 42,
    stock: 9,
    tags: ["shirt", "overshirt", "layering"],
  },

  {
    id: "p5",
    slug: "everyday-cap",
    name: "Everyday Cap",
    category: "Accessories",
    price: 999,
    shortDescription: "Minimal six-panel construction.",
    description:
      "A minimal six-panel cap with a clean embroidered mark and adjustable back closure.",
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["One Size"],
    colors: ["Black", "White"],
    rating: 4.5,
    reviews: 31,
    stock: 30,
    tags: ["cap", "accessory"],
  },

  {
    id: "p6",
    slug: "signature-sweatpants",
    name: "Signature Sweatpants",
    category: "Pants",
    price: 1999,
    originalPrice: 2299,
    shortDescription: "Relaxed fit with heavyweight fleece.",
    description:
      "Heavyweight fleece sweatpants with a relaxed fit and minimal detailing.",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1580906855285-2f4b5c4c4a2c?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey"],
    rating: 4.8,
    reviews: 76,
    stock: 15,
    bestseller: true,
    tags: ["sweatpants", "fleece"],
  },

  {
    id: "p7",
    slug: "daily-long-sleeve",
    name: "Daily Long Sleeve",
    category: "T-Shirts",
    price: 1699,
    shortDescription: "Premium cotton long sleeve.",
    description:
      "A clean long-sleeve essential with a slightly relaxed fit and soft premium cotton construction.",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
    rating: 4.7,
    reviews: 53,
    stock: 20,
    tags: ["long-sleeve", "cotton"],
  },

  {
    id: "p8",
    slug: "classic-minimal-sneaker",
    name: "Classic Minimal Sneaker",
    category: "Footwear",
    price: 3299,
    shortDescription: "Minimal low-top everyday sneaker.",
    description:
      "A clean low-top sneaker built around a minimal silhouette for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85",
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White"],
    rating: 4.9,
    reviews: 143,
    stock: 7,
    featured: true,
    bestseller: true,
    tags: ["sneaker", "minimal", "footwear"],
  },
];

export const categories = [
  "All",
  "T-Shirts",
  "Hoodies",
  "Shirts",
  "Pants",
  "Accessories",
  "Footwear",
];