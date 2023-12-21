import React from 'react'
import logo from '../assets/Logo.png'
import LoginPoster from '../Components/LoginPoster'
import LoginNumberForm from '../Components/LoginNumberForm'
export default function Login() {
    return (
        <div className='flex justify-between items-center'>
            <div >
                <LoginPoster />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div className='w-[360px] h-[394px] flex flex-col justify-center items-center'>
                    <img src={logo} alt='logo' />
                    <div className='text-text text-[16px] font-normal my-[40px] '>جهت ورود و ثبت نام شماره تلفن خود را وارد کنید</div>
                    <div>
                        <LoginNumberForm />
                    </div>
                </div>

            </div>

        </div>
    )
}
