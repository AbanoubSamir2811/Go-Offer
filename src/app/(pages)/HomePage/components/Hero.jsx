"use client";
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='relative bg-[#C53338] rounded-[32px] flex flex-col items-center justify-center h-[494px] w-[90vw] p-0'>
        <Image priority={true} src='/Rectangle 4261.png' alt='Group 33974.png' width={1264} height={475} className='w-full min-w-[300px] h-[494px] absolute top-0 bottom-0 right-0 left-0'></Image>
        <Image loading="lazy" className='z-10 lg:w-[187px] lg:h-[44px] w-[131px] h-[31px]' src='/Jarir_Bookstore_Logo 1.png' alt='Group 33974.png' width={187} height={44}></Image>
        <Image loading="lazy" src='/Vector 142.png' alt='Vector 142.png' className='absolute lg:block hidden top-0 left-0' width={92.5} height={85.5}/>
        <p className='-rotate-45 absolute lg:block hidden top-5 left-3 text-[14px] font-[700]'>خصم 35%</p>
        <h1 className='text-[#FFFFFF] lg:text-[65px] text-[24px] font-[700] z-10 max-w-[40vw] text-center'>عــرض كوبونـــات جــريـــر</h1>
        <h2 className='text-[#E7E5E5] lg:text-[24px] md:text-[16px] text-[14px] font-[400] lg:max-w-[30vw] md:max-w-[40vw] text-center mx-5'>كوبونات تصل بخصـم الـي 35% علي منتجات مختــارة 
        فــي مــتجــر مكــتبة جــريــر</h2>
        <button className='bg-[#FFFFFF] rounded-[12px] text-[#262254] text-[20px] font-[700] w-[304px] h-[65px] mt-5 z-10 text-center'>اكــتــشـفهــا الان</button>
        <Image loading="lazy" src='/3333 1.png' alt='3333 1.png' width={204} height={213} className='top-20 absolute left-[10%] lg:w-auto md:w-[150px] w-[100px] min-w-[30px] h-auto'/>
        <Image loading="lazy" src='/whatch.png' alt='whatch.png' width={140} height={160} className='absolute top-28 right-[15%] lg:w-auto md:w-[150px] min-w-[30px] h-auto'/>
        <Image loading="lazy" src='/headPhone.png' alt='headPhone.png' width={175} height={155} className='absolute bottom-[-70px] right-0 lg:w-auto min-w-[30px] h-auto'/>
        <Image loading="lazy" src='/playstation.png' alt='playstation.png' width={220} height={170} className='absolute bottom-[-70px] left-7 z-10 lg:w-auto min-w-[30px] h-auto'/>
        
        <form className="max-w-md mx-auto lg:absolute hidden lg:block bottom-[-30px] right-[16%]">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-[60vw]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.2332 21.8602L17.5212 15.9194C18.9898 14.1735 19.7945 11.9768 19.7945 9.68999C19.7945 4.34701 15.4475 0 10.1045 0C4.76156 0 0.414551 4.34701 0.414551 9.68999C0.414551 15.033 4.76156 19.38 10.1045 19.38C12.1104 19.38 14.0218 18.775 15.6561 17.6265L21.4115 23.6124C21.6521 23.8622 21.9756 24 22.3224 24C22.6506 24 22.9619 23.8749 23.1982 23.6474C23.7004 23.1641 23.7165 22.3628 23.2332 21.8602ZM10.1045 2.52782C14.0538 2.52782 17.2667 5.74069 17.2667 9.68999C17.2667 13.6393 14.0538 16.8522 10.1045 16.8522C6.15524 16.8522 2.94237 13.6393 2.94237 9.68999C2.94237 5.74069 6.15524 2.52782 10.1045 2.52782Z" fill="#FFA360"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-[60vw] p-4 ps-10 text-[16px] text-gray-900 border border-gray-300 rounded-[12px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-[#00000014] shadow-md font-[600]" placeholder="ابــحــث عن كل ما تحتــاج هــنــا...." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#543883] w-[15%] h-[40px] rounded-[8px]">بحث</button>
            </div>
        </form>
    </div>
  )
}

export default Hero