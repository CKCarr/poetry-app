import Hero from "@/components/poetryHero";
import Footer from "@/components/Footer";
import Colors from "@/components/Colors";
import Bookshelf from "@/components/Bookshelf";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Colors /> */}
        <Bookshelf />
      </main>
      <Footer />
    </div>
  );
}
