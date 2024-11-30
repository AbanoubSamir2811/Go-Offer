"use client";

import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Virtual } from "swiper/modules";

import CustomNavigation from "../../../shared/components/CustomNavigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/virtual";

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
      <div className="flex justify-between h-[34px] w-[90vw] min-w-[300px] items-center">
        <p className="font-[800] text-[32px] text-[#262254]">  كوبونات الاكثر استخداما</p>
        {/* Custom Navigation */}
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </div>

      {/* Swiper */}
      <Swiper
        // when window width is <= 640px
        breakpoints={{
          300: {
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
        modules={[Navigation, Mousewheel, Virtual]}
        virtual={{ enabled: true }}
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
        className="flex w-[90vw] min-w-[300px] h-[296px]"
      >
        {memoizedData}
      </Swiper>
    </div>
  );
};

export default CopounsList;
