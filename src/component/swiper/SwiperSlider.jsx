"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useViewHeroSectionsQuery } from "@/redux/services/heroApi";

const SwiperSlider = () => {
  const { data, isLoading, isError, error } = useViewHeroSectionsQuery();

  const sliders = data?.data;


  if (isLoading) {
    return (
      <header className="relative w-full overflow-hidden">
        {/* Skeleton banner */}
        <div className="w-full h-[60vh] sm:h-screen bg-green-50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-green-100 to-green-50 animate-[pulse_1.8s_ease-in-out_infinite]" />
          {/* Subtle stripes */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(34,197,94,0.08)_25%,transparent_25%,transparent_50%,rgba(34,197,94,0.08)_50%,rgba(34,197,94,0.08)_75%,transparent_75%,transparent)] bg-[length:2rem_100%]" />
          {/* Centered spinner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-14 w-14 animate-spin text-green-300"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Loading"
            >
              <path
                d="M32 3c4.58 0 9.09 1.08 13.17 3.16C49.25 8.24 52.78 11.26 55.47 14.96c2.69 3.7 4.47 8 5.17 12.52.72 4.52.35 9.17-1.08 13.5"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="text-green-500"
              />
              <path
                d="M32 61c-3.81 0-7.58-.75-11.1-2.2-3.52-1.45-6.73-3.58-9.37-6.22-2.64-2.64-4.77-5.85-6.22-9.37C3.86 39.7 3.11 35.92 3.11 32"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                className="text-green-200"
              />
            </svg>
          </div>          
        </div>
      </header>
    );
  }

  if (isError) {
    return null;
  }

  return (
    <header className="relative w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {sliders?.map((slider) => (
          <SwiperSlide>
            <img
              src={slider?.file}
              alt="Slide 1"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default SwiperSlider;
