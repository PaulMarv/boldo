import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import Image from 'next/image';
import Button from '@/shared-components/button';
import { CheckCircle, Sun, Eye } from "@phosphor-icons/react/dist/ssr";

export default function InfographicsSection() {
    return (
        <Wrapper >
            <section className='lg:px-[156px] px-[20px] lg:py-[120px] py-[60px]'>
                <div className='flex justify-between items-center lg:flex-row flex-col lg:gap-[150px] '>
                    <div className='relative'>
                        <div>
                            <Image src='/images/services-img1.svg' height={479} width={493} alt='' />
                        </div>
                        <div className='lg:absolute lg:translate-x-[70%]  lg:-translate-y-[70%] flex justify-center'>
                            <Image src='/images/services-barchart.svg' height={388} width={251} alt='' />
                        </div>
                    </div>
                    <div className='w-full lg:max-w-[493px] '>
                        <h2 className='lg:leading-[56px] lg:text-[36px] text-[24px] font-manrope'>
                            We connect our customers with the best, and help them keep up-and stay open.
                        </h2>
                        <div className='flex flex-col gap-2 lg:text-[20px] text-[16px] mt-[40px] '>
                            {
                                ['We connect our customers with the best.',
                                    'Advisor success customer launch party.',
                                    'Business-to-consumer long tail.'
                                ].map(service =>
                                    <div key={service} className='flex gap-[27px] items-center'>
                                        <span className='text-primary'>
                                            <CheckCircle size={24} weight="fill" />
                                        </span>
                                        <span>{service}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Button className='font-sansBold lg:mt-[56px] mt-[28px]'>Start now</Button>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center lg:flex-row flex-col lg:gap-[150px] lg:mt-[160px] mt-[80px]'>
                    <div className='w-full lg:max-w-[493px] '>
                        <h2 className='lg:leading-[56px] lg:text-[36px] text-[24px] font-manrope'>
                            We connect our customers with the best, and help them keep up-and stay open.
                        </h2>
                        <div className='flex flex-col gap-6 lg:text-[20px] lg:mt-[40px] mt-[20px]'>
                            <div className='flex gap-[20px] text-[14px] lg:text-[16px] lg:p-5 p-2 bg-primary font-sansMedium text-white rounded-md'>
                                <span><Image src='/icon/leaf-icon.svg' height={24} width={24} alt='' /></span>
                                <span>We connect our customers with the best.</span>
                            </div>
                            <div className='flex gap-[20px] text-[14px] lg:text-[16px] lg:p-5 p-2 bg-white shadow-lg font-sansMedium rounded-md'>
                                <span className='text-primary'><Eye size={24} /></span>
                                <span>Advisor success customer launch party.</span>
                            </div>
                            <div className='flex gap-[20px] text-[14px] lg:text-[16px] lg:p-5 p-2 bg-white shadow-lg font-sansMedium rounded-md'>
                                <span className='text-primary'><Sun size={24} /></span>
                                <span>Advisor success customer launch party.</span>
                            </div>
                        </div>

                    </div>
                    <div className='relative lg:mt-0 mt-[75px]'>
                        <div>
                            <Image src='/images/services-img2.svg' height={523} width={444} alt='' />
                        </div>
                        <div className='lg:absolute lg:translate-x-[20%]  lg:-translate-y-[70%] flex justify-center'>
                            <Image src='/images/services-piechart.svg' height={388} width={291} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
