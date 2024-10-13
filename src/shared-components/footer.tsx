import React from 'react'
import Wrapper from './wrapper';
import Image from 'next/image';

export default function Footer() {
  return (
    <Wrapper className='flex lg:flex-row flex-col justify-between py-[100px] gap-[179px] text-[#777777]'>
      <div className='w-full max-w-[300px]'>
        <Image src='/icon/bodo-logo.svg' alt='' width={156} height={23} />
        <p className='mt-[40px]'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
        <p className='mt-[64px]'>All rights reserved</p>
      </div>
      <div className='flex lg:gap-[96px] flex-wrap lg:flex-nowrap text-[20px]'>
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
                <span>Career</span>
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
    </Wrapper>
  )
}
