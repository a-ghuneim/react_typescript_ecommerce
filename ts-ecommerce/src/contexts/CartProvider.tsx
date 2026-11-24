import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";
import { CartContext } from "./CartContext";
import type { CartItem } from "./CartContext";
import { readSavedItems, saveItems } from "./storeStorage";

const storageKey = "foody-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState(() => readSavedItems<CartItem>(storageKey));

  useEffect(() => {
    saveItems(storageKey, cart);
  }, [cart]);

  function addToCart(product: Product) {
    // Read the latest cart when React applies the update.
    setCart((items) => {
      if (items.some((item) => item.id === product.id)) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(id: number, amount: number) {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  }

  function removeFromCart(id: number) {
    setCart((items) => items.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        changeQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
