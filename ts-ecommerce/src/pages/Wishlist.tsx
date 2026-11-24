import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import ProductsHeader from "../components/ProductsHeader";
import { useWishlist } from "../contexts/WishlistContext";

export default function Wishlist() {
  const { wishlist, wishlistCount } = useWishlist();

  return (
    <>
      <ProductsHeader title="Wishlist" />
      <section className="container pb-5">
        {wishlistCount === 0 ? (
          <div className="text-center py-4">
            <h2>Your wishlist is empty</h2>
            <Link className="btn btn-primary rounded-pill" to="/products">
              Explore products
            </Link>
          </div>
        ) : (
          <>
            <p>
              {wishlistCount} saved{" "}
              {wishlistCount === 1 ? "product" : "products"}
            </p>
            <ProductGrid items={wishlist} />
          </>
        )}
      </section>
    </>
  );
}
