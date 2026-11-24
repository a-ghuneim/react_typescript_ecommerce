import { Product, ProductCategory } from "../models/Product";

export const products: Product[] = [
  new Product({
    id: 1,
    name: "Organic Tomatoes",
    price: 3.5,
    category: ProductCategory.Vegetables,
    image: "/img/product-1.jpg",
  }),
  new Product({
    id: 2,
    name: "Fresh Pineapple",
    price: 4.5,
    category: ProductCategory.Fruits,
    image: "/img/product-2.jpg",
  }),
  new Product({
    id: 3,
    name: "Fresh Chili Peppers",
    price: 2.75,
    category: ProductCategory.Vegetables,
    image: "/img/product-3.jpg",
  }),
  new Product({
    id: 4,
    name: "Fresh Strawberry",
    price: 5.25,
    category: ProductCategory.Fruits,
    image: "/img/product-4.jpg",
  }),
  new Product({
    id: 5,
    name: "Fresh Cucumbers",
    price: 2.25,
    category: ProductCategory.Vegetables,
    image: "/img/product-5.jpg",
  }),
  new Product({
    id: 6,
    name: "Orange Tomato",
    price: 3.25,
    category: ProductCategory.Vegetables,
    image: "/img/product-6.jpg",
  }),
  new Product({
    id: 7,
    name: "Fresh Potatoes",
    price: 2.5,
    category: ProductCategory.Vegetables,
    image: "/img/product-7.jpg",
  }),
  new Product({
    id: 8,
    name: "Fresh Banana",
    price: 1.95,
    category: ProductCategory.Fruits,
    image: "/img/product-8.jpg",
  }),
];
