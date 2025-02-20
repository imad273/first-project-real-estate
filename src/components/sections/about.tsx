import React from 'react'
import { SiHomeassistant } from "react-icons/si";
import { MdAddHome, MdSell } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";

const about = () => {
  return (
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
  )
}

export default about