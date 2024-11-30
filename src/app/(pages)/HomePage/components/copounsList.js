"use client";

import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

import CopounsCard from "../../../shared/components/copounsCard";

const CopounsList = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    }else if(data){  
      return data.map((slide) => (
        <SwiperSlide key={slide.id} className="w-fit h-full flex-shrink-0 mt-8 gap-3">
          <CopounsCard slide={slide} />
        </SwiperSlide>
      ));
    }
  }, [data]);

  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center my-24 mx-3">
      <div className="flex justify-between h-[34px] w-[90vw] min-w-[400px] items-center">
        <p className="font-[800] text-[32px] text-[#262254]">  كوبونات الاكثر استخداما</p>
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
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is <= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Mousewheel]}
        spaceBetween={10} // Space between slides
        slidesPerView="auto" // Show multiple cards
        slidesPerGroup={1} // Slide only one card at a time
        // mousewheel={{sensitivity: 1}}
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

export default CopounsList;
