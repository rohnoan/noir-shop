"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  productId: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (productId: string, size: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("noir-cart");

    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        setItems([]);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("noir-cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  function addToCart(
    productId: string,
    size: string,
    quantity = 1
  ) {
    setItems((current) => {
      const existing = current.find(
        (item) =>
          item.productId === productId && item.size === size
      );

      if (existing) {
        return current.map((item) =>
          item.productId === productId && item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...current,
        {
          productId,
          size,
          quantity,
        },
      ];
    });
  }

  function removeFromCart(productId: string, size: string) {
    setItems((current) =>
      current.filter(
        (item) =>
          !(item.productId === productId && item.size === size)
      )
    );
  }

  function updateQuantity(
    productId: string,
    size: string,
    quantity: number
  ) {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.size === size
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const cartCount = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}