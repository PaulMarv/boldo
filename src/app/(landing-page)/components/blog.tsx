import { blogData } from '@/lib/data/blog';
import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import Image from 'next/image';
import Button from '@/shared-components/button';

export default function Blog() {
    return (
        <Wrapper className='px-[201px] pb-[120px] flex flex-col justify-between'>
            <div className='text-center'>
                <p className='text-[#C4C4C4] text-[20px] '>Our Blog</p>
                <h1 className='font-manrope text-[48px] leading-[72px]'>Value proposition accelerator product management venture</h1>
            </div>
            <div className='mt-[79px] flex justify-between'>
                {/* blog card */}
                {blogData.map(data =>
                    <div key={data.title} className='w-full flex flex-col max-w-[300px]'>
                        <div>
                            <Image src={data.post_img} alt='' height={210} width={300} />
                        </div>
                        <div className='mt-6 flex flex-grow flex-col justify-between'>
                            <div>
                                <div className='flex gap-2'>
                                    <span className='text-primary font-sansBold'>Category</span>
                                    <span className='text-[#777777]'>{data.date}</span>
                                </div>
                                <p className='mt-[12px] text-[20px]'>
                                    {data.title}
                                </p>
                            </div>
                            <div className='flex items-center gap-2 mt-4'>
                                <span>
                                    <Image src={data.auther_img} alt='' height={32} width={32} />
                                </span>
                                <span>{data.author}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='mt-[84px] flex justify-center'>
                <Button variant='outline' className='font-sansBold'>Load more</Button>
            </div>
        </Wrapper>
    )
}
