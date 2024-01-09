import React from 'react'
import logo from '../assets/Logo.png'
import LoginPoster from '../Components/LoginPoster'
import LoginNumberForm from '../Components/LoginNumberForm'
import PosterMobile from '../Components/PosterMobile'
import logoMobile from '../assets/Logomark.png'
export default function Login() {
    return (
        <div className=' flex-col md:flex  md:flex-row justify-between items-center'>
            <div >
                <LoginPoster/>
               
               <PosterMobile title='خوش امدید' text='جهت ورود و ثبت نام شماره تلفن خود را وارد کنید'logo={logoMobile}/>
                
            </div>
            <div className=' w-screen md:w-1/2 flex flex-col justify-center items-center'>
                <div className=' w-screen md:w-[360px] h-[394px] flex flex-col justify-center items-center'>
                    <img src={logo} alt='logo' className='hidden md:block' />
                    <div className=' hidden md:block text-text text-[16px] font-normal my-[40px] '>جهت ورود و ثبت نام شماره تلفن خود را وارد کنید</div>
                    <div>
                        <LoginNumberForm />
                    </div>
                </div>

            </div>

        </div>
    )
}
