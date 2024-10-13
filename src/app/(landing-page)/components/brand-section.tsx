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
        <Wrapper className='mt-[100px]'>
            <section className='flex justify-between items-center px-4 relative'>
                {featuredBrands.map((brand, index) =>
                    <div key={brand} className=''>
                        <Image alt='' src={brand} height={41.8} width={index === 4 || index === 5 ? 105 : 146}  />
                    </div>
                )}
            </section>
        </Wrapper>
    )
}
