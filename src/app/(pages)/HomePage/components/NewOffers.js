"use client";

import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import CopounsCard from "../../../shared/components/copounsCard";

const NewOffers = ({data}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    } else if (data) {
      return data.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="w-fit h-full flex-shrink-0 mt-8 gap-3" // Ensure slides don't shrink
        >
          <CopounsCard slide={slide}></CopounsCard>
        </SwiperSlide>
      ));
    }
  }, [data]);
  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center my-24 mx-3">
      <div className="flex justify-between h-[34px] w-[90vw] min-w-[400px] items-center">
        <p className="font-[800] text-[32px] text-[#262254]">   العروض الحصرية </p>
        {/* Custom Navigation */}
        <div className="custom-navigation flex mb-2 h-[34px] items-center">
          <button ref={prevRef} className="custom-prev w-fit mx-3">
            <div className="w-[32px] h-[32px] bg-[#9977CE] rounded-full flex items-center justify-center">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.44469 7.37568L2.32449 0.255608C2.15981 0.090796 1.93997 0 1.70557 0C1.47116 0 1.25133 0.090796 1.08664 0.255608L0.562291 0.779831C0.22109 1.12142 0.22109 1.6766 0.562291 2.01767L6.5413 7.99668L0.555657 13.9823C0.390975 14.1471 0.300049 14.3668 0.300049 14.6011C0.300049 14.8357 0.390975 15.0554 0.555657 15.2203L1.08001 15.7444C1.24482 15.9092 1.46453 16 1.69893 16C1.93334 16 2.15317 15.9092 2.31785 15.7444L9.44469 8.61782C9.60976 8.45248 9.70043 8.23174 9.69991 7.99707C9.70043 7.7615 9.60976 7.54088 9.44469 7.37568Z" fill="white"/>
              </svg>
            </div>
          </button>
          <button ref={nextRef} className="custom-next w-fit h-fit">
            <div className="w-[32px] h-[32px] bg-[#9977CE] rounded-full flex items-center justify-center">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.55531 7.37568L7.67551 0.255608C7.84019 0.090796 8.06003 0 8.29443 0C8.52884 0 8.74867 0.090796 8.91336 0.255608L9.43771 0.779831C9.77891 1.12142 9.77891 1.6766 9.43771 2.01767L3.4587 7.99668L9.44434 13.9823C9.60903 14.1471 9.69995 14.3668 9.69995 14.6011C9.69995 14.8357 9.60903 15.0554 9.44434 15.2203L8.91999 15.7444C8.75518 15.9092 8.53547 16 8.30107 16C8.06666 16 7.84683 15.9092 7.68215 15.7444L0.55531 8.61782C0.390238 8.45248 0.299573 8.23174 0.300093 7.99707C0.299573 7.7615 0.390238 7.54088 0.55531 7.37568Z" fill="white"/>
              </svg>
            </div>
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
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is <= 1024px
          1024: {
            slidesPerView: 3,
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
        className="flex w-[90vw] min-w-[400px] h-[296px]"
      >
        {memoizedData}
      </Swiper>
    </div>
  );
};

export default NewOffers;
