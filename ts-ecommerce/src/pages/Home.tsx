import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import HomeHero from "../components/HomeHero";
import AboutAndFeatures from "../components/AboutAndFeatures";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <AboutAndFeatures />
      <ProductsList />

      <Footer />
    </>
  );
}

export default Home;
