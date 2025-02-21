import React from 'react'
import Home1 from "@/assets/home-1.jpg";
import Home2 from "@/assets/home-2.jpg";
import Home3 from "@/assets/home-3.jpg";
import Home4 from "@/assets/home-4.jpg";
import Image from "next/image";
import { IoBedSharp, IoLocationSharp } from 'react-icons/io5';
import { PiBathtubFill } from 'react-icons/pi';
import { FaArrowRight } from 'react-icons/fa6';

const page = () => {

  const properties = [
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
  ];


  return (
    <section className='min-h-screen container py-10'>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {properties.map(listing => (
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
  )
}

export default page