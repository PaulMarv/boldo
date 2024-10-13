import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import Image from 'next/image';
import { features } from '@/lib/data/features';
import Link from 'next/link';
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function OurServicesSection() {
    return (
        <div className='bg-primary mt-[75.6px]'>
            <Wrapper className='px-[156px] py-[84px] flex flex-col justify-center items-center'>
                <div className='w-full max-w-[842px] text-center'>
                    <p className='text-[20px] text-[#F1F1F1]'>Our Services</p>
                    <p className='leading-[72px] text-[48px] text-white font-manrope'>Handshake infographic mass market crowdfunding iteration.</p>
                </div>
                <div className='mt-[68px] flex gap-[99px] justify-between text-white w-full' >
                    {features.map(feature =>
                        <div key={feature.title}>
                            <div className=''>
                                <Image src={feature.imageURL} width={300} height={354} alt='' />
                            </div>
                            <h5 className='text-[24px] mt-[24px]'>{feature.title}</h5>
                            <div className='inline-block'>
                                <Link href={feature.link} className='font-sansBold text-[20px] mt-[28px] flex items-center gap-2'><span>Explore page</span><span><ArrowRight size={20} weight="bold" /></span> </Link>
                                <hr className='mt-2' />
                            </div>

                        </div>
                    )}
                </div>
            </Wrapper>
        </div>
    )
}
