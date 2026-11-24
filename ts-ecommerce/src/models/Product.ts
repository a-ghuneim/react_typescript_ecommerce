export enum ProductCategory {
  Vegetables = "Vegetables",
  Fruits = "Fruits",
}

export type ProductDetails = {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
};

export class Product {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly category: ProductCategory;
  readonly image: string;

  constructor(details: ProductDetails) {
    this.id = details.id;
    this.name = details.name;
    this.price = details.price;
    this.category = details.category;
    this.image = details.image;
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}
