"use client";
import React, { useEffect, useState, useMemo, useCallback, lazy, Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled
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

  // Memoize the data fetching function using useCallback
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('https://dashboard.gooffer.net/api/home', {
        headers: { Platform: 'website' },
      });
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memoize processed data for efficiency
  const memoizedData = useMemo(() => {
    return data ? {
      shoppingListData: data[5]?.data,
      copounsListData: data[2]?.data,
      brandsData: data[0]?.data,
      AllCopouns: data[1]?.data,
      customOffersData: data[1]?.data,
      newOffersData: data[4]?.data,
      about: data[7]?.data,
    } : {};
  }, [data]);

  return (
    <div className="flex flex-col items-center mt-1 pt-5">
      <Suspense fallback={<Image loading="lazy" className="animate-ping my-5" src='/logo.png' alt='logo.png' width={100} height={100}/>}>
        <Hero />
        <ShopingList data={memoizedData.shoppingListData} />
        <CopounsList data={memoizedData.copounsListData} />
        <Brands data={memoizedData.brandsData} />
        <About data={memoizedData.about} />
        <AllCopouns data={memoizedData.AllCopouns} />
        <CustomOffers data={memoizedData.customOffersData} />
        <NewOffers data={memoizedData.newOffersData} />
        <Evaluation />
        <Blogs />
        <div className="relative w-[90vw] min-w-[300px] h-auto">
          <Image 
            loading="lazy" 
            className="w-[90vw] min-w-[300px] h-auto"
            src="/Group 340222.png" 
            alt="Group 340222.png" 
            width={1264}
            height={475}
          />
        </div>
      </Suspense>
    </div>
  );
}
