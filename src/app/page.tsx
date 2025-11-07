import HeroSection from "../components/landing/HeroSection";
import ProductCategory from "../components/landing/ProductCategory";
import ProductGallery from "../components/landing/ProductGallery";
import About from "../components/About";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <article className="mx-auto bg-[#141414]">
      <div className="max-w-[1440px] lg:w-[1109.83px] mx-auto rounded-b-2xl">
        <NavBar />
        <HeroSection />
      </div>

      <main className=" bg-[#ffffff] pt-[120px]">
        <div className="lg:w-[1110px] lg:mx-auto md:px-[39px]">
          <ProductCategory />
          <ProductGallery />
          <About />
        </div>
      </main>
    </article>
  );
}
