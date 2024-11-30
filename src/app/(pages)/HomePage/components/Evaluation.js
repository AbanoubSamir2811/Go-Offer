"use client";
import Image from 'next/image'
import React from 'react'

function Evaluation() {
  return (
    <div>
        <Image className='w-full h-full' loading="lazy" src='/Test.png' alt='Test.png' width={1440} height={757}/>
    </div>
  )
}

export default Evaluation