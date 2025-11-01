import NavBar from "@/components/NavBar";
import HeroSection from "./landing/HeroSection";
import ProductCategory from "./landing/ProductCategory";
import ProductGallery from "./landing/ProductGallery";
import About from "@/components/About";

export default function Home() {
  return (
    <article className="mx-auto bg-[#141414]">
      <div className="max-w-[1440px] w-[1109.83px] mx-auto rounded-b-2xl">
        <NavBar />
        <HeroSection />
      </div>

      <main className=" bg-[#ffffff] pt-[120px]">
        <div className="w-[1110px] mx-auto">
          <ProductCategory />
          <ProductGallery />
          <About />
        </div>
      </main>
    </article>
  );
}
