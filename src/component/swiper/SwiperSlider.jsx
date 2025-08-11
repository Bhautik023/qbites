'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <header className="relative w-full overflow-hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full"
                >
                    <SwiperSlide>
                        <img
                            src="/images/home/slider-1.png"
                            alt="Slide 1"
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/images/home/slider-2.png"
                            alt="Slide 2"
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </header>
  )
}

export default SwiperSlider