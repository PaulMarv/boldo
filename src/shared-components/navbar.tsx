'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Button from './button';
import { List } from '@phosphor-icons/react';
import Wrapper from './wrapper';

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

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className={` z-[1000] flex items-center justify-center w-full fixed top-0 lg:top-[56px] bg-white lg:bg-transparent shadow-sm lg:shadow-none`}>
            <Wrapper>
                <div className={` hidden lg:flex items-center justify-between w-full ease-in-out duration-500 rounded-full ${scrolled ? 'bg-white p-3 shadow-md pl-7' : 'bg-transparent'}`}>
                    <Image
                        src='/icon/bodo-logo.svg'
                        height={42}
                        width={scrolled ? 140 : 162}
                        alt=''
                    />
                    <div className='flex items-center gap-[40px] font-sansBold'>
                        <Link href="#">Product</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">About</Link>
                        <Link href="#"><Button variant='outline' size='md'>Log In</Button></Link>
                    </div>
                </div>
                {/* MOBILE NAVBAR */}
                <div className={`lg:hidden w-full flex justify-between px-[20px]`}>
                    <Image
                        src='/icon/bodo-logo.svg'
                        height={42}
                        width={120}
                        alt=''
                    />
                    <span onClick={toggleNavbar} className='text-primary mr-2 py-6'>
                        <List size={28} weight='bold' />
                    </span>
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-primary text-white p-8 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                            } transition-transform duration-300 ease-in-out z-50`}
                    >
                        <Image
                            src='/icon/whiteLogo.svg'
                            height={42}
                            width={90}
                            alt=''
                            onClick={toggleNavbar}
                        />
                        <div className='flex flex-col gap-[40px] mt-8 font-sansBold'>
                            <Link href="#">Product</Link>
                            <Link href="#">Services</Link>
                            <Link href="#">About</Link>
                            <Link href="#"><Button variant='outline' size='lg' className='text-white border-white'>Log In</Button></Link>
                        </div>
                    </div>

                    {/* Overlay when the menu is open */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black opacity-50"
                            onClick={toggleNavbar}
                        ></div>
                    )}
                </div>
            </Wrapper>
        </nav>
    )
}
