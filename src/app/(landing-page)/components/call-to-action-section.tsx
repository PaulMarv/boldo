import Button from '@/shared-components/button'
import Wrapper from '@/shared-components/wrapper'
import React from 'react'

export default function CallToActionSection() {
    return (
        <Wrapper className='pb-[84px]'>
            <div className='bg-primary relative rounded-lg flex flex-col justify-center items-center text-center py-[72px] overflow-clip'>
                <div className="absolute top-[-290%] right-[-50%] w-[1393px] h-[1393px] rounded-full bg-[#1C3D5B]"></div>
                <div className='z-[10]'>
                    <h1 className='font-manrope text-[48px] leading-[72px]  text-white w-full max-w-[716px]'>
                        An enterprise template to ramp up your company website
                    </h1>
                    <div className='mt-[48px] flex items-center justify-center gap-4'>
                        <input placeholder='Your email address' className='rounded-full max-w-[370px] w-full px-[32px] py-[16px] appearance-none border-none focus:outline-none' />
                        <Button className='bg-[#65E4A3] font-sansBold text-primary whitespace-nowrap'>Start now</Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
