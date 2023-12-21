import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
export default function MainPage() {
    return (
        <center className='mt-[300px]'>
            <img src={logo} alt='logo' />
            <Link to='/login'>  <button className='bg-maincolore w-[70px] h-[40px] mt-5 rounded-md text-white font-bold'>ورود</button></Link>
        </center>

    )
}
