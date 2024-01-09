import React from 'react'

export default function PosterMobile({logo,title, text}) {
    return (
        <div className='flex flex-col items-center justify-center md:hidden bg-mobileHeader w-full h-[334px] bg-cover bg-no-repeat'>
            <img src={logo} className='W-[99px] h-[99px]' />
            <div className='text-[30px] font-bold text-white mt-3'> {title}</div>
                <div className='text-[#FAFAFA] text-[16px] font-normal mt-4'>{text}</div>

        </div>
    )
}
