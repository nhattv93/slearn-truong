// import "./App.css";
import Banner from "./components/banner/Banner";
import BestSelling from "./components/best-selling/Best-selling";
import FashionBackPack from "./components/fashion-backpack/FashionBackpack";
import Header from "./components/header/Header";
import MenFashionShoes from "./components/men-fashion-shoes/MenFashionShoes";
import MenShoes from "./components/men-shoes/MenShoes";
import ProductHighSeels from "./components/product-high-heels/ProductHighHeels";
import WomenShoes from "./components/women-shoes/WomenShoes";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <BestSelling />
      <ProductHighSeels />
      <FashionBackPack />
      <WomenShoes />
      <MenShoes />
      <MenFashionShoes />
    </>
  );
}
