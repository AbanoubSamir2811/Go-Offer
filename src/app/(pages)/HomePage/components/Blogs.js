"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Virtual} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import Image from "next/image";
function Blogs() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  
    const slides = [
      { id: 1, title: "اكــســتـرا", img: "/img3.png" },
      { id: 2, title: "العـربية للـعــود ", img: "/img4.png" },
      { id: 3, title: "الصالة الاقتصادية", img: "/img5.png" },
      { id: 4, title: "الملابس", img: "/mens_imperial_fern_saudi_thobe_jubba_for_men_thawb_dishdasha_caftan3_e3064586-8be5-410e-991e-1d91ec2249e9 2.png" },
      { id: 5, title: "اكــســتـرا", img: "/Rectangle 4265.png" },
      { id: 6, title: " العـربية للـعــود", img: "/Rectangle 4266.png" },
      { id: 7, title: "الصالة الاقتصادية", img: "/Rectangle 4267.png" },
      { id: 8, title: "الملابس", img: "/mens_imperial_fern_saudi_thobe_jubba_for_men_thawb_dishdasha_caftan3_e3064586-8be5-410e-991e-1d91ec2249e9 2.png" },
    ];

  return (
    <div className='my-24'>
        <p className="font-[800] text-[32px] text-[#172A41]">مقالاتنا الأخيرة</p>

        <div className="flex justify-between h-[34px] w-[90vw] min-w-[300] items-center">
        <p className="text-[#4E657F]">   ابق على اطلاع بأحدث أفكارنا   </p>
        {/* Custom Navigation */}
        <div className="custom-navigation flex mb-2 h-[34px] items-center">
          <button ref={prevRef} className="custom-prev w-fit mx-3">
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white shadow-sm shadow-[#00000014]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1765 9.23512H4.29419M4.29419 9.23512L9.23537 14.1763M4.29419 9.23512L9.23537 4.29395" stroke="#293B51" strokeWidth="1.41176" strokeLinejoin="round" />
            </svg>
          </div>
          </button>
          <button ref={nextRef} className="custom-next w-fit h-fit">
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white shadow-sm shadow-[#00000014]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.82349 9.23512H13.7058M13.7058 9.23512L8.76466 4.29395M13.7058 9.23512L8.76466 14.1763" stroke="#293B51" strokeWidth="1.41176" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        breakpoints={{
          // when window width is <= 640px
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
        modules={[Navigation, Virtual]}
        virtual={{ enabled: true }}
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
        className="flex w-[90vw] min-w-[300] "
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-fit h-full flex-shrink-0 flex flex-col mt-8 gap-3 bg-white rounded-[16px] p-[12px]" // Ensure slides don't shrink
          >
           <Image loading="lazy" className="w-[392px] h-[240px] mr-4" src={slide.img} alt={slide.title} width={392} height={240} />
           <p className="text-[#FFA360] text-[14px] font-[600] my-2">محمد مو 20 أبريل 2024</p>
           <p className="text-[#101828] text-[24px] font-700"> عنوان المدونة هنا </p>
           <p className="text-[16px] font-[400]">في عالم العمليات التجارية الحديثة، يعد نظام نقاط البيع (POS) أكثر من مجرد أداة لمعالجة المعاملات. ,إنها تمثل منصة ديناميكية تتمتع بالقدرة على إحداث ثورة في طريقة عمل الشركات والتفاعل مع العملاء ودفع النمو. ,دعونا نتعمق في </p>
           <div className="text-[#543883] text-[16px] font-[700] mt-2 flex items-center">
            <p className="mx-2 cursor-pointer">إقراء المزيد </p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6667 4.16699L17.5 10.0003M17.5 10.0003L11.6667 15.8337M17.5 10.0003L2.5 10.0003" stroke="#543883" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Blogs