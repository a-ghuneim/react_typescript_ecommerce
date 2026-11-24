import type { Product } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
function ProductCard(product: Product) {
  const { name, price, image, id } = product;
  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  const saved = isInWishlist(id);
  return (
    <>
      <div className="product-item">
        <div className="position-relative bg-light overflow-hidden">
          <img className="img-fluid w-100" src={image} alt={name} />
        </div>
        <div className="text-center p-4">
          <h3 className="d-block h5 mb-2">{name}</h3>
          <span className="text-primary me-1">${price.toFixed(2)}</span>
        </div>
        <div className="d-flex border-top">
          <small className="w-50 text-center border-end py-2">
            <button
              type="button"
              className="border-0 bg-transparent text-body p-0"
              aria-pressed={saved}
              onClick={() => toggleWishlist(product)}
            >
              <i className={`${saved ? "fas" : "far"} fa-heart text-primary me-2`} aria-hidden="true" />
              Wishlist
            </button>
          </small>
          <small className="w-50 text-center py-2">
            <button type="button" className="border-0 bg-transparent text-body p-0" onClick={() => addToCart(product)}>
              <i className="fa fa-shopping-bag text-primary me-2" aria-hidden="true" />
              Add to cart
            </button>
          </small>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
