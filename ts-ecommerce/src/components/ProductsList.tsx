import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import ProductGrid from "./ProductGrid";
import { products } from "../data/products";
import type { Product } from "../data/products";

type ProductsListProps = {
  items?: Product[];
  children?: ReactNode;
};

function ProductsList({ items = products, children }: ProductsListProps) {
  return (
    <div id="produce" className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="section-header text-start mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <h1 className="display-5 mb-3">Shop fresh produce</h1>
              <p>
                Pick up fruit for the week and vegetables for your next meal.
              </p>
            </div>
          </div>
          {!children && (
            <div className="col-lg-6 text-lg-end mb-4 mb-lg-5">
              <Link className="btn btn-outline-primary me-2" to="/products?category=Fruits">Fruits</Link>
              <Link className="btn btn-outline-primary" to="/products?category=Vegetables">Vegetables</Link>
            </div>
          )}
        </div>
        {children}
        {items.length > 0 ? (
          <ProductGrid items={items} />
        ) : (
          <p>No products found. Try changing your filters.</p>
        )}
      </div>
    </div>
  );
}
export default ProductsList;
