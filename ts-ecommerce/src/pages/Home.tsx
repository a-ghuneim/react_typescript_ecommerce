import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import HomeHero from "../components/HomeHero"

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <ProductsList />

      <Footer />
    </>
  );
}

export default Home;
