"use client";
import BrandCard from '../../../shared/components/BrandCard';
import React, { useMemo } from 'react'

function Brands({data}) {
  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    }else if(data){  
      return data.map((store) => (
        <BrandCard store={store} key={store.id}></BrandCard>
      ));
    }
  }, [data]);
  return (
    <div className='w-[100vw] flex flex-col items-center py-8' id='brands'>
        <p className='font-[800] text-[32px] text-[#262254]'>تصفح حسب العلامات التجارية</p>

        <div className="flex gap-4 ms-0 mt-4 ps-0 max-w-[90vw] min-w-[400px] overflow-x-scroll overflow-hidden" id='scroller'>
        {memoizedData}
      </div>

      <p className='font-[800] text-[20px] text-[#262254] mt-5 underline-offset-2'>عرض الكل</p>
    </div>
  )
}

export default Brands