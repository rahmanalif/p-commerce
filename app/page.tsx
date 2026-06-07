import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col antialiased">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Manifesto />
        <ProductGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
