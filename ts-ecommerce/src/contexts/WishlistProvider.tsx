import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";
import { WishlistContext } from "./WishlistContext";
import { readSavedItems, saveItems } from "./storeStorage";

const storageKey = "foody-wishlist";

export default function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState(() =>
    readSavedItems<Product>(storageKey),
  );

  useEffect(() => {
    saveItems(storageKey, wishlist);
  }, [wishlist]);

  function toggleWishlist(product: Product) {
    setWishlist((items) => {
      if (items.some((item) => item.id === product.id)) {
        return items.filter((item) => item.id !== product.id);
      }
      return [...items, product];
    });
  }

  function isInWishlist(id: number) {
    return wishlist.some((item) => item.id === id);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
