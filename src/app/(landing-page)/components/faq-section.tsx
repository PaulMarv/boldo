import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import Image from 'next/image';
import FAQAccordion from '@/shared-components/accordion';
import { faqs } from '@/lib/data/faqs';

export default function Faq() {
  return (
    <Wrapper className='lg:px-[50px] lg:py-[120px] px-[20px] py-[60px]'>
      <div>
        <Image src='/images/faq-img.svg' alt='' width={4000} height={403}/>
      </div>
      <div className='lg:mt-[56px] mt-[27px] flex flex-col lg:flex-row justify-between'>
        <h2 className='lg:leading-[56px] lg:text-[36px] text-[24px] font-manrope lg:max-w-[500px] w-full'>
        We connect our customers with the best, and help them keep up-and stay open.
        </h2>
        <div className='mt-4 lg:mt-0'>
              <FAQAccordion faqs={faqs}/>
        </div>
      </div>
    </Wrapper>
  )
}
