"use client";
import Image from 'next/image'
import React from 'react'

function ListItem({ text }) {
    return (
      <div className='flex items-center my-6'>
        <div className='h-[40px] w-[40px] bg-[#FFEBF1] rounded-full ml-2'></div>
        <p>{text}</p>
      </div>
    );
  }

function About() {

    const listItems = [
        'منصة جو اوفر متكاملة للتسويق الالكتروني',        
        'منصة جو اوفر متكاملة للتسويق الالكتروني',        
        'منصة جو اوفر متكاملة للتسويق الالكتروني',        
        'منصة جو اوفر متكاملة للتسويق الالكتروني',        
        'منصة جو اوفر متكاملة للتسويق الالكتروني',
    ]
  return (
    <div className='py-24  w-[90vw] min-w-[300] flex flex-col items-center'>
        <Image loading="lazy" className='w-auto h-auto' src='/Screenshot_2023-122-21_101600-removebg-preview 5.png' alt='Screenshot_2023-122-21_101600-removebg-preview 5.png' width={31} height={34}/>
        <p className='font-[800] text-[32px] text-[#262254]'>ما هى منصة جو اوفر</p>
        <div className='flex mt-4'>
            <div className='max-w-[50%] px-10'>
                <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                </p>
                <p className='mt-10 mb-5 text-[24px]'>ما يميزنا</p>
                {listItems.map((item, index) => (
                    <ListItem key={index} text={item} />
                ))}
                <button className='bg-[#543883] text-white w-[152px] h-[40px] rounded-[6px] my-10'>الدخول/إنشاء حساب</button>
            </div>
            <Image loading="lazy" className='max-w-[619px] max-h-[580px]' src="/Group 34019.png" alt='Group 34019.png' width={619} height={580}/>
        </div>

    </div>
  )
}

export default About