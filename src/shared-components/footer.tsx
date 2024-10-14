import React from 'react'
import Wrapper from './wrapper';
import Image from 'next/image';
import Button from './button';

export default function Footer() {
    return (
        <Wrapper className='px-[20px] lg:px-0 flex lg:flex-row flex-col justify-between lg:py-[100px] py-[50px] lg:gap-[179px] text-[#777777]'>
            <div className='w-full max-w-[300px]'>
                <Image src='/icon/bodo-logo.svg' alt='' width={126} height={23} />
                <p className='lg:mt-[40px] mt-[20px] '>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <p className='mt-[64px] hidden lg:block'>All rights reserved</p>
            </div>
            <div className='flex flex-row gap-[50px] lg:gap-[96px] flex-wrap lg:flex-nowrap justify-between lg:text-[20px] text-[16px] mt-5 lg:mt-0'>
                <div>
                    <h5 className='font-sansBold text-primary'>Landings</h5>
                    <div className='flex flex-col gap-6 mt-7'>
                        <span>Home</span>
                        <span>Products</span>
                        <span>Services</span>
                    </div>
                </div>

                <div>
                    <h5 className='font-sansBold text-primary'>Company</h5>
                    <div className='flex flex-col gap-6 mt-7'>
                        <span>Home</span>
                        <span className='flex gap-2 items-center'><span>Career</span><Button size='sm' className='text-primary bg-[#65E4A3] px-3 py-4'>Hiring!</Button></span>
                        <span>Services</span>
                    </div>
                </div>

                <div>
                    <h5 className='font-sansBold text-primary'>Resources</h5>
                    <div className='flex flex-col gap-6 mt-7'>
                        <span>Blog</span>
                        <span>Products</span>
                        <span>Services</span>
                    </div>
                </div>
            </div>
            <p className='mt-[34px] lg:hidden'>All rights reserved</p>
        </Wrapper>
    )
}
