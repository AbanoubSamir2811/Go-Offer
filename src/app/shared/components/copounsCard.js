import React from 'react'
import Image from "next/image";

function CopounsCard({slide}) {
  return (
    <div className="flex flex-col justify-center pt-4 p-[15px] bg-white lg:w-[401px] w-[316px] h-[244px] shadow-md shadow-[#00000014] rounded-[12px]">
        <div className='border-b-[1px] border-[#C6CDDC] border-solid pb-3'>

            <div className="flex ">
            <Image loading="lazy" className="lg:w-[129px] w-[80px] lg:h-[144px] h-[90px] rounded-[8px]" width={129} height={144} src={slide.brand_logo} alt={slide.brand_name} />
            <div className="w-full mr-2">
                <div className="flex justify-between">
                <p className="text-[#543883] text-[24px] font-[600]">{slide.brand_name}</p>
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0718 1.97008C19.4616 -0.639411 15.2154 -0.639411 12.6059 1.97008L11.9998 2.57582L11.394 1.97008C8.78456 -0.639765 4.53796 -0.639765 1.92847 1.97008C-0.628033 4.52658 -0.644634 8.57891 1.88997 11.3964C4.20171 13.9653 11.0196 19.5152 11.3089 19.7501C11.5053 19.9098 11.7416 19.9875 11.9765 19.9875C11.9843 19.9875 11.992 19.9875 11.9994 19.9871C12.2424 19.9984 12.4872 19.9151 12.69 19.7501C12.9792 19.5152 19.7979 13.9653 22.1103 11.3961C24.6446 8.57891 24.628 4.52658 22.0718 1.97008ZM20.535 9.97867C18.7326 11.981 13.7782 16.1107 11.9994 17.5761C10.2207 16.111 5.26733 11.9817 3.46527 9.97902C1.69712 8.01379 1.68052 5.21498 3.42677 3.46873C4.31862 2.57724 5.48985 2.13114 6.66108 2.13114C7.83231 2.13114 9.00354 2.57688 9.89539 3.46873L11.2277 4.80102C11.3863 4.95961 11.5862 5.05427 11.796 5.08747C12.1365 5.16059 12.5059 5.06557 12.7708 4.80137L14.1038 3.46873C15.8879 1.68539 18.7898 1.68574 20.5728 3.46873C22.3191 5.21498 22.3025 8.01378 20.535 9.97867Z" fill="#636B7F"/>
                    </svg>
                </div>
                <p className="text-[#636B7F] text-[16px] font-[400]">كود خصـم {slide.discount_range}</p>

                <div className="flex my-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8.33333L7 7V3.66667M1 7C1 7.78793 1.15519 8.56815 1.45672 9.2961C1.75825 10.0241 2.20021 10.6855 2.75736 11.2426C3.31451 11.7998 3.97595 12.2417 4.7039 12.5433C5.43185 12.8448 6.21207 13 7 13C7.78793 13 8.56815 12.8448 9.2961 12.5433C10.0241 12.2417 10.6855 11.7998 11.2426 11.2426C11.7998 10.6855 12.2417 10.0241 12.5433 9.2961C12.8448 8.56815 13 7.78793 13 7C13 6.21207 12.8448 5.43185 12.5433 4.7039C12.2417 3.97595 11.7998 3.31451 11.2426 2.75736C10.6855 2.20021 10.0241 1.75825 9.2961 1.45672C8.56815 1.15519 7.78793 1 7 1C6.21207 1 5.43185 1.15519 4.7039 1.45672C3.97595 1.75825 3.31451 2.20021 2.75736 2.75736C2.20021 3.31451 1.75825 3.97595 1.45672 4.7039C1.15519 5.43185 1 6.21207 1 7Z" stroke="#FFA360" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#FFA360] text-[12px] font-[500] mx-1">اخر استخدام منذ {slide.last_used}</p>
                </div>

                <button className="bg-[#543883] text-white lg:flex hidden w-[218px] h-[40px] justify-center items-center rounded-md">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C7.6165 16 7.26084 15.7539 6.94294 15.2685C6.59447 14.7364 5.84894 14.5367 5.28119 14.8232C4.78528 15.0735 4.35953 15.0996 4.01559 14.9011C3.67175 14.7026 3.48156 14.3208 3.45031 13.7662C3.41453 13.1312 2.86881 12.5854 2.23378 12.5497C1.67925 12.5185 1.29741 12.3283 1.09884 11.9844C0.900312 11.6405 0.9265 11.2147 1.17675 10.7188C1.46328 10.151 1.26353 9.4055 0.731438 9.05703C0.246094 8.73913 0 8.3835 0 8C0 7.6165 0.246094 7.26084 0.7315 6.94294C1.26353 6.59447 1.46328 5.84897 1.17675 5.28113C0.926562 4.78531 0.900344 4.35956 1.09884 4.01566C1.29744 3.67172 1.67931 3.4815 2.23384 3.45028C2.86881 3.4145 3.41453 2.86881 3.45031 2.23381C3.48153 1.67928 3.67172 1.29744 4.01562 1.09888C4.3595 0.900281 4.78531 0.926469 5.28122 1.17675C5.84903 1.46328 6.5945 1.26353 6.94306 0.731438C7.26091 0.246094 7.61653 0 8 0C8.38347 0 8.73909 0.246094 9.057 0.731406C9.4055 1.26353 10.151 1.46325 10.7188 1.17672C11.2147 0.926469 11.6405 0.900281 11.9844 1.09884C12.3283 1.29741 12.5185 1.67928 12.5497 2.23381C12.5855 2.86878 13.1312 3.4145 13.7662 3.45028C14.3207 3.4815 14.7026 3.67169 14.9011 4.01559C15.0997 4.35953 15.0735 4.78528 14.8232 5.28113C14.5367 5.84897 14.7364 6.59447 15.2685 6.94294C15.7539 7.26084 16 7.6165 16 8C16 8.3835 15.7539 8.73913 15.2686 9.057C14.7365 9.4055 14.5367 10.151 14.8232 10.7188C15.0735 11.2147 15.0997 11.6405 14.9012 11.9844C14.7026 12.3282 14.3208 12.5185 13.7662 12.5497C13.1312 12.5855 12.5854 13.1312 12.5497 13.7662C12.5184 14.3208 12.3282 14.7026 11.9843 14.9011C11.6405 15.0997 11.2147 15.0735 10.7188 14.8232C10.1509 14.5367 9.40547 14.7365 9.05703 15.2685C8.73916 15.7539 8.3835 16 8 16ZM7.72722 14.7549C7.87147 14.9751 7.96797 15.041 8 15.0583C8.03206 15.041 8.12853 14.9751 8.27278 14.7549C8.8845 13.8209 10.1445 13.4833 11.1412 13.9863C11.3836 14.1086 11.4998 14.0983 11.5156 14.0892C11.5314 14.0801 11.5984 13.9846 11.6137 13.7135C11.6765 12.5988 12.5988 11.6764 13.7135 11.6137C13.9847 11.5984 14.0802 11.5314 14.0893 11.5156C14.0984 11.4999 14.1087 11.3837 13.9863 11.1412C13.4833 10.1444 13.8209 8.88447 14.7549 8.27275C14.9752 8.1285 15.041 8.03206 15.0583 8C15.041 7.96794 14.9752 7.87147 14.7549 7.72722C13.821 7.1155 13.4834 5.85553 13.9863 4.85875C14.1087 4.61631 14.0984 4.50012 14.0893 4.48434C14.0802 4.46862 13.9847 4.40156 13.7135 4.38628C12.5989 4.3235 11.6765 3.40119 11.6138 2.28653C11.5985 2.01534 11.5314 1.91981 11.5157 1.91072C11.4999 1.90159 11.3837 1.89131 11.1412 2.01369C10.1412 2.51838 8.8825 2.17591 8.27281 1.24506C8.12859 1.02487 8.03216 0.959 8.00006 0.941719C7.968 0.959 7.87156 1.02484 7.72734 1.24503C7.11559 2.179 5.85566 2.51666 4.85887 2.01366C4.61634 1.89125 4.50019 1.90159 4.48447 1.91069C4.46869 1.91981 4.40163 2.01531 4.38634 2.2865C4.32356 3.40116 3.40125 4.3235 2.28659 4.38625C2.01541 4.40153 1.91988 4.46859 1.91078 4.48438C1.90172 4.50009 1.89141 4.61628 2.01375 4.85872C2.51675 5.8555 2.17913 7.11547 1.24519 7.72719C1.02491 7.87144 0.959063 7.96794 0.941813 7.99997C0.959063 8.03203 1.02491 8.12847 1.24516 8.27275C2.17913 8.88444 2.51675 10.1444 2.01378 11.1412C1.89141 11.3837 1.90172 11.4999 1.91081 11.5156C1.91991 11.5314 2.01537 11.5984 2.28653 11.6137C3.40122 11.6764 4.32359 12.5988 4.38637 13.7135C4.40166 13.9847 4.46863 14.0801 4.48441 14.0892C4.50025 14.0983 4.61641 14.1086 4.85887 13.9863C5.85894 13.4816 7.11753 13.824 7.72722 14.7549Z" fill="white"/>
                    <path d="M6.125 6.59375C5.34959 6.59375 4.71875 5.96291 4.71875 5.1875C4.71875 4.41209 5.34959 3.78125 6.125 3.78125C6.90041 3.78125 7.53125 4.41209 7.53125 5.1875C7.53125 5.96291 6.90041 6.59375 6.125 6.59375ZM6.125 4.71875C5.86653 4.71875 5.65625 4.92903 5.65625 5.1875C5.65625 5.44597 5.86653 5.65625 6.125 5.65625C6.38347 5.65625 6.59375 5.44597 6.59375 5.1875C6.59375 4.92903 6.38347 4.71875 6.125 4.71875Z" fill="white"/>
                    <path d="M9.875 12.2188C9.09959 12.2188 8.46875 11.5879 8.46875 10.8125C8.46875 10.0371 9.09959 9.40625 9.875 9.40625C10.6504 9.40625 11.2812 10.0371 11.2812 10.8125C11.2812 11.5879 10.6504 12.2188 9.875 12.2188ZM9.875 10.3438C9.61653 10.3438 9.40625 10.554 9.40625 10.8125C9.40625 11.071 9.61653 11.2812 9.875 11.2812C10.1335 11.2812 10.3438 11.071 10.3438 10.8125C10.3438 10.554 10.1335 10.3438 9.875 10.3438Z" fill="white"/>
                    <path d="M4.8125 11.4688L10.4375 3.96875L11.1875 4.53125L5.5625 12.0313L4.8125 11.4688Z" fill="white"/>
                    </svg>
                    <p className="mr-2">عرض الكود</p>
                </button>
            </div>
            </div>
            <button className="bg-[#543883] text-white lg:hidden flex w-full h-[40px] justify-center items-center rounded-md">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C7.6165 16 7.26084 15.7539 6.94294 15.2685C6.59447 14.7364 5.84894 14.5367 5.28119 14.8232C4.78528 15.0735 4.35953 15.0996 4.01559 14.9011C3.67175 14.7026 3.48156 14.3208 3.45031 13.7662C3.41453 13.1312 2.86881 12.5854 2.23378 12.5497C1.67925 12.5185 1.29741 12.3283 1.09884 11.9844C0.900312 11.6405 0.9265 11.2147 1.17675 10.7188C1.46328 10.151 1.26353 9.4055 0.731438 9.05703C0.246094 8.73913 0 8.3835 0 8C0 7.6165 0.246094 7.26084 0.7315 6.94294C1.26353 6.59447 1.46328 5.84897 1.17675 5.28113C0.926562 4.78531 0.900344 4.35956 1.09884 4.01566C1.29744 3.67172 1.67931 3.4815 2.23384 3.45028C2.86881 3.4145 3.41453 2.86881 3.45031 2.23381C3.48153 1.67928 3.67172 1.29744 4.01562 1.09888C4.3595 0.900281 4.78531 0.926469 5.28122 1.17675C5.84903 1.46328 6.5945 1.26353 6.94306 0.731438C7.26091 0.246094 7.61653 0 8 0C8.38347 0 8.73909 0.246094 9.057 0.731406C9.4055 1.26353 10.151 1.46325 10.7188 1.17672C11.2147 0.926469 11.6405 0.900281 11.9844 1.09884C12.3283 1.29741 12.5185 1.67928 12.5497 2.23381C12.5855 2.86878 13.1312 3.4145 13.7662 3.45028C14.3207 3.4815 14.7026 3.67169 14.9011 4.01559C15.0997 4.35953 15.0735 4.78528 14.8232 5.28113C14.5367 5.84897 14.7364 6.59447 15.2685 6.94294C15.7539 7.26084 16 7.6165 16 8C16 8.3835 15.7539 8.73913 15.2686 9.057C14.7365 9.4055 14.5367 10.151 14.8232 10.7188C15.0735 11.2147 15.0997 11.6405 14.9012 11.9844C14.7026 12.3282 14.3208 12.5185 13.7662 12.5497C13.1312 12.5855 12.5854 13.1312 12.5497 13.7662C12.5184 14.3208 12.3282 14.7026 11.9843 14.9011C11.6405 15.0997 11.2147 15.0735 10.7188 14.8232C10.1509 14.5367 9.40547 14.7365 9.05703 15.2685C8.73916 15.7539 8.3835 16 8 16ZM7.72722 14.7549C7.87147 14.9751 7.96797 15.041 8 15.0583C8.03206 15.041 8.12853 14.9751 8.27278 14.7549C8.8845 13.8209 10.1445 13.4833 11.1412 13.9863C11.3836 14.1086 11.4998 14.0983 11.5156 14.0892C11.5314 14.0801 11.5984 13.9846 11.6137 13.7135C11.6765 12.5988 12.5988 11.6764 13.7135 11.6137C13.9847 11.5984 14.0802 11.5314 14.0893 11.5156C14.0984 11.4999 14.1087 11.3837 13.9863 11.1412C13.4833 10.1444 13.8209 8.88447 14.7549 8.27275C14.9752 8.1285 15.041 8.03206 15.0583 8C15.041 7.96794 14.9752 7.87147 14.7549 7.72722C13.821 7.1155 13.4834 5.85553 13.9863 4.85875C14.1087 4.61631 14.0984 4.50012 14.0893 4.48434C14.0802 4.46862 13.9847 4.40156 13.7135 4.38628C12.5989 4.3235 11.6765 3.40119 11.6138 2.28653C11.5985 2.01534 11.5314 1.91981 11.5157 1.91072C11.4999 1.90159 11.3837 1.89131 11.1412 2.01369C10.1412 2.51838 8.8825 2.17591 8.27281 1.24506C8.12859 1.02487 8.03216 0.959 8.00006 0.941719C7.968 0.959 7.87156 1.02484 7.72734 1.24503C7.11559 2.179 5.85566 2.51666 4.85887 2.01366C4.61634 1.89125 4.50019 1.90159 4.48447 1.91069C4.46869 1.91981 4.40163 2.01531 4.38634 2.2865C4.32356 3.40116 3.40125 4.3235 2.28659 4.38625C2.01541 4.40153 1.91988 4.46859 1.91078 4.48438C1.90172 4.50009 1.89141 4.61628 2.01375 4.85872C2.51675 5.8555 2.17913 7.11547 1.24519 7.72719C1.02491 7.87144 0.959063 7.96794 0.941813 7.99997C0.959063 8.03203 1.02491 8.12847 1.24516 8.27275C2.17913 8.88444 2.51675 10.1444 2.01378 11.1412C1.89141 11.3837 1.90172 11.4999 1.91081 11.5156C1.91991 11.5314 2.01537 11.5984 2.28653 11.6137C3.40122 11.6764 4.32359 12.5988 4.38637 13.7135C4.40166 13.9847 4.46863 14.0801 4.48441 14.0892C4.50025 14.0983 4.61641 14.1086 4.85887 13.9863C5.85894 13.4816 7.11753 13.824 7.72722 14.7549Z" fill="white"/>
                <path d="M6.125 6.59375C5.34959 6.59375 4.71875 5.96291 4.71875 5.1875C4.71875 4.41209 5.34959 3.78125 6.125 3.78125C6.90041 3.78125 7.53125 4.41209 7.53125 5.1875C7.53125 5.96291 6.90041 6.59375 6.125 6.59375ZM6.125 4.71875C5.86653 4.71875 5.65625 4.92903 5.65625 5.1875C5.65625 5.44597 5.86653 5.65625 6.125 5.65625C6.38347 5.65625 6.59375 5.44597 6.59375 5.1875C6.59375 4.92903 6.38347 4.71875 6.125 4.71875Z" fill="white"/>
                <path d="M9.875 12.2188C9.09959 12.2188 8.46875 11.5879 8.46875 10.8125C8.46875 10.0371 9.09959 9.40625 9.875 9.40625C10.6504 9.40625 11.2812 10.0371 11.2812 10.8125C11.2812 11.5879 10.6504 12.2188 9.875 12.2188ZM9.875 10.3438C9.61653 10.3438 9.40625 10.554 9.40625 10.8125C9.40625 11.071 9.61653 11.2812 9.875 11.2812C10.1335 11.2812 10.3438 11.071 10.3438 10.8125C10.3438 10.554 10.1335 10.3438 9.875 10.3438Z" fill="white"/>
                <path d="M4.8125 11.4688L10.4375 3.96875L11.1875 4.53125L5.5625 12.0313L4.8125 11.4688Z" fill="white"/>
                </svg>
                <p className="mr-2">عرض الكود</p>
            </button>
        </div>
        <div className="flex items-center justify-between w-full h-full">
        <div className="flex">
            <button className="bg-[#19772A] text-white text-[12px] font-[500] w-[69px] h-[24px] rounded-[4px]">كود فعال</button>
            <div className="flex border-r-[1px] border-[#C6CDDC] border-solid mr-3 items-center px-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9583 6.13797C15.8536 5.81398 15.5662 5.58387 15.2262 5.55323L10.6082 5.13391L8.78208 0.859754C8.64744 0.546514 8.34079 0.34375 8.00008 0.34375C7.65938 0.34375 7.35273 0.546514 7.21808 0.860487L5.39198 5.13391L0.773211 5.55323C0.433847 5.58461 0.147219 5.81398 0.0418692 6.13797C-0.0634802 6.46195 0.0338123 6.8173 0.290533 7.04131L3.78122 10.1027L2.7519 14.6368C2.67658 14.9702 2.80598 15.3148 3.0826 15.5148C3.23128 15.6222 3.40524 15.6769 3.58066 15.6769C3.73191 15.6769 3.88193 15.6361 4.01658 15.5556L8.00008 13.1748L11.9821 15.5556C12.2735 15.7309 12.6408 15.7149 12.9168 15.5148C13.1936 15.3142 13.3229 14.9695 13.2475 14.6368L12.2182 10.1027L15.7089 7.04192C15.9656 6.8173 16.0636 6.46256 15.9583 6.13797Z" fill="#FFC107"/>
                </svg>
                <p className="mr-1">({slide.rate})</p>
            </div>
        </div>

        <div className="flex">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#543883"/>
            </svg>
            <p className="mr-1 text-[#262254] text-[16px] font-[500]">مشاركة</p>
        </div>
        </div>
    </div>
  )
}

export default CopounsCard