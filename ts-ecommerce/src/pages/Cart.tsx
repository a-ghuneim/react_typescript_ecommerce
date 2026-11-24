import { Link } from "react-router-dom";
import ProductsHeader from "../components/ProductsHeader";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { cart, changeQuantity, removeFromCart, clearCart, subtotal } =
    useCart();

  return (
    <>
      <ProductsHeader title="Shopping Cart" />
      <section className="container pb-5">
        {cart.length === 0 ? (
          <div className="text-center py-4">
            <h2>Your cart is empty</h2>
            <Link className="btn btn-primary rounded-pill" to="/products">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              {cart.map((item) => (
                <div
                  className="d-flex flex-wrap gap-3 align-items-center border-bottom py-3"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={80}
                    className="img-fluid"
                  />
                  <div className="flex-grow-1">
                    <h3 className="h5 mb-1">{item.name}</h3>
                    <p className="mb-0">
                      {item.category} · ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      aria-label={`Decrease quantity of ${item.name}`}
                      disabled={item.quantity === 1}
                      onClick={() => changeQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => changeQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="d-flex flex-wrap gap-2 mt-4">
                <Link
                  className="btn btn-outline-primary rounded-pill"
                  to="/products"
                >
                  Continue shopping
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>
            </div>
            <aside className="col-lg-4">
              <div className="bg-light p-4">
                <h2 className="h4 mb-3">Order summary</h2>
                <p className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Delivery</span>
                  <span>Free</span>
                </p>
                <hr />
                <p className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>
                <Link
                  className="btn btn-primary rounded-pill w-100"
                  to="/checkout"
                >
                  Proceed to checkout
                </Link>
              </div>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}
export default Cart;
