import React, { useState } from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import swal from "sweetalert";
import { FiHelpCircle } from "react-icons/fi";
import axios from "axios";
import { motion ,AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { usePhone } from '../context/phoneContext';




const PhoneInputValidation = () => {
  const navigate = useNavigate();
  // const [phone, setPhone] = useState("");
  const { phone, setPhone } = usePhone();
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");
  console.log(phone);

  const [showPassword, setShowPassword] = useState(false);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    // اعتبارسنجی با استفاده از یک عبارت منظم
    const isValid = /^\d{11}$/.test(inputValue);
    setIsPhoneNumberValid(isValid);
    setPhone(inputValue);
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    // اعتبارسنجی با استفاده از یک شرط ساده (مثلاً حداقل 8 کاراکتر)
    const isValid = inputValue.length >= 8;
    setIsPasswordValid(isValid);
    setPassword(inputValue);
  };

  const handleBlur = () => {
    // اگر در زمان blur، شماره تلفن ولید نباشد، مقدار فیلد را خالی کنید
    if (!isPhoneNumberValid) {
      setPhone("");
    }
    if (!isPasswordValid) {
      setPassword("");
    }
  };

  const sendCode = async (event) => {
    event.preventDefault();

    try {
      // ارسال درخواست به سمت بک‌اند
      const response = await axios.post(`${apiUrl}/users/otp/new`, {
        phone,
      });

      // پردازش پاسخ بک‌اند
      setResponseMessage(response.data.message);

      if (response.status === 200) {
        swal({
          title: "کد برای شما پیامک شد",
          icon: "success",
          buttons: "بستن",
        }).then((value) => {
          navigate("/logincode");
        });
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      // پردازش خطا
      console.error("Error submitting phone number:", error);
      swal({
        title: "مشکلی پیش امده است",
        icon: "error",
        buttons: "بستن",
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-11 md:mt-0">
      <form>
        <label
          htmlFor="phone"
          className="text-[14px] font-semibold text-gray  "
        >
         شماره موبایل:
        </label>
        <div
          className={`p-2 border mt-1  mb-3 flex items-center gap-3 rounded-[8px] transition-all ease-out duration-1000 transform hover:scale-110  h-[50px] w-[360px] ${
            isPhoneNumberValid ? "border-[#D0D5DD]" : "border-red border-2"
          }`}
        >
          <FaMobileScreenButton size={20} color="gray" />
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            className="  w-[343px] md:w-[360px]  p-2 outline-none inline-block"
            placeholder="*******  **09"
          />
          <FiHelpCircle size={20} color={`${isPasswordValid ? "gray" : "#F04438"}`} />
        </div>
        {!isPhoneNumberValid && (
          <div style={{ color: "#F04438" }}>شماره تلفن باید 11 رقم باشد</div>
        )}
        {!showPassword &&<div className="block md:hidden text-[13px] text-[#475467] font-normal">یک کد تایید به این شماره ارسال خواهد شد</div>}
        
        <AnimatePresence>
        {showPassword && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
          >
            <label
              htmlFor="password"
              className="text-[14px] font-semibold text-gray "
            >
              رمز عبور:
            </label>
            <div
              className={`p-2 border mt-1 flex items-center gap-3 rounded-[8px] transition-all ease-out duration-1000 transform hover:scale-110 h-[50px] w-[360px] ${
                isPasswordValid ? "border-[#D0D5DD]" : "border-red border-2"
              }`}
            >
              <MdLockOutline size={20} color="gray" />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handleBlur}
                className="md:w-[360px]  w-[343px]  outline-none text-[#98A2B3] "
              />
              <FiHelpCircle size={20} color={`${isPasswordValid ? "gray" : "#F04438"}`} />
            </div>
          </motion.div>
        )}
        </AnimatePresence>
        {!isPasswordValid && (
          <div className="text-[#F04438] mt-2">رمز عبور باید حداقل 8 کاراکتر باشد</div>
        )}

        {showPassword ? (
          <button
            type="submit"
            className="bg-maincolore  hover:bg-dark text-white p-2 mt-[100px] md:mt-6 bg-blue rounded-[8px]   h-[50px]  w-[343px] md:w-[360px] md:first-letter:w-[360px] flex items-center justify-center"
          >
            ورود
          </button>
        ) : (
          <button
            type="submit"
            className="bg-maincolore hover:bg-dark text-white p-2  mt-[200px] md:mt-6 bg-blue rounded-[8px]  h-[50px]  w-[343px] md:w-[360px] flex items-center justify-center"
            onClick={sendCode}
          >
            شروع کنید
          </button>
        )}
      </form>
      <div className=" text-gray text-[13px] mt-10">
        {showPassword ? "رمز عبور ندارید ؟" : "حساب کابری دارید ؟"}
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="text-maincolore font-semibold"
        >
          {" "}
          {showPassword ? "ورود با رمز یک بار مصرف" : "ورود با رمز عبور"}
        </span>
      </div>
    </div>
  );
};

export default PhoneInputValidation;
