'use client'

import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LOGO from '@/assets/logo.png'

const Footer = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.5
      }}
    >
      <footer className="bg-slate-800">
        <div className="container">
          <div className="py-10">
            <div className="lg:flex">
              <div className="w-full lg:w-2/5">
                <div>
                  <Link href="/">
                    <div className="relative z-20 flex items-center text-lg font-medium">
                      <Image src={LOGO} alt="LOGO" className='w-32' />
                    </div>
                  </Link>

                  <p className="max-w-sm mt-2 text-sm text-gray-200">Join our community on social media and share your experience with us!</p>

                  <div className="flex items-center gap-3 my-3">
                    <div className='text-gray-300 duration-200 cursor-pointer hover:text-gray-700'>
                      <FaFacebook size={21} />
                    </div>
                    <div className='text-gray-300 duration-200 cursor-pointer hover:text-gray-700'>
                      {/* <PiInstagramLogoDuotone size={21} /> */}
                      <Instagram size={20} />
                    </div>
                    <div className='text-gray-300 duration-200 cursor-pointer hover:text-gray-700'>
                      <FaTiktok size={19.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-0 md:flex-1">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-gray-200 uppercase">Resources</h3>
                    <a href="#" className="block mt-2 text-sm text-gray-300 hover:underline">Privacy Policy</a>
                    <a href="#" className="block mt-2 text-sm text-gray-300 hover:underline">Terms & conditions</a>
                    <a href="#" className="block mt-2 text-sm text-gray-300 hover:underline">Refund & Return Policy</a>
                  </div>

                  <div>
                    <h3 className="text-gray-200 uppercase">Contact</h3>
                    <span className="block mt-2 text-sm text-gray-300">+1 526 654 8965</span>
                    <span className="block mt-2 text-sm text-gray-300 hover:underline">example@email.com</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="h-px my-6 bg-gray-300 border-none" />

            <div>
              <p className="text-center text-gray-200">© Logo 2025 - All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Footer