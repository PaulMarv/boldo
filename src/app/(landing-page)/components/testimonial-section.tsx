import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { testimonial } from '@/lib/data/testimonial';
import Image from 'next/image';

export default function TestimonialSection() {
    return (
        <Wrapper className='px-[150px] py-[100px] bg-primary mt-[150px]'>
            <div className='flex lg:flex-row lg:items-end justify-between flex-col'>
                <h1 className='text-[48px] text-white font-manrope leading-[72px] max-w-[716px]'>
                    An enterprise template to ramp up your company website
                </h1>
                <div className='gap-3 flex' >
                    <span className='rounded-full bg-white flex items-center justify-center h-[72px] w-[72px]'>
                        <ArrowRight size={24} weight='bold' />
                    </span>
                    <span className='rounded-full bg-white flex items-center justify-center h-[72px] w-[72px]'>
                        <ArrowLeft size={24} weight='bold' />
                    </span>
                </div>
            </div>
            <div className='mt-[74px] grid grid-cols-1 lg:grid-cols-3 justify-between gap-[50px]'>
                {testimonial.map(testimony =>
                    // testimonial card
                    <div key={testimony.name} className='p-[40px] w-full max-w-[350px] rounded-lg bg-white h-fit'>
                        <h1 className='text-[24px] leading-[36px]'>
                            {testimony.text}
                        </h1>
                        <div className='mt-[40px] flex items-center gap-[16px]'>
                            <div>
                                <Image src={testimony.imageURL} alt='' height={58} width={58} />
                            </div>
                            <div>
                                <p className='font-sansBold text-primary'>{testimony.name}</p>
                                <p className='text-[#0A2640] text-[14px]'>{testimony.email}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

