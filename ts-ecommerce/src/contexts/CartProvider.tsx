import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Product, ProductDetails } from "../models/Product";
import { CartItem } from "../models/CartItem";
import { CartContext } from "./CartContext";
import { readSavedItems, saveItems } from "./storeStorage";

const storageKey = "foody-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  // JSON keeps the saved fields. Recreate the class to restore its methods.
  const [cart, setCart] = useState(() =>
    readSavedItems<ProductDetails & { quantity: number }>(storageKey).map(
      (item) => new CartItem(item, item.quantity),
    ),
  );

  useEffect(() => {
    saveItems(storageKey, cart);
  }, [cart]);

  function addToCart(product: Product) {
    // Read the latest cart when React applies the update.
    setCart((items) => {
      if (items.some((item) => item.id === product.id)) {
        return items.map((item) =>
          item.id === product.id ? item.changeQuantity(1) : item,
        );
      }
      return [...items, new CartItem(product)];
    });
  }

  function changeQuantity(id: number, amount: number) {
    setCart((items) =>
      items.map((item) =>
        item.id === id ? item.changeQuantity(amount) : item,
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
  const subtotal = cart.reduce((total, item) => total + item.lineTotal, 0);

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
