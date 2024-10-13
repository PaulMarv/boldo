import Wrapper from '@/shared-components/wrapper';
import React from 'react';
import Image from 'next/image';
import FAQAccordion from '@/shared-components/accordion';
import { faqs } from '@/lib/data/faqs';

export default function Faq() {
  return (
    <Wrapper className='px-[150px] py-[120px]'>
      <div>
        <Image src='/images/faq-img.svg' alt='' width={4000} height={403}/>
      </div>
      <div className='mt-[56px] flex justify-between'>
        <h2 className='leading-[56px] text-[36px] font-manrope max-w-[500px] w-full'>
        We connect our customers with the best, and help them keep up-and stay open.
        </h2>
        <div>
              <FAQAccordion faqs={faqs}/>
        </div>
      </div>
    </Wrapper>
  )
}
