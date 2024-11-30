"use client";
import React from 'react'
import Image from 'next/image'

function BrandCard({store}) {
  return (
    <div className="flex flex-col text-center items-center justify-evenly ms-0 min-w-[293px] h-[169px] bg-white">
        {/* Store Image */}
        <Image
            className="rounded-[15px] rounded-y-[10px] w-auto h-[61px]"
            src={store.logo}
            alt={store.name}
            width={293}
            height={61}
        />
        <div className='hidden'></div>
        <p className='text-[24px] font-[600] text-[#543883]'>{store.name}</p>
    </div>
  )
}

export default BrandCard