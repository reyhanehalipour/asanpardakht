import React from 'react'
import LoginPoster from '../Components/LoginPoster'
import phoneicon from '../assets/phoneicon.png'
import LoginCodeForm from '../Components/LoginCodeForm'
export default function LoginInCode() {
    return (
        <div className='flex justify-between items-center'>
            <div >
                <LoginPoster />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={phoneicon} />
                    <div className='text-black text-[30px] font-bold'>تایید شماره موبایل</div>
                    <div className='text-[#667085] text-[16px] mt-3'>یک پیامک به شماره 0935***25623 ارسال شد.</div>
                    <div>
                        <LoginCodeForm />
                    </div>

                </div>
            </div>

        </div>
    )
}