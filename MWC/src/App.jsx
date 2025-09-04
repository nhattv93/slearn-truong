// import "./App.css";
import Banner from "./components/banner/Banner";
import BestSelling from "./components/best-selling/Best-selling";
import FashionBackPack from "./components/fashion-backpack/FashionBackpack";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MenFashionShoes from "./components/men-fashion-shoes/MenFashionShoes";
import MenShoes from "./components/men-shoes/MenShoes";
import MwcFashion from "./components/MWC-fashion/Mwcfashion";
import ProductHighSeels from "./components/product-high-heels/ProductHighHeels";
import StoreSystem from "./components/store-system/StoreSystem";
import WomenShoes from "./components/women-shoes/WomenShoes";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <BestSelling />
      {/* <ProductHighSeels />
      <FashionBackPack />
      <WomenShoes />
      <MenShoes />
      <MenFashionShoes />
      <MwcFashion />
      <Footer />
      <StoreSystem /> */}
    </>
  );
}
