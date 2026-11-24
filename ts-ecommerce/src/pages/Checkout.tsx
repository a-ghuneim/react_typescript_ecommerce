import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import ProductsHeader from "../components/ProductsHeader";
import { useCart } from "../contexts/CartContext";
import type { CartItem } from "../contexts/CartContext";

const fields = [
  { name: "fullName", label: "Full name", type: "text", autoComplete: "name" },
  {
    name: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
  },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
  {
    name: "address",
    label: "Delivery address",
    type: "text",
    autoComplete: "street-address",
  },
] as const;

type DeliveryDetails = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
};

type FieldErrors = Partial<Record<keyof DeliveryDetails, string>>;
type CompletedOrder = {
  reference: string;
  customer: DeliveryDetails;
  items: CartItem[];
  subtotal: number;
};

function validateDeliveryDetails(customer: DeliveryDetails) {
  const errors: FieldErrors = {};

  if (customer.fullName.length < 3) {
    errors.fullName = "Enter at least 3 characters.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!/^\+?[0-9]{8,15}$/.test(customer.phone)) {
    errors.phone = "Enter 8 to 15 digits with an optional leading +.";
  }
  if (customer.city.length < 2) {
    errors.city = "Enter at least 2 characters.";
  }
  if (customer.address.length < 5) {
    errors.address = "Enter at least 5 characters.";
  }

  return errors;
}

function CheckoutSummary({
  items,
  subtotal,
}: {
  items: CartItem[];
  subtotal: number;
}) {
  return (
    <>
      <h2 className="h4 mb-3">Order summary</h2>
      {items.map((item) => (
        <p key={item.id} className="d-flex justify-content-between gap-3">
          <span>
            {item.name} × {item.quantity}
          </span>
          <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </p>
      ))}
      <hr />
      <p className="d-flex justify-content-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </p>
      <p className="d-flex justify-content-between">
        <span>Delivery</span>
        <span>Free</span>
      </p>
      <p className="d-flex justify-content-between fw-bold">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </p>
    </>
  );
}

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [order, setOrder] = useState<CompletedOrder | null>(null);

  function placeOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (cart.length === 0 || order) return;

    const form = new FormData(event.currentTarget);

    function readField(name: keyof DeliveryDetails) {
      return String(form.get(name) ?? "").trim();
    }

    const customer = {
      fullName: readField("fullName"),
      email: readField("email"),
      phone: readField("phone"),
      city: readField("city"),
      address: readField("address"),
    };

    const nextErrors = validateDeliveryDetails(customer);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Keep the items for the confirmation before clearing the cart.
    setOrder({
      reference: `FD-${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
      customer,
      items: cart,
      subtotal,
    });
    clearCart();
  }

  return (
    <>
      <ProductsHeader title="Checkout" />
      <section className="container pb-5">
        {order ? (
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h2>Demo order confirmed</h2>
              <p>
                Thank you, {order.customer.fullName}. Your order reference is{" "}
                <strong>{order.reference}</strong>.
              </p>
              <div className="bg-light p-4 mb-3">
                <CheckoutSummary
                  items={order.items}
                  subtotal={order.subtotal}
                />
                <hr />
                <h3 className="h5">Delivery information</h3>
                <p className="mb-1">{order.customer.fullName}</p>
                <p className="mb-1">
                  {order.customer.address}, {order.customer.city}
                </p>
                <p className="mb-0">
                  {order.customer.email} · {order.customer.phone}
                </p>
              </div>
              <Link className="btn btn-primary rounded-pill" to="/products">
                Continue shopping
              </Link>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <div className="text-center py-4">
            <h2>Your cart is empty</h2>
            <Link className="btn btn-primary rounded-pill" to="/products">
              Continue shopping
            </Link>
          </div>
        ) : (
          <form className="row g-4" noValidate onSubmit={placeOrder}>
            <div className="col-lg-8">
              <h2 className="h4 mb-3">Delivery information</h2>
              {fields.map(({ name, label, type, autoComplete }) => (
                <div key={name} className="mb-3">
                  <label className="form-label" htmlFor={name}>
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    className={`form-control${errors[name] ? " is-invalid" : ""}`}
                    required
                    aria-invalid={Boolean(errors[name])}
                    aria-describedby={
                      errors[name] ? `${name}-error` : undefined
                    }
                    onChange={() => {
                      if (errors[name])
                        setErrors({ ...errors, [name]: undefined });
                    }}
                  />
                  {errors[name] && (
                    <p
                      id={`${name}-error`}
                      className="invalid-feedback"
                      role="alert"
                    >
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <aside className="col-lg-4">
              <div className="bg-light p-4">
                <CheckoutSummary items={cart} subtotal={subtotal} />
                <p>Demo checkout. No payment is collected.</p>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill w-100"
                >
                  Place demo order
                </button>
              </div>
            </aside>
          </form>
        )}
      </section>
    </>
  );
}
