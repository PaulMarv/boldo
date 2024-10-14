import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { testimonial } from '@/lib/data/testimonial';
import Image from 'next/image';

export default function TestimonialSection() {
    return (
        <section className=' lg:py-[100px] py-[50px] bg-primary lg:mt-[150px]'>
            <Wrapper className=''>
                <div className='lg:px-[150px] px-[20px]'>
                    <div className='flex lg:flex-row lg:items-end justify-between flex-col'>
                        <h1 className='lg:text-[48px] text-[28px] text-white font-manrope lg:leading-[72px] lg:max-w-[716px]'>
                            An enterprise template to ramp up your company website
                        </h1>
                        <div className='hidden gap-3 lg:flex lg:mt-0 mt-5 justify-center lg:justify-start' >
                            <span className='rounded-full bg-white flex items-center justify-center lg:h-[72px] w-[36px] lg:w-[72px] h-[36px]'>
                                <ArrowRight size={24} weight='bold' />
                            </span>
                            <span className='rounded-full bg-white flex items-center justify-center lg:h-[72px] w-[36px] lg:w-[72px] h-[36px]'>
                                <ArrowLeft size={24} weight='bold' />
                            </span>
                        </div>
                    </div>
                    <div className='lg:mt-[74px] mt-[37px] grid grid-cols-1 lg:grid-cols-3 lg:justify-between justify-items-center lg:gap-[50px] gap-6'>
                        {testimonial.map(testimony =>
                            // testimonial card
                            <div key={testimony.name} className='p-[40px] w-full max-w-[350px] rounded-lg bg-white h-fit'>
                                <h1 className='lg:text-[24px] text-[20px] lg:leading-[36px]'>
                                    {testimony.text}
                                </h1>
                                <div className='lg:mt-[40px] mt-[20px] flex items-center gap-[16px]'>
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
                </div>
            </Wrapper>
        </section>
    )
}

