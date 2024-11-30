"use client";
import BrandCard from '../../../shared/components/BrandCard';
import React from 'react'

function Brands({data}) {
  if (!Array.isArray(data)) {
    return <div>Error: Items should be an array</div>;
  }
  return (
    <div className='w-[100vw] flex flex-col items-center py-8' id='brands'>
        <p className='font-[800] text-[32px] text-[#262254]'>تصفح حسب العلامات التجارية</p>

        <div className="flex gap-4 ms-0 mt-4 ps-0 max-w-[90vw] overflow-x-scroll overflow-hidden" id='scroller'>
        {data.map((store) => (
          <BrandCard store={store} key={store.id}></BrandCard>
        ))}
      </div>

      <p className='font-[800] text-[20px] text-[#262254] mt-5 underline-offset-2'>عرض الكل</p>
    </div>
  )
}

export default Brands