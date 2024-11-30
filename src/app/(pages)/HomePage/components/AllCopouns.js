"use client";
import CopounsCard from "../../../shared/components/copounsCard";
import React, { useMemo } from 'react'

function AllCopouns({data}) {
  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    }else if(data){  
      return data.map((slide) => (
        <div
          key={slide.id}
          className="w-fit h-full flex-shrink-0 mt-8 gap-3" // Ensure slides don't shrink
        >
          <CopounsCard slide={slide}></CopounsCard>
        </div>
      ));
    }
  }, [data]);
  return (
    <div>
        <div className="flex justify-between h-[34px] w-[90vw] min-w-[300px] items-center">
            <p className="font-[800] text-[32px] text-[#262254]">   كل الكوبونات </p>

            <div className="custom-navigation flex mb-2 h-[34px] items-center text-[#FFA360] text-[20px] font-[700] underline-offset-1">
            عرض الكل
            </div>

      </div>
      <div className='grid grid-cols-3'>
            {memoizedData}
      </div>
    </div>
  )
}

export default AllCopouns