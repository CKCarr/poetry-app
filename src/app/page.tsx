import Hero from "@/components/poetryHero";
import Footer from "@/components/Footer";
import Bookshelf from "@/components/Bookshelf";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main className="flex-grow flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Bookshelf />
      </main>
      <Footer />
    </div>
  );
}
