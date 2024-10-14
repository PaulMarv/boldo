import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import Image from 'next/image';
import { features } from '@/lib/data/features';
import Link from 'next/link';
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function OurServicesSection() {
    return (
        <div className='bg-primary mt-[75.6px]'>
            <Wrapper className='lg:px-[156px] px-20 lg:py-[84px] py-[42px] flex flex-col justify-center items-center'>
                <div className='w-full max-w-[842px] text-center'>
                    <p className='lg:text-[20px] text-[18px] text-[#F1F1F1]'>Our Services</p>
                    <p className='lg:leading-[72px] lg:text-[48px] text-[28px] mt-4 lg:mt-0 text-white font-manrope'>Handshake infographic mass market crowdfunding iteration.</p>
                </div>
                <div className='lg:mt-[68px] mt-[34px] flex flex-col lg:flex-row lg:gap-[99px] gap-[40px] justify-between text-white w-full' >
                    {features.map(feature =>
                        <div key={feature.title}>
                            <div className=''>
                                <Image src={feature.imageURL} width={300} height={354} alt='' />
                            </div>
                            <h5 className='lg:text-[24px] text-[18px] lg:mt-[24px] mt-[12px]'>{feature.title}</h5>
                            <div className='inline-block'>
                                <Link href={feature.link} className='font-sansBold lg:text-[20px] text-[16px] lg:mt-[28px] mt-[10px] flex items-center gap-2'><span>Explore page</span><span><ArrowRight size={20} weight="bold" /></span> </Link>
                                <hr className='lg:mt-2 mt-1' />
                            </div>

                        </div>
                    )}
                </div>
            </Wrapper>
        </div>
    )
}
