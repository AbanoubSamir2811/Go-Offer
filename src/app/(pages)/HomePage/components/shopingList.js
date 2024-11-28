"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const ShopingList = ({data}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    { id: 1, title: "الجوالات والمستلزمات", img: "/Google-Products-PNG 1.png" },
    { id: 2, title: "المنزل الذكى", img: "/product2.png" },
    { id: 3, title: "البقالة", img: "/Almarai-Brand-Product-Group95202241902PM 1.png" },
    { id: 4, title: "الملابس", img: "/mens_imperial_fern_saudi_thobe_jubba_for_men_thawb_dishdasha_caftan3_e3064586-8be5-410e-991e-1d91ec2249e9 2.png" },
    { id: 5, title: "الجوالات والمستلزمات", img: "/Google-Products-PNG 1.png" },
    { id: 6, title: "المنزل الذكى", img: "/product2.png" },
    { id: 7, title: "البقالة", img: "/Almarai-Brand-Product-Group95202241902PM 1.png" },
    { id: 8, title: "الملابس", img: "/mens_imperial_fern_saudi_thobe_jubba_for_men_thawb_dishdasha_caftan3_e3064586-8be5-410e-991e-1d91ec2249e9 2.png" },
  ];

  return (
    <div className="w-full h-[290px] flex flex-col items-center justify-center mt-24 mx-3">
      <div className="flex justify-between h-[34px] w-[90vw] items-center">
        <p className="font-[800] text-[32px] text-[#262254]">تسوق حسب الفئات</p>
        {/* Custom Navigation */}
        <div className="custom-navigation flex mb-2 h-[34px] items-center">
          <button ref={prevRef} className="custom-prev w-fit mx-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#9977CE"/>
              <path d="M20.4447 15.3757L13.3245 8.25561C13.1598 8.0908 12.94 8 12.7056 8C12.4712 8 12.2513 8.0908 12.0866 8.25561L11.5623 8.77983C11.2211 9.12142 11.2211 9.6766 11.5623 10.0177L17.5413 15.9967L11.5557 21.9823C11.391 22.1471 11.3 22.3668 11.3 22.6011C11.3 22.8357 11.391 23.0554 11.5557 23.2203L12.08 23.7444C12.2448 23.9092 12.4645 24 12.6989 24C12.9333 24 13.1532 23.9092 13.3179 23.7444L20.4447 16.6178C20.6098 16.4525 20.7004 16.2317 20.6999 15.9971C20.7004 15.7615 20.6098 15.5409 20.4447 15.3757Z" fill="white"/>
            </svg>
          </button>
          <button ref={nextRef} className="custom-next w-fit h-fit">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#9977CE"/>
                <path d="M10.5553 15.3757L17.6755 8.25561C17.8402 8.0908 18.06 8 18.2944 8C18.5288 8 18.7487 8.0908 18.9134 8.25561L19.4377 8.77983C19.7789 9.12142 19.7789 9.6766 19.4377 10.0177L13.4587 15.9967L19.4443 21.9823C19.609 22.1471 19.7 22.3668 19.7 22.6011C19.7 22.8357 19.609 23.0554 19.4443 23.2203L18.92 23.7444C18.7552 23.9092 18.5355 24 18.3011 24C18.0667 24 17.8468 23.9092 17.6821 23.7444L10.5553 16.6178C10.3902 16.4525 10.2996 16.2317 10.3001 15.9971C10.2996 15.7615 10.3902 15.5409 10.5553 15.3757Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        breakpoints={{
          // when window width is <= 640px
          500: {
            slidesPerView: 1,
          },
          670: {
            slidesPerView: 2,
          },
          // when window width is <= 768px
          1010: {
            slidesPerView: 3,
          },
          // when window width is <= 1024px
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        spaceBetween={10} // Space between slides
        slidesPerView="auto" // Show multiple cards
        slidesPerGroup={1} // Slide only one card at a time
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="flex w-[90vw] h-[290px] justify-center"
      >
        {data.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-[293px] flex-shrink-0 mt-16 flex justify-center" // Ensure slides don't shrink
          >
            <div className="h-[172px] w-[293px] bg-white relative flex items-end justify-center pb-3 shadow-md shadow-[#00000014] rounded-[12px]">
              <Image
                className="absolute top-[-50px] w-auto h-[163]"
                src={slide.image}
                alt={slide.name}
              />
              <p className="text-[20px] font-[600] text-[#543883]">{slide.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopingList;
