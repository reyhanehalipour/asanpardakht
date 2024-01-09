import React from 'react'
import {Pagination} from 'swiper/modules';
import SwiperCore from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';
import "./LoginPoster.css"
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/pagination';



export default function LoginPoster() {
  const renderCustomBullet = (index, className) => {
    return (
      `<span class="${className} custom-bullet"></span>`
    );
  };

  
  SwiperCore.use([Pagination]);

  return (
    <div className='hidden  bg-loginposter bg-cover bg-no-repeat h-screen w-[720px] md:flex items-center p-20'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2500, disableOnInteraction:false }}
        pagination={{ clickable: true, renderBullet: renderCustomBullet} }
      >
        <SwiperSlide>
          <div className='h-[500px] mt-[160px] '>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[500px] mt-[160px] '>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[500px] mt-[160px] '>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='h-[500px] mt-[160px] '>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>
        </SwiperSlide>

        
        
      </Swiper>
    </div>
  )
}
