"use client";
import CopounsCard from "../../../shared/components/copounsCard";
import Image from 'next/image';
import React from 'react'

function AllCopouns() {
    const slides = [
        { id: 1, title: "اكــســتـرا", img: "/Rectangle 4265.png" },
        { id: 2, title: "العـربية للـعــود ", img: "/Rectangle 4266.png" },
        { id: 3, title: "الصالة الاقتصادية", img: "/Rectangle 4267.png" },
        { id: 4, title: "الملابس", img: "/Rectangle 4265.png" },
        { id: 5, title: "اكــســتـرا", img: "/Rectangle 4265.png" },
        { id: 6, title: " العـربية للـعــود", img: "/Rectangle 4266.png" },
      ];
  return (
    <div>
        <div className="flex justify-between h-[34px] w-[90vw] items-center">
            <p className="font-[800] text-[32px] text-[#262254]">   كل الكوبونات </p>

            <div className="custom-navigation flex mb-2 h-[34px] items-center text-[#FFA360] text-[20px] font-[700] underline-offset-1">
            عرض الكل
            </div>

      </div>
      <div className='grid grid-cols-3'>
            {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-fit h-full flex-shrink-0 mt-8 gap-3" // Ensure slides don't shrink
          >
            <CopounsCard slide={slide}></CopounsCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllCopouns