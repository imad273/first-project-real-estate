import Image from "next/image";
import hero from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="bg-gradient-to-tr from-[#C8E2E9] to-[#F7DCBE]">
      <section className="container h-[90vh]">
        <div className="md:flex justify-between items-center h-full mt-10 md:mt-0">
          <div className="md:w-7/12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900">
              Guiding Your Path To A New Home In Dubai
            </h1>
            <p className="mb-3">With expert guidance and a deep understanding of Dubai real estate landscape we make your journey to a new home seamless and stress-free.</p>
            <Button>Explore</Button>
          </div>
          <div className="">
            <Image src={hero} className="w-96" alt="hero" />
          </div>
        </div>
      </section>
    </section>
  );
}
