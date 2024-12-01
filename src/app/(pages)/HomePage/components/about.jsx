"use client";
import Image from 'next/image';
import React, { useMemo } from 'react';

function ListItem({ item }) {
  return (
    <div className='flex items-center my-6'>
      <div className='h-[40px] w-[40px] bg-[#FFEBF1] rounded-full ml-2'>
        <Image loading="lazy" className='w-full h-full rounded-full' src={item.image} alt={item.title} width={40} height={40} />
      </div>
      <p className='text-[#543883]'>{item.subtitle}</p>
    </div>
  );
}

// Memoize the ListItem component to prevent re-renders if the props don't change
const MemoizedListItem = React.memo(ListItem);

function About({ data }) {
  // Memoize the derived list items to prevent unnecessary recalculations, even when `data` is empty or undefined.
  const listItems = useMemo(() => (data && data.length > 0 ? data.slice(1) : []), [data]);

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // or any fallback UI you prefer
  }

  return (
    <div className='py-24 w-[90vw] min-w-[300px] flex flex-col items-center'>
      <Image loading="lazy" className='w-auto h-auto' src='/Screenshot_2023-122-21_101600-removebg-preview 5.png' alt='Screenshot_2023-122-21_101600-removebg-preview 5.png' width={31} height={34} />
      <p className='font-[800] text-[32px] text-[#262254]'>{data[0].title}</p>
      <div className='flex lg:flex-row flex-col mt-4'>
        <div className='lg:max-w-[50%] px-10'>
          <p>{data[0].subtitle}</p>
          <p className='mt-10 mb-5 text-[24px]'>ما يميزنا</p>
          {listItems.map((item, index) => (
            <MemoizedListItem key={index} item={item} />
          ))}
          <button className='bg-[#543883] text-white w-[152px] h-[40px] rounded-[6px] my-10'>الدخول/إنشاء حساب</button>
        </div>
        <Image loading="lazy" className='max-w-[619px] max-h-[580px] w-full h-full rounded-lg' src={data[0].main_image} alt='main_image' width={619} height={580} />
      </div>
    </div>
  );
}

// Wrap the About component with React.memo to memoize it
export default React.memo(About);
