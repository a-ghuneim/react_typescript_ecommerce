import { createContext, useContext } from "react";
import type { Product } from "../models/Product";
import type { CartItem } from "../models/CartItem";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;

  changeQuantity: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;

  cartCount: number;
  subtotal: number;
};

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
