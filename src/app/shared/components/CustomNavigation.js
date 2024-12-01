"use client"
import React from 'react'

function CustomNavigation({prevRef, nextRef}) {
  return (
    <div className="custom-navigation flex mb-2 h-[34px] items-center">
        <button ref={prevRef} className="custom-prev w-fit mx-3" aria-label="Previous slide">
        <div className="w-[32px] h-[32px] bg-[#9977CE] rounded-full flex items-center justify-center">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.44469 7.37568L2.32449 0.255608C2.15981 0.090796 1.93997 0 1.70557 0C1.47116 0 1.25133 0.090796 1.08664 0.255608L0.562291 0.779831C0.22109 1.12142 0.22109 1.6766 0.562291 2.01767L6.5413 7.99668L0.555657 13.9823C0.390975 14.1471 0.300049 14.3668 0.300049 14.6011C0.300049 14.8357 0.390975 15.0554 0.555657 15.2203L1.08001 15.7444C1.24482 15.9092 1.46453 16 1.69893 16C1.93334 16 2.15317 15.9092 2.31785 15.7444L9.44469 8.61782C9.60976 8.45248 9.70043 8.23174 9.69991 7.99707C9.70043 7.7615 9.60976 7.54088 9.44469 7.37568Z" fill="white"/>
            </svg>
        </div>
        </button>
        <button ref={nextRef} className="custom-next w-fit h-fit" aria-label="Next slide">
        <div className="w-[32px] h-[32px] bg-[#9977CE] rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.55531 7.37568L10.6755 0.255608C10.8402 0.090796 11.06 0 11.2944 0C11.5288 0 11.7487 0.090796 11.9134 0.255608L12.4377 0.779831C12.7789 1.12142 12.7789 1.6766 12.4377 2.01767L6.4587 7.99668L12.4443 13.9823C12.609 14.1471 12.7 14.3668 12.7 14.6011C12.7 14.8357 12.609 15.0554 12.4443 15.2203L11.92 15.7444C11.7552 15.9092 11.5355 16 11.3011 16C11.0667 16 10.8468 15.9092 10.6821 15.7444L3.55531 8.61782C3.39024 8.45248 3.29957 8.23174 3.30009 7.99707C3.29957 7.7615 3.39024 7.54088 3.55531 7.37568Z" fill="white"/>
            </svg>
        </div>
        </button>
    </div>
  )
}

export default CustomNavigation