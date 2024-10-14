import React from 'react';
import Image from 'next/image';
import Wrapper from '@/shared-components/wrapper';

export default function BrandSection() {

    const featuredBrands = [
        '/icon/bodo-logo.svg',
        '/icon/presto-logo.svg',
        '/icon/bodo-logo.svg',
        '/icon/presto-logo.svg',
        '/icon/Boldo.svg',
        '/icon/pres-logo.svg',
    ]

    return (
        <Wrapper>
            <section className='lg:mt-[100px] mt-[50px] px-[20px] lg:px-[100px] flex flex-col lg:flex-row gap-10 justify-between items-center relative'>
                {featuredBrands.map((brand, index) =>
                    <div key={brand} className=''>
                        <Image alt='' src={brand} height={41.8} width={index === 4 || index === 5 ? 105 : 146}  />
                    </div>
                )}
            </section>
        </Wrapper>
    )
}
