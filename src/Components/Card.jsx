"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Card() {
  const images = [
    "/gymlogo.jpg",
    "/gymlogo.jpg",
    "/gymlogo.jpg",
    "/gymlogo.jpg",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto relative mb-10 mt-5 md:mt-5 lg:mt-1 px-4">
      <h2 className="text-2xl text-center mb-8 font-bold">Training Highlights</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gym Image ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-center mt-2 text-gray-500">Powered By Ultra Fitness</p>
    </div>
    
  );
}
