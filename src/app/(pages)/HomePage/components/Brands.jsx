"use client";

import React, { useMemo } from 'react';
import BrandCard from '../../../shared/components/BrandCard';

// Wrap the BrandCard component with React.memo to prevent unnecessary re-renders
const MemoizedBrandCard = React.memo(({ store }) => {
  return <BrandCard store={store} key={store.id} />;
});

// Assign displayName to MemoizedBrandCard for better debugging
MemoizedBrandCard.displayName = "MemoizedBrandCard";

function Brands({ data }) {
  // Use useMemo to memoize the mapping of the data to BrandCard components
  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    } else if (data) {
      return data.map((store) => (
        <MemoizedBrandCard store={store} key={store.id} />
      ));
    }
  }, [data]);

  return (
    <div className='w-full min-w-[300px] flex flex-col items-center py-8' id='brands'>
      <p className='font-[800] text-[32px] text-[#262254]'>تصفح حسب العلامات التجارية</p>

      <div className="flex gap-4 ms-0 mt-4 ps-0 max-w-[90vw] w-[90vw] min-w-[300px] overflow-x-scroll overflow-hidden" id='scroller'>
        {memoizedData}
      </div>

      <p className='font-[800] text-[20px] text-[#262254] mt-5 underline-offset-2'>عرض الكل</p>
    </div>
  );
}

export default Brands;
