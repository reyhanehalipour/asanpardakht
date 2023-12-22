import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { FaArrowLeft } from "react-icons/fa";

export default function VerificationBox() {

    const [otp, setOtp] = useState('');
    console.log(otp)   
    return (

        <div className='md:w-[312px] h-[331px] mx-auto flex flex-col jusfity-center items-center'>
                <form className='justify-center items-center flex flex-col mt-4'>
                    <div className="flex flex-col justify-center items-center">
                     <div className='text-[22px]  text-[#344054] my-3 font-semibold'>کد تایید را وارد کنید</div> 

                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{
                                border: " 1px solid #D0D5DD",
                                borderRadius:'15px',
                                width: "55px",
                                height: "55px",
                                fontSize: "40px",
                                fontWeight:"700px",
                                color: "#667085",
                                fontWeight: "400",
                                caretColor: "blue",
                                marginRight: "10px",
                                background:'#D0D5DD',
                                outlineColor:"purple"
                            }}
                            focusStyle={{
                                border: "1px solid #CFD3DB",
                                outline: "8A599B"
                            }}

                        />
                     <div className=" text-gray text-[13px] mt-5 mb-7">
                     کد دریافت نکردید ؟ 
                    <span className="text-maincolore font-semibold">ارسال دوباره</span>
                </div>
                    </div>


                    <Link to='/'> <button type="submit" className="bg-maincolore text-white  font-bold p-2 rounded bg-blue h-[50px]  w-[390px] flex items-center justify-center">
                        ورود
                    </button></Link>
                </form>
          
            <div className='flex items-center gap-2 text-[#475467] mt-10'>
            <Link to='/login'><div>بازگشت به ورود</div></Link>
            <FaArrowLeft />
            </div>
           

        </div>

    )
}

