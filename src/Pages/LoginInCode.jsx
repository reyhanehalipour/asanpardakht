import React from 'react'
import LoginPoster from '../Components/LoginPoster'
import phoneicon from '../assets/phoneicon.png'
import LoginCodeForm from '../Components/LoginCodeForm'
import PosterMobile from '../Components/PosterMobile'

import { usePhone } from '../context/phoneContext';

export default function LoginInCode() {
    const { phone } = usePhone();
    return (
        <div className=' flex-col md:flex md:flex-row justify-between items-center'>
            <div >
                <LoginPoster />
                <PosterMobile title='تایید شماره موبایل' text={`یک پیامک به شماره ${phone} ارسال شد`} logo={phoneicon}/>
            </div>
            <div className=' w-screen md:w-1/2 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={phoneicon} className='hidden md:block' />
                    <div className=' hidden md:block text-black text-[30px] font-bold'>تایید شماره موبایل</div>
                    <div className='hidden md:block text-[#667085] text-[16px] mt-3'>یک پیامک به شماره {phone} ارسال شد.</div>
                    <div>
                        <LoginCodeForm />
                    </div>

                </div>
            </div>

        </div>
    )
}
