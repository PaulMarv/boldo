'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Button from './button';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 10) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


  return (
    <nav className={`px-[100px] z-[1000] flex items-center justify-center w-full fixed top-[56px]`}>
        <div className={` flex items-center justify-between w-full ease-in-out duration-500 rounded-full ${scrolled?'bg-white p-3 shadow-md pl-7':'bg-transparent'}`}>
        <Image
        src='/icon/bodo-logo.svg'
        height={42}
        width={scrolled?140:162}
        alt=''
        />
        <div className='flex items-center gap-[40px] font-sansBold'>
            <Link href="#">Product</Link>
            <Link href="#">Services</Link>
            <Link href="#">About</Link>
            <Link href="#"><Button variant='outline' size='md'>Log In</Button></Link>
        </div>
        </div>
    </nav>
  )
}
