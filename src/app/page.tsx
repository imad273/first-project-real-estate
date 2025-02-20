import Image from "next/image";

import hero from "@/assets/hero.png";
import Home1 from "@/assets/home-1.jpg";
import Home2 from "@/assets/home-2.jpg";
import Home3 from "@/assets/home-3.jpg";
import Home4 from "@/assets/home-4.jpg";

import { Button } from "@/components/ui/button";
import { SiHomeassistant } from "react-icons/si";
import { MdAddHome, MdSell } from "react-icons/md";
import { FaArrowRight, FaFileContract } from "react-icons/fa";
import { IoBedSharp, IoLocationSharp } from "react-icons/io5";
import { PiBathtubFill } from "react-icons/pi";

export default function Home() {

  const listings = [
    {
      id: 1,
      image: Home1,
      name: "The Queen Inside - Type 1",
      location: "Dubai Marina",
      beds: 3,
      baths: 2,
    },
    {
      id: 3,
      image: Home2,
      name: "The Queen Inside - Type 2",
      location: "Dubai Marina",
      beds: 3,
      baths: 2,
    },
    {
      id: 4,
      image: Home3,
      name: "Willow Green",
      location: "Emirates Hills",
      beds: 4,
      baths: 2,
    },
    {
      id: 2,
      image: Home4,
      name: "Modern Sea",
      location: "Palm Jumeirah",
      beds: 5,
      baths: 3,
    },
  ]

  return (
    <main>
      <section className="bg-gradient-to-tr from-[#C8E2E9] to-[#F7DCBE]">
        <section className="container h-full md:h-[90vh]">
          <div className="md:flex justify-between items-center h-full">
            <div className="md:w-7/12">
              <h1 className="text-4xl md:text-5xl pt-10 md:pt-0 font-bold mb-3 text-slate-900">
                Guiding Your Path To A New Home In Dubai
              </h1>
              <p className="mb-3">With expert guidance and a deep understanding of Dubai real estate landscape we make your journey to a new home seamless and stress-free.</p>
              <Button>Explore</Button>
            </div>
            <div className="flex justify-center items-center">
              <Image src={hero} className="w-96" alt="hero" />
            </div>
          </div>
        </section>
      </section>

      <section className="relative h-full py-8 my-8 mx-5 ">
        <div className="absolute bg-[#F6F8FA] h-4/6 w-full rounded-xl"></div>
        <div className="container relative">
          <div className="absolute -top-8 right-5 md:right-20 h-16 w-16">
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#acadd3_2px,transparent_2px)] [background-size:16px_16px]"></div>
          </div>

          <div className="pt-6 pb-3">
            <h2 className="text-slate-900 text-3xl font-bold">What we do</h2>
            <p>Buying, selling, renting, or investing, We’re here to make the process seamless and stress-free.</p>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-lg flex justify-center items-center flex-col py-8 px-2 shadow">
              <div className="bg-[#FFEDEA] text-[#E12C2C] p-4 rounded-full">
                <MdAddHome size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mt-5 text-center">Buying</h3>
              <p className="text-sm text-center">Find your dream home with ease. We guide you through every step, from property search to closing the deal.</p>
            </div>
            <div className="bg-white rounded-lg flex justify-center items-center flex-col py-8 px-2 shadow">
              <div className="bg-[#eaffeb] text-[#1AB740] p-4 rounded-full">
                <MdSell size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mt-5 text-center">Selling</h3>
              <p className="text-sm text-center">Maximize your property’s value. We handle marketing, negotiations, and paperwork to ensure a smooth sale.</p>
            </div>
            <div className="bg-white rounded-lg flex justify-center items-center flex-col py-8 px-2 shadow">
              <div className="bg-[#E3F5FE] text-[#1E80CC] p-4 rounded-full">
                <FaFileContract size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mt-5 text-center">Rental Services</h3>
              <p className="text-sm text-center">Stress-free renting for landlords and tenants. We manage listings, tenant screening, and lease agreements.</p>
            </div>
            <div className="bg-white rounded-lg flex justify-center items-center flex-col py-8 px-2 shadow">
              <div className="bg-[#fdede8] text-[#F78703]  p-4 rounded-full">
                <SiHomeassistant size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mt-5 text-center">Property Management</h3>
              <p className="text-sm text-center">Leave the hassle to us. We take care of maintenance, rent collection, and tenant relations for your investment properties.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='h-full md:h-[30vh] bg-slate-800'>
          <div className="container grid md:grid-cols-3 gap-8 md:gap-0 text-white h-full py-6 md:py-0">
            <div className='flex flex-col justify-center items-center h-full'>
              <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
                +90
              </h3>
              <p>
                Properties Sold
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
                +12
              </h3>
              <p>
                Homes Managed
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
                100%
              </h3>
              <p>
                Client Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full container py-10">
        <div className="pt-6 pb-3">
          <h2 className="text-slate-900 text-3xl font-bold">Our recent listing</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {listings.map(listing => (
            <div key={listing.id} className="border rounded-md flex flex-col">
              <Image src={listing.image} alt={"home image 1"} className="rounded-md p-1 cursor-pointer" />

              <div className="flex flex-col h-full">

                <div className="pb-3 px-2 flex-1">
                  <h3 className="font-semibold text-slate-900 mt-3">{listing.name}</h3>
                  <div className="mt-3 flex gap-2 items-center text-sm text-neutral-500 font-semibold">
                    <IoLocationSharp />
                    <p>{listing.location}</p>
                  </div>
                  <div className="flex gap-3 mt-1 items-center text-sm">
                    <div className="flex items-center gap-1.5 text-neutral-500 font-semibold">
                      <IoBedSharp />
                      <span>{listing.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-500 font-semibold">
                      <PiBathtubFill />
                      <span>{listing.baths}</span>
                    </div>
                  </div>
                </div>

                <div className="hover:text-stone-900 duration-200 flex justify-center items-center gap-2 text-sm p-2 cursor-pointer font-semibold text-slate-900">
                  <p>See Details</p>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}