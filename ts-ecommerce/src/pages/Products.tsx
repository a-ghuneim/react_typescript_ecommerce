import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProduceHeading from "../components/ProduceHeading";
import ProductGrid from "../components/ProductGrid";
import ProductsHeader from "../components/ProductsHeader";
import { products } from "../data/products";

const categories = [...new Set(products.map((product) => product.category))];

function Products() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category") ?? "";
  const category = categories.includes(requestedCategory) ? requestedCategory : "";
  const searchTerm = search.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = category === "" || product.category === category;
    const matchesMinPrice = minPrice === "" || product.price >= Number(minPrice);
    const matchesMaxPrice = maxPrice === "" || product.price <= Number(maxPrice);
    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  if (sortOrder === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sortOrder === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  function changeCategory(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  }

  function resetFilters() {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setSortOrder("");
    if (requestedCategory) changeCategory("");
  }

  return (
    <>
      <ProductsHeader />
      <div id="produce" className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <ProduceHeading />
          </div>
          <div className="row g-3 align-items-end mb-3">
            <div className="col-12 col-lg">
              <label className="form-label" htmlFor="product-search">Search products</label>
              <input id="product-search" className="form-control" type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div className="col-6 col-lg">
              <label className="form-label" htmlFor="product-category">Category</label>
              <select id="product-category" className="form-select" value={category} onChange={(event) => changeCategory(event.target.value)}>
                <option value="">All categories</option>
                {categories.map((name) => <option key={name}>{name}</option>)}
              </select>
            </div>
            <div className="col-6 col-lg">
              <label className="form-label" htmlFor="min-price">Min price ($)</label>
              <input id="min-price" className="form-control" type="number" min="0" step="0.01" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} />
            </div>
            <div className="col-6 col-lg">
              <label className="form-label" htmlFor="max-price">Max price ($)</label>
              <input id="max-price" className="form-control" type="number" min="0" step="0.01" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} />
            </div>
            <div className="col-6 col-lg">
              <label className="form-label" htmlFor="product-sort">Sort by</label>
              <select id="product-sort" className="form-select" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                <option value="">Default</option>
                <option value="low-to-high">Price: low to high</option>
                <option value="high-to-low">Price: high to low</option>
              </select>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-outline-primary" onClick={resetFilters}>Reset filters</button>
            </div>
          </div>
          <p role="status">Products found: {filteredProducts.length}</p>
          {filteredProducts.length === 0 ? (
            <p>No products found. Try changing your filters.</p>
          ) : (
            <ProductGrid items={filteredProducts} />
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
