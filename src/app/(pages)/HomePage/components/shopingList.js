"use client";

import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import CustomNavigation from "../../../shared/components/CustomNavigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Optional: Import Autoplay CSS if needed

import Image from "next/image";

const ShopingList = ({ data}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    } else if (data) {
      return data.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="w-[293px] flex-shrink-0 mt-16 flex justify-center"
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
      ));
    }
  }, [data]);

  return (
    <div className="w-full h-[290px] flex flex-col items-center justify-center mt-24 mx-3">
      <div className="flex justify-between h-[34px] w-[90vw] min-w-[300px] items-center">
        <p className="font-[800] text-[32px] text-[#262254]">تسوق حسب الفئات</p>
        {/* Custom Navigation */}
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </div>

      {/* Swiper */}
      <Swiper
        breakpoints={{
          300: { slidesPerView: 1 },
          670: { slidesPerView: 2 },
          1010: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Navigation, Autoplay]} // Include Autoplay module
        spaceBetween={10}
        slidesPerView="auto"
        slidesPerGroup={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 3000, // Delay between auto-swipes in milliseconds
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="flex w-[90vw] min-w-[300px] h-[290px] justify-center"
      >
        {memoizedData}
      </Swiper>
    </div>
  );
};

export default ShopingList;
