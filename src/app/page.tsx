import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import SocialProf from "@/components/sections/socialProf";
import Listings from "@/components/sections/listings";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <SocialProf />

      <Listings />

      <FAQ />
    </main>
  );
}