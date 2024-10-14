import React from 'react';
import Image from 'next/image';
import Button from '@/shared-components/button'
import Wrapper from '@/shared-components/wrapper'

export default function HeroSection() {
    return (
        <section className='relative overflow-clip'>
            <div className="hidden lg:block absolute top-[-160%] right-[-56%] w-[100vw] aspect-square rounded-full bg-[#F1F1F1]"></div>
            <Wrapper className='px-[20px] lg:pt-[144px] pt-[100px]'>
                <div className='z-[10] flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-full lg:max-w-[601px]'>
                        <h1 className='font-manrope lg:text-5xl lg:leading-[72px] text-[28px]'>
                            Save time by building  fast with Boldo Template
                        </h1>
                        <p className='text-[#777777] mt-[19px]'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                        <div className='flex flex-col lg:flex-row gap-6 mt-[49px] justify-center lg:justify-start'>
                            <div className=''>
                                <Button className='font-sansBold'>Buy template</Button>
                            </div>
                            <div className=''>
                                <Button className='font-sansBold' variant='outline'>Explore</Button>
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-8 lg:mt-0'>
                        <div className='relative max-w-[493.86px] w-full'>
                            <Image src='/images/hero-img1.svg' alt='hero-img' height={240} width={500} />
                        </div>
                        <div className='flex flex-row relative h-[165px] lg:gap-[38.65px] gap-[20px] mt-[25.77px]'>
                            <div className='relative w-full max-w-[192.18px] h-[165px]'>
                                <Image src='/images/hero-img2.svg' alt='hero-img' fill />
                            </div>
                            <div className='relative w-full max-w-[261.96px] h-[165px]'>
                                <Image src='/images/hero-img3.svg' alt='hero-img' fill />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
