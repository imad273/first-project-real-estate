"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import LOGO from '@/assets/logo.png'
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Languages, GlobeIcon, CheckIcon } from 'lucide-react';
import { IoMdClose } from 'react-icons/io';
import { RiMenu3Line } from 'react-icons/ri';
import { Button } from './ui/button';

const Navbar = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);
  const [selectedChange, onSelectChange] = useState("en");

  return (
    <nav className="shadow">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Image src={LOGO} alt="LOGO" className='w-32' />
            </div>
          </Link>

          <div className="flex items-center gap-5 md:gap-8">
            <nav className={`z-50 ${phoneMenu ? "w-full" : "w-0"} fixed md:static top-0 left-0 h-full flex-col md:flex-row justify-center bg-white duration-300 overflow-hidden md:w-full flex items-center gap-8`}>
              <div className="absolute md:hidden top-5 right-6" onClick={() => setPhoneMenu(false)}>
                <IoMdClose size={22} />
              </div>

              <Link href="/" onClick={() => setPhoneMenu(false)} className="font-semibold text-gray-500 duration-300 hover:text-gray-900">
                Home
              </Link>
              <Link href="/#services" onClick={() => setPhoneMenu(false)} className="font-semibold text-gray-500 duration-300 hover:text-gray-900">
                Services
              </Link>
              <Link href="/properties" onClick={() => setPhoneMenu(false)} className="font-semibold text-gray-500 duration-300 hover:text-gray-900">
                Find a property
              </Link>
              <Link href="/#faq" onClick={() => setPhoneMenu(false)} className="font-semibold text-gray-500 duration-300 hover:text-gray-900">
                FAQ
              </Link>
            </nav>

            {/* <div>
              <Drawer>
                <DrawerTrigger asChild className='duration-300 cursor-pointer '>
                  <Languages className="w-5 h-5 text-gray-600 hover:text-headingText" />
                </DrawerTrigger>
                <DrawerContent>
                  <div className="grid gap-4 p-4">
                    <div>
                      <DrawerTitle className="text-lg font-medium">Select Language</DrawerTitle>
                    </div>
                    <div className="grid md:justify-evenly gap-2">
                      <Button onClick={() => { onSelectChange("en") }} variant="ghost" className="justify-start gap-2">
                        <GlobeIcon className="w-5 h-5" />
                        <span>English</span>

                        <CheckIcon className="w-5 h-5 ml-auto" />
                      </Button>

                      <Button onClick={() => { onSelectChange("ar") }} variant="ghost" className="justify-start gap-2">
                        <GlobeIcon className="w-5 h-5" />
                        <span>العربية</span>
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div> */}

            <div className="md:hidden" onClick={() => setPhoneMenu(true)}>
              <RiMenu3Line size={23} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar