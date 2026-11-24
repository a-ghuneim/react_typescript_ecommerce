import { Link } from "react-router-dom";
import ProduceHeading from "../components/ProduceHeading";
import ProductGrid from "../components/ProductGrid";
import HomeHero from "../components/HomeHero";
import AboutAndFeatures from "../components/AboutAndFeatures";
import { products } from "../data/products";

function Home() {
  return (
    <>
      <HomeHero />
      <AboutAndFeatures />
      <div id="produce" className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <ProduceHeading />
            <div className="col-lg-6 text-lg-end mb-4 mb-lg-5">
              <Link className="btn btn-outline-primary me-2" to="/products?category=Fruits">Fruits</Link>
              <Link className="btn btn-outline-primary" to="/products?category=Vegetables">Vegetables</Link>
            </div>
          </div>
          <ProductGrid items={products} />
        </div>
      </div>
    </>
  );
}

export default Home;
