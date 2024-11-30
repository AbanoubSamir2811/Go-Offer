"use client";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

// Reusable component for a list item
const ListItem = ({ text }) => (
  <div className="flex items-center text-[#543883] text-[20px] font-[600] my-2">
    <div className="w-[11px] h-[11px] rounded-full bg-[#FFA360] ml-2"></div>
    <p>{text}</p>
  </div>
);

// Section component
const Section = ({ title, items }) => (
  <div>
    <p className="text-[#1E1C36] text-[20px] font-[700]">{title}</p>
    {items.map((item, index) => (
      <ListItem key={index} text={item} />
    ))}
  </div>
);

function Footer() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  if (pathname === '/login' || pathname === '/register') return null;

  return (
    <div className="w-[90vw] min-w-[300px] min-w-[300px] justify-self-center flex flex-col items-center border-t-[#A33670] border-t-[3px] border-solid mt-24 p-12">
      <Image
        src="/logo22.png"
        alt="Logo"
        width={118}
        height={91}
      />
      <div className="flex justify-between w-full my-7 pb-7 border-b-[3px] border-[#CED1E5] border-solid">
        <Section
          title="روابط سريعة"
          items={['الرئيسية', 'الكوبونات', 'الصفقات', 'تواصل معنا', 'العرض اليومي']}
        />
        <Section
          title="الفئات"
          items={['البقالة', 'الملابس', 'الرفهيات والسفر', 'مستلزمات المنزل', 'الكفيهات']}
        />
        <Section
          title="العلامات التجارية"
          items={['العثـيم', 'تمور واكثر', 'نعناع', 'نون', 'سنتر بوينت']}
        />
        <div>
            <p className='text-[#1E1C36] text-[20px] font-[700]'> التواصل الاجتماعي والتطبيق</p>
            <div className='flex my-2 gap-4'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5503_35837)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9618 0.363281C14.1252 0.387969 16.0797 0.919677 17.8252 1.9584C19.5498 2.9764 20.9845 4.41982 21.9919 6.15065C23.0243 7.90663 23.5528 9.87293 23.5774 12.0495C23.5161 15.0277 22.5768 17.5713 20.7595 19.6804C18.9421 21.7895 16.6145 23.0943 14.2051 23.5945V15.2447H16.483L16.9982 11.9635H13.5488V9.81436C13.5297 9.36883 13.6706 8.93115 13.946 8.58046C14.2219 8.22881 14.7077 8.04399 15.4033 8.02599H17.4863V5.15169C17.4564 5.14207 17.1728 5.10405 16.6355 5.03761C16.0262 4.96632 15.4134 4.92824 14.7999 4.92354C13.4114 4.92995 12.3132 5.32162 11.5055 6.09857C10.6977 6.8753 10.2851 7.99907 10.2676 9.46986V11.9635H7.64258V15.2447H10.2676V23.5945C7.30906 23.0943 4.98148 21.7895 3.16414 19.6804C1.34679 17.5713 0.407513 15.0277 0.346191 12.0495C0.370726 9.87283 0.89922 7.90653 1.93167 6.15065C2.93915 4.41982 4.37381 2.9764 6.09847 1.9584C7.84389 0.919877 9.79833 0.388169 11.9618 0.363281Z" fill="#262254"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5503_35837">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5503_35833)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 9.37521C13.6227 9.37521 14.9382 10.6704 14.9382 12.2681C14.9382 13.8655 13.6227 15.1607 11.9999 15.1607C10.3771 15.1607 9.06156 13.8655 9.06156 12.2681C9.06156 10.6704 10.3771 9.37521 11.9999 9.37521ZM11.9999 8.21844C9.72798 8.21844 7.88622 10.0315 7.88622 12.2681C7.88622 14.5044 9.72798 16.3177 11.9999 16.3177C14.2718 16.3177 16.1136 14.5044 16.1136 12.2681C16.1136 10.0315 14.2718 8.21844 11.9999 8.21844ZM16.2406 7.24496C16.0125 7.24853 15.7906 7.31943 15.6027 7.44875C15.4148 7.57806 15.2693 7.76003 15.1844 7.97178C15.0996 8.18354 15.0793 8.41563 15.126 8.63891C15.1727 8.86219 15.2843 9.06669 15.4469 9.22672C15.6094 9.38675 15.8156 9.49516 16.0396 9.53835C16.2636 9.58154 16.4954 9.55757 16.7058 9.46945C16.9162 9.38133 17.0958 9.233 17.2222 9.04309C17.3485 8.85318 17.4159 8.63016 17.4159 8.40205C17.4135 8.09276 17.2883 7.79711 17.0679 7.58012C16.8475 7.36313 16.5499 7.24257 16.2406 7.24496ZM9.12846 5.98565H14.8713C16.7396 5.98565 18.2542 7.47664 18.2542 9.31561V15.2203C18.2542 17.0596 16.7396 18.5502 14.8713 18.5502H9.12846C7.26018 18.5502 5.74563 17.0596 5.74563 15.2203V9.31561C5.74563 7.47664 7.26016 5.98565 9.12846 5.98565ZM8.58683 4.83401C6.36613 4.83401 4.56589 6.60635 4.56589 8.79234V15.7435C4.56589 17.9299 6.36611 19.7019 8.58683 19.7019H15.413C17.6337 19.7019 19.4339 17.9299 19.4339 15.7435V8.79234C19.4339 6.60634 17.6337 4.83401 15.413 4.83401H8.58683ZM11.9999 0.652344C18.415 0.652344 23.6155 5.85266 23.6155 12.2681C23.6155 18.6832 18.4151 23.8835 11.9999 23.8835C5.58475 23.8835 0.384277 18.6832 0.384277 12.2681C0.384277 5.85267 5.58475 0.652344 11.9999 0.652344Z" fill="#262254"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5503_35833">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div className='flex gap-4'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5503_35833)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 9.37521C13.6227 9.37521 14.9382 10.6704 14.9382 12.2681C14.9382 13.8655 13.6227 15.1607 11.9999 15.1607C10.3771 15.1607 9.06156 13.8655 9.06156 12.2681C9.06156 10.6704 10.3771 9.37521 11.9999 9.37521ZM11.9999 8.21844C9.72798 8.21844 7.88622 10.0315 7.88622 12.2681C7.88622 14.5044 9.72798 16.3177 11.9999 16.3177C14.2718 16.3177 16.1136 14.5044 16.1136 12.2681C16.1136 10.0315 14.2718 8.21844 11.9999 8.21844ZM16.2406 7.24496C16.0125 7.24853 15.7906 7.31943 15.6027 7.44875C15.4148 7.57806 15.2693 7.76003 15.1844 7.97178C15.0996 8.18354 15.0793 8.41563 15.126 8.63891C15.1727 8.86219 15.2843 9.06669 15.4469 9.22672C15.6094 9.38675 15.8156 9.49516 16.0396 9.53835C16.2636 9.58154 16.4954 9.55757 16.7058 9.46945C16.9162 9.38133 17.0958 9.233 17.2222 9.04309C17.3485 8.85318 17.4159 8.63016 17.4159 8.40205C17.4135 8.09276 17.2883 7.79711 17.0679 7.58012C16.8475 7.36313 16.5499 7.24257 16.2406 7.24496ZM9.12846 5.98565H14.8713C16.7396 5.98565 18.2542 7.47664 18.2542 9.31561V15.2203C18.2542 17.0596 16.7396 18.5502 14.8713 18.5502H9.12846C7.26018 18.5502 5.74563 17.0596 5.74563 15.2203V9.31561C5.74563 7.47664 7.26016 5.98565 9.12846 5.98565ZM8.58683 4.83401C6.36613 4.83401 4.56589 6.60635 4.56589 8.79234V15.7435C4.56589 17.9299 6.36611 19.7019 8.58683 19.7019H15.413C17.6337 19.7019 19.4339 17.9299 19.4339 15.7435V8.79234C19.4339 6.60634 17.6337 4.83401 15.413 4.83401H8.58683ZM11.9999 0.652344C18.415 0.652344 23.6155 5.85266 23.6155 12.2681C23.6155 18.6832 18.4151 23.8835 11.9999 23.8835C5.58475 23.8835 0.384277 18.6832 0.384277 12.2681C0.384277 5.85267 5.58475 0.652344 11.9999 0.652344Z" fill="#262254"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5503_35833">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5503_35839)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0289 0.652344C5.59828 0.652344 0.384277 5.83377 0.384277 12.2681C0.384277 18.6451 5.59828 23.8835 12.0289 23.8835C18.4595 23.8835 23.6155 18.6451 23.6155 12.2681C23.6155 5.83377 18.4595 0.652344 12.0289 0.652344ZM9.1322 17.9049H6.1776V7.7128H9.1322V17.9049ZM7.7418 7.08635C6.98867 7.08635 6.40934 6.51694 6.40934 5.72001C6.40934 4.97981 6.98867 4.35336 7.7418 4.35336C8.49493 4.4104 9.1322 4.97981 9.1322 5.72001C9.1322 6.51694 8.49493 7.08635 7.7418 7.08635ZM19.2705 17.9049H16.3739V11.5846C16.3739 10.8444 16.1421 10.332 15.2731 10.332C13.7669 10.332 13.4772 11.5846 13.4772 11.5846V17.9049H10.5805V7.7128H13.4772V8.68083C13.8827 8.39596 14.9255 7.7128 16.3739 7.7128C17.3008 7.7128 19.2705 8.28221 19.2705 11.6987L19.2705 17.9049Z" fill="#262254"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5503_35839">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5503_35835)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1342 14.507C16.0416 14.5067 15.9522 14.5404 15.8829 14.6018C15.8139 14.6554 15.7794 14.8575 15.7794 15.2084V15.3837L15.8016 15.4055H16.4447L16.4669 15.3837V14.9527C16.4669 14.6553 16.356 14.5068 16.1342 14.507ZM13.3326 14.4923C13.2652 14.4931 13.1988 14.5094 13.1386 14.5398C13.0784 14.5701 13.0259 14.6138 12.9852 14.6675V17.2031C13.0985 17.3249 13.2143 17.3858 13.3326 17.3858H13.3991C13.5519 17.3858 13.6283 17.2688 13.6283 17.0349V14.8797C13.6086 14.6214 13.51 14.4923 13.3326 14.4923ZM9.27424 13.9004H10.0356V17.0279C10.0356 17.2079 10.0923 17.298 10.2056 17.298H10.2574C10.3757 17.298 10.5235 17.1958 10.7009 16.9913V13.9004H11.4697V17.9776H10.7009V17.5393H10.6936C10.388 17.8703 10.0923 18.0358 9.80648 18.0359H9.7917C9.7169 18.0386 9.64262 18.0226 9.57552 17.9895C9.50842 17.9563 9.45062 17.907 9.4073 17.8459C9.31858 17.7536 9.27423 17.4833 9.27424 17.0349V13.9004ZM16.1121 13.8056H16.1934C16.9031 13.8056 17.2579 14.2317 17.2579 15.0841V16.0268H15.8016L15.7794 16.0486V16.7501C15.7794 17.1689 15.8805 17.3783 16.0825 17.3784H16.149C16.2195 17.3766 16.2883 17.3565 16.3486 17.3201C16.4275 17.2615 16.4669 17.1007 16.4669 16.8379V16.5235H17.2579V16.6988C17.2579 17.0205 17.2283 17.2617 17.1692 17.4223C17.0065 17.8655 16.6542 18.0871 16.1121 18.0872C15.9526 18.0888 15.7943 18.059 15.6464 17.9994C15.2176 17.8046 15.0032 17.4296 15.0032 16.8744V14.9671C15.004 14.8024 15.034 14.6391 15.0919 14.4849C15.3137 14.0321 15.6537 13.8057 16.1121 13.8056ZM12.2238 12.4536H12.9852V14.2221H12.9999C13.2217 13.9735 13.4459 13.8493 13.6726 13.8495C14.1704 13.8495 14.4192 14.2001 14.4193 14.9015V17.1375C14.4181 17.2701 14.4032 17.4023 14.3749 17.5319C14.2615 17.8581 14.0619 18.0213 13.7761 18.0215H13.6726C13.4312 18.0215 13.2069 17.9095 12.9999 17.6854H12.9852V17.9776H12.2238V12.4536ZM6.63518 12.4536H9.28161V13.2429H8.40935L8.3872 13.2647V17.9776H7.52968V13.2647L7.50749 13.2429H6.63518V12.4536ZM11.3441 11.0216C10.2648 11.0216 9.34814 11.0363 8.59416 11.0655C7.61835 11.0851 7.09105 11.1216 7.01226 11.1751C6.54406 11.336 6.204 11.5917 5.99207 11.9422C5.84427 12.2249 5.76296 12.4221 5.74814 12.5341C5.6742 13.3281 5.63724 14.1562 5.63727 15.0184V15.435C5.63727 16.1607 5.65945 16.7867 5.7038 17.3127C5.7038 18.0141 5.89599 18.528 6.28036 18.8543C6.59579 19.1321 6.91612 19.2929 7.24135 19.3366C8.43397 19.4048 9.80892 19.4389 11.3662 19.4388H12.5564C13.8426 19.4388 14.9761 19.4169 15.9568 19.3731C16.5334 19.3731 16.94 19.3098 17.1765 19.1831C17.6447 18.9444 17.9601 18.5912 18.1227 18.1237C18.2016 17.992 18.2558 17.1225 18.2854 15.5151V14.9454C18.2854 14.234 18.2632 13.6422 18.2188 13.1698C18.2188 12.4684 18.0414 11.9594 17.6866 11.6427C17.4746 11.3943 17.1395 11.2189 16.6812 11.1165C15.4984 11.0534 14.126 11.0218 12.5638 11.0217L11.3441 11.0216ZM11.8671 6.91525L12.0076 6.93736C12.1407 6.99087 12.2072 7.098 12.2072 7.25876V9.37042C12.2072 9.64311 12.0963 9.77951 11.8746 9.77964H11.8671C11.6651 9.77964 11.5641 9.67005 11.5641 9.45087V7.20045C11.5641 7.03478 11.6651 6.93971 11.8671 6.91525ZM13.6635 6.30162L13.6413 6.32341V9.64792C13.6394 9.79525 13.6543 9.94232 13.6857 10.0863C13.7645 10.3349 13.9296 10.4591 14.1809 10.4589C14.4618 10.4589 14.7551 10.2934 15.0606 9.96226V10.3715L15.0828 10.3932H15.822L15.8442 10.3715V6.32342L15.822 6.30163H15.0828L15.0606 6.32342V9.40696C14.8832 9.60178 14.7378 9.69919 14.6245 9.69919H14.5949C14.4766 9.69919 14.4175 9.58961 14.4175 9.37043V6.32342L14.3953 6.30163L13.6635 6.30162ZM11.8671 6.20647C11.5616 6.20647 11.3128 6.2869 11.1205 6.44776C10.8791 6.59869 10.7583 6.9202 10.7583 7.41226V9.16569C10.7561 9.3343 10.7659 9.50286 10.7879 9.67006C10.9456 10.2254 11.3078 10.503 11.8746 10.5029L12.2441 10.459C12.7468 10.2984 12.9982 9.94777 12.9982 9.40699V7.22225C12.9999 7.09971 12.9773 6.97805 12.9316 6.86433C12.7444 6.42565 12.4118 6.20637 11.9337 6.20647L11.8671 6.20647ZM7.91969 4.85487L7.90491 4.86962L8.0306 5.29323C8.62688 7.19309 8.92503 8.17703 8.92505 8.24507V10.3715L8.94724 10.3933H9.78255L9.80474 10.3715V8.14285C9.80474 8.09895 10.1399 7.00787 10.8101 4.86961H10.8027L10.7879 4.85486H9.923L9.39076 7.06138H9.33901C9.17635 6.3795 9.03097 5.81201 8.90286 5.35891C8.82892 5.02278 8.78211 4.85476 8.76243 4.85486L7.91969 4.85487ZM11.9613 0.53125C18.3764 0.53125 23.577 5.73191 23.577 12.147C23.577 18.5621 18.3764 23.7624 11.9613 23.7624C5.54624 23.7624 0.345703 18.5621 0.345703 12.147C0.345703 5.73191 5.54619 0.53125 11.9613 0.53125Z" fill="#262254"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5503_35835">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <Image className='my-4' src="/app (1) 1.png" alt='app (1) 1.png' width={142} height={44}/>
            <Image src="/google (1) 1.png" alt='app (1) 1.png' width={142} height={44}/>
        </div>
      </div>
      <div className='flex justify-between w-full text-[20px] text-[#1E1C36]font-[500]'>
            <div className='flex text-[#853962]'>
                <p className='border-b-[1px] pb-0 text-center ml-8 border-[#853962] border-solid'>خصوصية الاستخدام</p>
                <p className='border-b-[1px] pb-0 text-center border-[#853962] border-solid'>الشروط والاحكام</p>
            </div>
            <p>الحقوق محفوظة الي جو اوفر 2024</p>
        </div>
    </div>
  );
}

export default Footer;
