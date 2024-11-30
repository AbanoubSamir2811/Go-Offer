"use client";

import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CustomNavigation from "../../../shared/components/CustomNavigation";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const ShopingList = ({data}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    }else if(data){  
      return data.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="w-[293px] flex-shrink-0 mt-16 flex justify-center" // Ensure slides don't shrink
        >
          <div className="h-[172px] w-[293px] bg-white relative flex items-end justify-center pb-3 shadow-md shadow-[#00000014] rounded-[12px]">
            <Image
              className="absolute top-[-50px] w-auto max-h-[163px] min-h-[100px]"
              src={slide.image}
              alt={slide.name}
              width={293}
              height={163}
            />
            <p className="text-[20px] font-[600] text-[#543883]">{slide.name}</p>
          </div>
        </SwiperSlide>
      ))
    }
  }, [data]);

  return (
    <div className="w-full h-[290px] flex flex-col items-center justify-center mt-24 mx-3">
      <div className="flex justify-between h-[34px] w-[90vw] min-w-[300] items-center">
        <p className="font-[800] text-[32px] text-[#262254]">تسوق حسب الفئات</p>
        {/* Custom Navigation */}
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </div>

      {/* Swiper */}
      <Swiper
        breakpoints={{
          // when window width is <= 640px
          300: {
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
        className="flex w-[90vw] min-w-[300] h-[290px] justify-center"
      >
        {memoizedData}
      </Swiper>
    </div>
  );
};

export default ShopingList;
