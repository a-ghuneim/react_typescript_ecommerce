import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="row g-4">
      {items.map((product) => (
        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
