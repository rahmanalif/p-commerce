import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScentsHeader from "@/components/ScentsHeader";
import ScentsGrid from "@/components/ScentsGrid";

export default function ScentsPage() {
  return (
    <div className="flex-grow flex flex-col antialiased">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <ScentsHeader />
        <ScentsGrid />
      </main>
      <Footer />
    </div>
  );
}
