# Foody Produce Shop

Foody is a React and TypeScript storefront for browsing produce, saving favorites, and placing a demo order.

## Run it locally

Use Node.js 22.12 or newer. From the repository root, run:

```sh
cd ts-ecommerce
npm ci
npm run dev
```

Open the local URL printed by Vite. Run `npm run lint` to check the code and `npm run build` to type-check and create the production files in `dist`.

## Where to start

| To understand or change | Start here |
| --- | --- |
| How React starts and where the shared state is set up | [src/main.tsx](src/main.tsx) |
| Which page opens for each URL | [src/App.tsx](src/App.tsx) |
| Product names, prices, categories, and images | [src/data/products.ts](src/data/products.ts) |
| Product and cart item classes | [src/models](src/models) |
| Search, filters, and sorting | [src/pages/Products.tsx](src/pages/Products.tsx) |
| What happens when you click Add to cart or Wishlist | [src/components/ProductCard.tsx](src/components/ProductCard.tsx) |
| Cart quantities and totals | [src/contexts/CartProvider.tsx](src/contexts/CartProvider.tsx) |
| How products are saved and removed from the wishlist | [src/contexts/WishlistProvider.tsx](src/contexts/WishlistProvider.tsx) |
| Delivery form validation and order confirmation | [src/pages/Checkout.tsx](src/pages/Checkout.tsx) |
| Foody styles and images | [src/css/styles.css](src/css/styles.css) and [public/img](public/img) |

## Follow one click

1. Click **Add to cart** on a product card. The card passes the product to `addToCart`.
2. `CartProvider` adds the product or increases its quantity. React updates the cart page and navbar count from that shared state.
3. The provider saves the cart to `localStorage` as JSON. When the app starts, it creates a `CartItem` from each saved entry so the item can calculate its total. The wishlist restores its saved entries as `Product` instances.
4. Checkout validates the delivery form, keeps the order details for the confirmation screen, and clears the cart. The order and payment are simulated in the browser.
