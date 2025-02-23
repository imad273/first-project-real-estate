"use client"

import React from 'react'
import heroImage from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from 'framer-motion';

const hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}

      className="bg-gradient-to-tr from-[#C8E2E9] to-[#F7DCBE]">
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
            <Image src={heroImage} className="w-96" alt="hero" />
          </div>
        </div>
      </section>
    </motion.section>
  )
}

export default hero