import { Product } from "./Product";
import type { ProductDetails } from "./Product";

export class CartItem extends Product {
  readonly quantity: number;

  constructor(product: ProductDetails, quantity = 1) {
    super(product);
    this.quantity = quantity;
  }

  get lineTotal() {
    return this.price * this.quantity;
  }

  changeQuantity(amount: number) {
    const quantity = Math.max(1, this.quantity + amount);
    return new CartItem(this, quantity);
  }
}
