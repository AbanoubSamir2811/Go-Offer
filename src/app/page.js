"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Hero from "./(pages)/HomePage/components/Hero";
import ShopingList from "./(pages)/HomePage/components/shopingList";
import Blogs from "./(pages)/HomePage/components/Blogs";
import Evaluation from "./(pages)/HomePage/components/Evaluation";
import NewOffers from "./(pages)/HomePage/components/NewOffers";
import CustomOffers from "./(pages)/HomePage/components/CustomOffers";
import AllCopouns from "./(pages)/HomePage/components/AllCopouns";
import About from "./(pages)/HomePage/components/about";
import Brands from "./(pages)/HomePage/components/Brands";
import CopounsList from "./(pages)/HomePage/components/copounsList";
export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
    console.log(data)

  }, );
  return (
    <div className='flex flex-col items-center mt-1 pt-5'>
      {data ? (
        <>
        <Hero></Hero>
        <ShopingList data={data[5].data}></ShopingList>
        <CopounsList data={data[1].data}></CopounsList>
        <Brands  data={data[0].data}></Brands>
        <About></About>
        {/* <AllCopouns></AllCopouns> */}
        {/* <CustomOffers></CustomOffers> */}
        {/* <NewOffers></NewOffers> */}
        <Evaluation></Evaluation>
        <Blogs></Blogs>
        <Image src="/Group 340222.png" alt='Group 340222.png' width={1265} height={475}/>
        </> 
      ) : (
        <Image className="animate-ping my-5" src='/logo.png' alt='logo.png' width={100} height={100}/>
      )}
    </div>
  );
}
