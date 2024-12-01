"use client";
import React, { useMemo } from "react";
import CopounsCard from "../../../shared/components/copounsCard";

function AllCopouns({ data }) {
  const memoizedData = useMemo(() => {
    if (data === undefined) {
      return <div>Loading...</div>;
    } else if (data) {
      // Limit to 12 items
      return data.slice(0, 12).map((slide) => (
        <div
          key={slide.id}
          className="w-fit h-full flex-shrink-0 mt-8 gap-3" // Ensure slides don't shrink
        >
          <CopounsCard slide={slide} />
        </div>
      ));
    }
  }, [data]);

  return (
    <div>
      <div className="flex justify-between h-[34px] w-[90vw] min-w-[300px] items-center">
        <p className="font-[800] text-[32px] text-[#262254]">كل الكوبونات</p>

        <div className="custom-navigation flex mb-2 h-[34px] items-center text-[#FFA360] text-[20px] font-[700] underline-offset-1">
          عرض الكل
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {memoizedData}
      </div>
    </div>
  );
}

// Wrap the component with React.memo to memoize it
export default React.memo(AllCopouns);
