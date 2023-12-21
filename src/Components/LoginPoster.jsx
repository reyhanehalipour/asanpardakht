import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


export default function LoginPoster() {

  
   

  return (
    <div className='bg-loginposter h-screen w-[720px] flex items-center p-20'>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
       
        loop
        autoplay={{ delay: 2500, disableOnInteraction:false }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="text-white text-[65px] font-bold">سامانه<br />
              پرداخت ارزی</div>
            <div className='text-white text-[20px] font-normal'>  ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br />از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
