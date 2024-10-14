import { blogData } from '@/lib/data/blog';
import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import Image from 'next/image';
import Button from '@/shared-components/button';

export default function Blog() {
    return (
        <Wrapper className='lg:px-[201px] lg:pb-[120px] pb-[60px] flex flex-col justify-between'>
            <div className='text-center'>
                <p className='text-[#C4C4C4] lg:text-[20px] text-[14px]'>Our Blog</p>
                <h1 className='font-manrope lg:text-[48px] text-[28px] lg:leading-[72px]'>Value proposition accelerator product management venture</h1>
            </div>
            <div className='lg:mt-[79px] mt-[37px] flex flex-col lg:flex-row lg:justify-between gap-6 justify-center items-center'>
                {/* blog card */}
                {blogData.map(data =>
                    <div key={data.title} className='w-full flex flex-col max-w-[300px]'>
                        <div>
                            <Image src={data.post_img} alt='' height={210} width={300} />
                        </div>
                        <div className='lg:mt-6 mt-3 flex flex-grow flex-col justify-between'>
                            <div>
                                <div className='flex gap-2'>
                                    <span className='text-primary text-[14px] lg:text-[16px] font-sansBold'>Category</span>
                                    <span className='text-[#777777] text-[14px] lg:text-[16px]'>{data.date}</span>
                                </div>
                                <p className='lg:mt-[12px] mt-[6px] lg:text-[20px] text-[16px]'>
                                    {data.title}
                                </p>
                            </div>
                            <div className='flex items-center gap-2 lg:mt-4 mt-2'>
                                <span>
                                    <Image src={data.auther_img} alt='' height={32} width={32} />
                                </span>
                                <span>{data.author}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='lg:mt-[42px] mt-[84px] flex justify-center'>
                <Button variant='outline' className='font-sansBold'>Load more</Button>
            </div>
        </Wrapper>
    )
}
