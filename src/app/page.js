"use client";
import React, { useEffect, useState, useMemo, useCallback, lazy, Suspense } from "react";
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
const Brands = lazy(() => import('./(pages)/HomePage/components/Brands'));
const CopounsList = dynamic(() => import("./(pages)/HomePage/components/copounsList"), { ssr: false });

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Memoize the data fetching function using useCallback to prevent it from being recreated
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('https://dashboard.gooffer.net/api/home', {
        headers: {
          Platform: 'website',
          // lang : 'ar'
        }
      });
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      setError(error.message);
    }
  }, []); // Empty dependency array ensures this function is created only once

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Dependency array includes fetchData to re-run if it changes

  // Memoize data when it’s available to avoid unnecessary recalculations on each render
  const memoizedData = useMemo(() => {
    return data ? {
      shoppingListData: data[5]?.data,
      copounsListData: data[1]?.data,
      brandsData: data[0]?.data,
      copounsListData: data[1]?.data,
      customOffersData: data[1]?.data
    } : {};
  }, [data]); // Only re-calculate when data changes

  return (
    <div className='flex flex-col items-center mt-1 pt-5'>
      <Suspense fallback={<Image loading="lazy" className="animate-ping my-5" src='/logo.png' alt='logo.png' width={100} height={100}/>}>
        <Hero />
        <ShopingList data={memoizedData.shoppingListData} />
        <CopounsList data={memoizedData.copounsListData} />
        <Brands data={memoizedData.brandsData} />
        <About />
        <AllCopouns data={memoizedData.copounsListData}/>
        <CustomOffers data={memoizedData.customOffersData}/>
        <NewOffers data={memoizedData.copounsListData}/>
        <Evaluation />
        <Blogs />
      </Suspense>
    </div>
  );
}
