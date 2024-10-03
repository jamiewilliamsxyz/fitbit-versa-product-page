'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './carousel.css';

const Carousel = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className='flex items-center justify-center self-center mb-10'>
            <div className='flex justify-center items-center flex-col sm:flex-row w-full sm:w-[50rem] bg-gray-50 rounded-3xl px-5 sm:px-10 pt-5 pb-8 shadow-lg gap-6 sm:gap-12'>
              <div className='flex justify-center flex-col'>
                <img src='/images/review1.jpg' alt='Product' className='w-full rounded-xl border-2 border-green-300 shadow-xl'/>
              </div>
              <div className='flex justify-center p-5 sm:p-10 max-w-[26rem] flex-col'>
                <h4 className='text-2xl sm:text-3xl font-medium text-center mb-5'>Micaela Neves</h4>
                <p className='text-base sm:text-lg text-left'><q>I am satisfied with my watch. The battery is long-lasting, the Fitbit app is modern and practical. In addition to all the normal recordings of steps, running, physical exercise, there is an aspect with online classes such as pilates, cardio, etc.</q></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center self-center mb-10'>
            <div className='flex justify-center items-center flex-col sm:flex-row w-full sm:w-[50rem] bg-gray-50 rounded-3xl px-5 sm:px-10 pt-5 pb-8 shadow-lg gap-6 sm:gap-12'>
              <div className='flex justify-center flex-col'>
                <img src='/images/review2.jpg' alt='Product' className='w-full rounded-xl border-2 border-green-300 shadow-xl'/>
              </div>
              <div className='flex justify-center p-5 sm:p-10 max-w-[26rem] flex-col'>
                <h4 className='text-2xl sm:text-3xl font-medium text-center mb-5'>Shingaru</h4>
                <p className='text-base sm:text-lg text-left'><q>I've been really happy with my Fitbit Versa 4 Fitness Smartwatch. It features a built-in GPS that accurately tracks my runs and bike rides without needing my phone. The battery life is impressive, lasting up to 6 days on a single charge.</q></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center self-center mb-10'>
            <div className='flex justify-center items-center flex-col sm:flex-row w-full sm:w-[50rem] bg-gray-50 rounded-3xl px-5 sm:px-10 pt-5 pb-8 shadow-lg gap-6 sm:gap-12'>
              <div className='flex justify-center flex-col'>
                <img src='/images/review3.jpg' alt='Product' className='w-full rounded-xl border-4 border-green-300 shadow-xl'/>
              </div>
              <div className='flex justify-center p-5 sm:p-10 max-w-[26rem] flex-col'>
                <h4 className='text-2xl sm:text-3xl font-medium text-center mb-5'>DimmuTaake</h4>
                <p className='text-base sm:text-lg text-left'><q>I've had this for a couple of months now, and most importantly I use it to track calories burnt during my weight sessions in the gym. The Versa 4 syncs with my other apps nicely which is very handy indeed when wanting more data.</q></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
