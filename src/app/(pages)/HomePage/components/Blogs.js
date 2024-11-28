"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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

        <div className="flex justify-between h-[34px] w-[90vw] items-center">
        <p className="text-[#4E657F]">   ابق على اطلاع بأحدث أفكارنا   </p>
        {/* Custom Navigation */}
        <div className="custom-navigation flex mb-2 h-[34px] items-center">
          <button ref={prevRef} className="custom-prev w-fit mx-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_5503_36065)">
                <rect x="0.470703" y="0.470703" width="39.5294" height="39.5294" rx="19.7647" fill="white" fillOpacity="0.9"/>
                <rect x="0.823644" y="0.823644" width="38.8235" height="38.8235" rx="19.4118" stroke="#EAECF0" strokeWidth="0.705882"/>
                <path d="M25.1765 20.2351H15.2942M15.2942 20.2351L20.2354 25.1763M15.2942 20.2351L20.2354 15.2939" stroke="#293B51" strokeWidth="1.41176" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <filter id="filter0_b_5503_36065" x="-7.5293" y="-7.5293" width="55.5293" height="55.5293" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5503_36065"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5503_36065" result="shape"/>
                </filter>
                </defs>
            </svg>
          </button>
          <button ref={nextRef} className="custom-next w-fit h-fit">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_5503_36064)">
                <rect y="0.470703" width="39.5294" height="39.5294" rx="19.7647" fill="white" fillOpacity="0.9"/>
                <rect x="0.352941" y="0.823644" width="38.8235" height="38.8235" rx="19.4118" stroke="#EAECF0" strokeWidth="0.705882"/>
                <path d="M14.8235 20.2351H24.7058M24.7058 20.2351L19.7647 15.2939M24.7058 20.2351L19.7647 25.1763" stroke="#293B51" strokeWidth="1.41176" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <filter id="filter0_b_5503_36064" x="-8" y="-7.5293" width="55.5293" height="55.5293" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5503_36064"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5503_36064" result="shape"/>
                </filter>
                </defs>
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
        className="flex w-[90vw] "
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-fit h-full flex-shrink-0 flex flex-col mt-8 gap-3 bg-white rounded-[16px] p-[12px]" // Ensure slides don't shrink
          >
           <Image className="w-[392px] h-[240px] mr-4" src={slide.img} alt={slide.title} width={392} height={240} />
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