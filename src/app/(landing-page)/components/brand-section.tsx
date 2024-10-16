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
        <Wrapper className='px-[20px] lg:px-[100px]'>
            <section className='relative w-full lg:mt-[100px] mt-[50px] px-[20px] lg:px-[100px] overflow-hidden'>
                <section className='hidden lg:flex flex-col lg:flex-row gap-10 justify-between items-center'
                    style={{ animation: 'scrollBrands 20s linear infinite' }}
                >
                    {[...featuredBrands, ...featuredBrands].map((brand, index) =>
                        <div key={brand} className='flex-shrink-0'>
                            <Image alt='' src={brand} height={41.8} width={index === 4 || index === 5 || index === 10 || index === 11  ? 105 : 146} />
                        </div>
                    )}
                </section>

                {/* MOBILE BRANDS */}
                <section className='lg:hidden flex flex-col lg:flex-row gap-10 justify-between items-center'
                >
                    {featuredBrands.map((brand, index) =>
                        <div key={brand} className='flex-shrink-0'>
                            <Image alt='' src={brand} height={41.8} width={index === 4 || index === 5 || index === 10 || index === 11  ? 105 : 146} />
                        </div>
                    )}
                </section>
            </section>
        </Wrapper>
    )
}
