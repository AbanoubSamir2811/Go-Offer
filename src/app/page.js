"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
// Dynamically import the components
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled (you can add `{ ssr: false }` for no SSR)
const Hero = dynamic(() => import("./(pages)/HomePage/components/Hero"), { ssr: false });
const ShopingList = dynamic(() => import("./(pages)/HomePage/components/shopingList"), { ssr: false });
const Blogs = dynamic(() => import("./(pages)/HomePage/components/Blogs"), { ssr: false });
const Evaluation = dynamic(() => import("./(pages)/HomePage/components/Evaluation"), { ssr: false });
const NewOffers = dynamic(() => import("./(pages)/HomePage/components/NewOffers"), { ssr: false });
const CustomOffers = dynamic(() => import("./(pages)/HomePage/components/CustomOffers"), { ssr: false });
const AllCopouns = dynamic(() => import("./(pages)/HomePage/components/AllCopouns"), { ssr: false });
const About = dynamic(() => import("./(pages)/HomePage/components/about"), { ssr: false });
const Brands = dynamic(() => import("./(pages)/HomePage/components/Brands"), { ssr: false });
const CopounsList = dynamic(() => import("./(pages)/HomePage/components/copounsList"), { ssr: false });

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  async function fetchData() {
    try {
      const response = await axios.get('https://dashboard.gooffer.net/api/home', {
        headers: {
          Platform: 'website',
          // lang : 'ar'
      }});
      setData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center mt-1 pt-5'>
      {data ? (
        <>
          <Hero />
          <ShopingList data={data[5].data} />
          <CopounsList data={data[1].data} />
          <Brands data={data[0].data} />
          <About />
          {/* <AllCopouns /> */}
          {/* <CustomOffers /> */}
          <Evaluation />
          <Blogs />
          <Image loading="lazy" src="/Group 340222.png" alt='Group 340222.png' width={1265} height={475}/>
        </>
      ) : (
        <Image loading="lazy" className="animate-ping my-5" src='/logo.png' alt='logo.png' width={100} height={100}/>
      )}
    </div>
  );
}
