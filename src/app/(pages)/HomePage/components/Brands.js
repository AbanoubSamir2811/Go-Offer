import BrandCard from '../../../shared/components/BrandCard';
import React from 'react'

function Brands({data}) {
    const stores = [
        {
          id: 0,
          name: "نــعنــاع",
          imgUrl: "/Group.png", 
        },
        {
          id: 1,
          name: "الــمراعـــي",
          imgUrl: "/almarai 1.png", 
        },
        {
          id: 2,
          name: "تــمور واكــثـر",
          imgUrl: "/371906 1.png", 
        },
        {
          id: 3,
          name: "أكلات جــدودنــا",
          imgUrl: "/Group 34006.png", 
        },
        {
          id: 4,
          name: "نــعنــاع",
          imgUrl: "/Group.png", 
        },
        {
          id: 5,
          name: "الــمراعـــي",
          imgUrl: "/almarai 1.png", 
        },
        {
          id: 6,
          name: "تــمور واكــثـر",
          imgUrl: "/371906 1.png",  
        },
        {
          id: 7,
          name: "أكلات جــدودنــا",
          imgUrl: "/Group 34006.png", 
        },
      ];
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