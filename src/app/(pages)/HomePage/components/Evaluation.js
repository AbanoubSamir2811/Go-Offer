"use client";
import Image from "next/image";
import React, { useMemo } from "react";

// Wrap the component in React.memo to prevent unnecessary re-renders
// eslint-disable-next-line react/display-name
const Evaluation = React.memo(({ data }) => {
  if (data === undefined) {
    return <div>Loading...</div>;
  }

  // useMemo is used to optimize the rendering of the stars based on the `rate`
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const stars = useMemo(() => {
    return Array.from({ length: data[0]?.rate || 0 }).map((_, index) => (
      <svg
        key={index}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8401 4.60683C18.4668 3.45772 16.8411 3.45772 16.4677 4.60683L14.0136 12.1599C13.8466 12.6737 13.3677 13.0217 12.8274 13.0217H4.88568C3.67743 13.0217 3.17507 14.5678 4.15256 15.278L10.5775 19.946C11.0147 20.2636 11.1976 20.8266 11.0306 21.3405L8.57651 28.8935C8.20314 30.0426 9.51835 30.9982 10.4958 30.288L16.9208 25.6199C17.358 25.3023 17.9499 25.3023 18.3871 25.6199L24.812 30.288C25.7895 30.9982 27.1047 30.0426 26.7314 28.8935L24.2772 21.3405C24.1103 20.8266 24.2932 20.2636 24.7303 19.946L31.1553 15.278C32.1328 14.5678 31.6304 13.0217 30.4222 13.0217H22.4805C21.9401 13.0217 21.4612 12.6737 21.2943 12.1599L18.8401 4.60683Z"
          fill="#F7871B"
        />
      </svg>
    ));
  }, [data]); // Only re-calculate stars if rate changes

  return (
    <div className="w-full h-[675px] overflow-hidden relative">
      <Image
        className="w-[900px] h-auto absolute top-[-170px] right-[-150px]"
        loading="lazy"
        src="/Ellipse 5.png"
        alt="Test.png"
        width={1440}
        height={757}
      />
      <Image
        className="absolute top-[109px] left-[200px]"
        loading="lazy"
        src="/Quotes.png"
        alt="Quotes.png"
        width={162}
        height={118}
      />
      <Image
        className="absolute top-[50px] right-[302px] w-auto h-[573.3px]"
        loading="lazy"
        src="/360_F_285789662_8NyfG78pliAXwr63XZhBVRAj00N8VmcU.png"
        alt="Quotes.png"
        width={356}
        height={573.3}
      />
      <div className="absolute top-[30px] right-[272px] w-[290px] h-[108px] bg-[#262254] rounded-[12px] p-6 text-center text-white">
        اراء العملاء والاعضاء في كوبونات وعروض جو اوفر الحصرية
      </div>
      <div className="absolute top-[200px] left-[287px] w-[436px] h-[336px] bg-white rounded-[12px] p-6 text-center text-black shadow-md shadow-[#15151526] flex flex-col justify-evenly items-center">
        <h2 className="text-[40px] text-[#202020]">{data[0]?.user}</h2>
        <p className="text-[20px]">{data[0]?.comment}</p>
      </div>
      <div className="absolute bottom-24 left-24 flex space-x-2 gap-2">
        <p className="text-[20px] font-[600] text-[#505050]">التقييمات</p>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6362 0.232422C6.90419 0.232422 0.636719 6.50108 0.636719 14.2319C0.636719 21.964 6.90419 28.2315 14.6362 28.2315C22.3671 28.2315 28.6358 21.9628 28.6358 14.2319C28.6358 6.50108 22.3671 0.232422 14.6362 0.232422ZM11.2066 17.9912C11.2066 18.7478 10.5935 19.3598 9.8381 19.3598C9.0815 19.3598 8.46957 18.7478 8.46957 17.9912V12.1566C8.46957 11.4 9.0815 10.7869 9.8381 10.7869C10.5935 10.7869 11.2066 11.4 11.2066 12.1566V17.9912ZM20.8741 17.8928C20.8741 18.9625 20.2491 19.3455 19.1794 19.3455H14.2579C13.1883 19.3455 12.3214 18.4786 12.3214 17.409V12.5681C12.3214 12.5681 12.2253 11.7629 13.1171 11.0063C13.6211 10.5782 14.3694 9.76111 14.8924 8.7697C15.9312 6.79992 16.5527 6.22595 17.0258 6.38012C18.7786 6.94816 17.9022 9.54646 17.3365 10.6316H18.9375C20.006 10.6316 20.8741 11.4984 20.8741 12.5681V17.8928Z"
            fill="#543883"
          />
        </svg>
      </div>
      <div className="bg-white absolute bottom-4 left-52 rounded-md flex justify-center items-center gap-2 w-[227px] h-[74.84px] shadow-md shadow-[#15151526]">
        {stars}
      </div>
    </div>
  );
});

export default Evaluation;
