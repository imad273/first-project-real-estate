import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import SocialProf from "@/components/sections/socialProf";
import Properties from "@/components/sections/properties";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <SocialProf />

      <Properties />

      <FAQ />
    </main>
  );
}