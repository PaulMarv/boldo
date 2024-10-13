import React from 'react';
import Image from 'next/image';
import Button from '@/shared-components/button'
import Wrapper from '@/shared-components/wrapper'

export default function HeroSection() {
    return (
        <section className='w-full relative pt-[144px] overflow-clip'>
            <div className="absolute top-[-160%] right-[-50%] w-[1393px] h-[1393px] rounded-full bg-[#F1F1F1]"></div>
            <Wrapper className=''>
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='w-full max-w-[601px]'>
                        <h1 className='font-manrope text-5xl leading-[72px]'>
                            Save time by building  fast with Boldo Template
                        </h1>
                        <p className='text-[#777777] mt-[19px]'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                        <div className='flex gap-6 mt-[49px]'>
                            <Button className='font-sansBold'>Buy template</Button>
                            <Button className='font-sansBold' variant='outline'>Explore</Button>
                        </div>
                    </div>
                    <div>
                        <div className='relative w-[493.86px]'>
                            <Image src='/images/hero-img1.svg' alt='hero-img' height={240} width={500} />
                        </div>
                        <div className='flex relative h-[165px] gap-[38.65px] mt-[25.77px]'>
                            <div className='relative w-[192.18px]'>
                                <Image src='/images/hero-img2.svg' alt='hero-img' fill />
                            </div>
                            <div className='relative w-[261.96px]'>
                                <Image src='/images/hero-img3.svg' alt='hero-img' fill />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
