"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { loginService } from "../services/auth";
import { useRouter } from 'next/navigation';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
  
      try {
        const data = await loginService(email, password);
        // Redirect to the dashboard or home page
        router.push("/");
      } catch (err) {
        setError(err.message);
      }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            router.push("/");
        }
    })
  return (
    <div className='flex h-fit w-full p-[85px] justify-between'>
        <div>
            <div className='my-4'>
                <p className='text-[#1C262D] text-[24px] font-[700]'>تسجيل الدخول</p>
                <p className='text-[#5D686F] text-[14px] font-[500]'>يرجي ادخال واكمال البيانات التالية</p>
            </div>

            <form className="w-[509px] mx-auto" onSubmit={handleSubmit}>
                <div className='mb-96'>
                    <label htmlFor="email-address-icon" className="text-[14px] font-[500] text-[#344054]">البريد الالكتروني </label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3337 4.99967C18.3337 4.08301 17.5837 3.33301 16.667 3.33301H3.33366C2.41699 3.33301 1.66699 4.08301 1.66699 4.99967M18.3337 4.99967V14.9997C18.3337 15.9163 17.5837 16.6663 16.667 16.6663H3.33366C2.41699 16.6663 1.66699 15.9163 1.66699 14.9997V4.99967M18.3337 4.99967L10.0003 10.833L1.66699 4.99967" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-address-icon" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="اكتب البريد الالكتروني هنا..."/>
                    </div>

                    <label htmlFor="password" className="text-[14px] font-[500] text-[#344054] mt-4">كلمة المرور</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6864 5.64844H12.2305V4.23047C12.2305 1.89778 10.3327 0 8 0C5.66731 0 3.76953 1.89778 3.76953 4.23047V5.64844H3.31363C2.52469 5.64844 1.88281 6.29031 1.88281 7.07928V14.5692C1.88281 15.3581 2.52469 16 3.31363 16H12.6864C13.4753 16 14.1172 15.3581 14.1172 14.5692V7.07928C14.1172 6.29031 13.4753 5.64844 12.6864 5.64844ZM4.70703 4.23047C4.70703 2.41472 6.18425 0.9375 8 0.9375C9.81575 0.9375 11.293 2.41472 11.293 4.23047V5.64844H10.3555V4.01044C10.3555 2.83294 9.39753 1.875 8.22003 1.875H7.77997C6.60247 1.875 5.64453 2.83294 5.64453 4.01044V5.64844H4.70703V4.23047ZM6.58203 5.64844V4.01044C6.58203 3.34991 7.11941 2.8125 7.77997 2.8125H8.22003C8.88059 2.8125 9.41797 3.34991 9.41797 4.01044V5.64844H6.58203ZM13.1797 14.5692C13.1797 14.8412 12.9584 15.0625 12.6864 15.0625H3.31363C3.04163 15.0625 2.82031 14.8412 2.82031 14.5692V7.07928C2.82031 6.80725 3.04163 6.58594 3.31363 6.58594H12.6864C12.9584 6.58594 13.1797 6.80725 13.1797 7.07928V14.5692Z" fill="#667085"/>
                            <path d="M8 8.55371C7.22244 8.55371 6.58984 9.1863 6.58984 9.96387C6.58984 10.5771 6.98347 11.0999 7.53125 11.2936V12.7881C7.53125 13.047 7.74112 13.2568 8 13.2568C8.25888 13.2568 8.46875 13.047 8.46875 12.7881V11.2936C9.01653 11.0999 9.41016 10.5771 9.41016 9.96387C9.41016 9.1863 8.77756 8.55371 8 8.55371ZM8 10.4365C7.73937 10.4365 7.52734 10.2245 7.52734 9.96387C7.52734 9.70324 7.73937 9.49121 8 9.49121C8.26063 9.49121 8.47266 9.70324 8.47266 9.96387C8.47266 10.2245 8.26063 10.4365 8 10.4365Z" fill="#667085"/>
                            </svg>
                        </div>
                        <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder='ادخل كلمة المرور'></input>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
                
                <button type="submit" className='bg-[#543883] text-white rounded-[8px] w-full text-[20px] font-[500] h-[56px]'>تسجيل الدخول</button>
                <p className='text-center text-[#1C262D] text-[16px] font-[400] my-3'>لديك حساب بالفعل ؟ <span className='font-[700] text-[#A33670]'><Link href='/'>انشاء حساب</Link></span></p>
                <p className='text-center text-[#5D686F] text-[16px] font-[400]'>او سجل حساب عن طريق</p>
                <div className='flex justify-center gap-3 mt-3'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_5503_40274)">
                        <rect x="2" y="1" width="44" height="44" rx="8" fill="white"/>
                        <rect x="2.5" y="1.5" width="43" height="43" rx="7.5" stroke="#D0D5DD"/>
                        <path d="M32.8428 28.1447C32.5101 28.9133 32.1163 29.6208 31.66 30.2713C31.0381 31.158 30.5288 31.7719 30.1364 32.1127C29.528 32.6722 28.8762 32.9587 28.1782 32.975C27.6771 32.975 27.0728 32.8324 26.3693 32.5432C25.6636 32.2553 25.015 32.1127 24.422 32.1127C23.8 32.1127 23.133 32.2553 22.4195 32.5432C21.7049 32.8324 21.1293 32.9832 20.6892 32.9981C20.0198 33.0266 19.3526 32.7319 18.6867 32.1127C18.2616 31.742 17.73 31.1064 17.0931 30.2061C16.4098 29.2446 15.848 28.1297 15.4078 26.8587C14.9365 25.4857 14.7002 24.1563 14.7002 22.8692C14.7002 21.3948 15.0188 20.1232 15.6569 19.0576C16.1584 18.2017 16.8256 17.5265 17.6606 17.0308C18.4956 16.5351 19.3979 16.2826 20.3695 16.2664C20.9011 16.2664 21.5983 16.4309 22.4647 16.7541C23.3287 17.0783 23.8834 17.2428 24.1266 17.2428C24.3085 17.2428 24.9247 17.0505 25.9694 16.6671C26.9573 16.3116 27.7911 16.1644 28.4742 16.2224C30.3251 16.3718 31.7157 17.1014 32.6405 18.416C30.9851 19.419 30.1662 20.8238 30.1825 22.626C30.1975 24.0297 30.7067 25.1979 31.7076 26.1254C32.1611 26.5558 32.6676 26.8885 33.2312 27.1248C33.109 27.4793 32.98 27.8188 32.8428 28.1447ZM28.5978 11.4401C28.5978 12.5404 28.1958 13.5677 27.3946 14.5185C26.4277 15.6489 25.2582 16.3021 23.99 16.199C23.9738 16.067 23.9645 15.9281 23.9645 15.7821C23.9645 14.7259 24.4243 13.5955 25.2408 12.6713C25.6485 12.2033 26.167 11.8142 26.7957 11.5038C27.4231 11.1981 28.0166 11.029 28.5747 11C28.591 11.1471 28.5978 11.2942 28.5978 11.4401V11.4401Z" fill="black"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_5503_40274" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5503_40274"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5503_40274" result="shape"/>
                        </filter>
                        </defs>
                    </svg>

                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_5503_40272)">
                        <rect x="2" y="1" width="44" height="44" rx="8" fill="white"/>
                        <rect x="2.5" y="1.5" width="43" height="43" rx="7.5" stroke="#D0D5DD"/>
                        <g clipPath="url(#clip0_5503_40272)">
                        <path d="M35.7663 23.2763C35.7663 22.4605 35.7001 21.6404 35.559 20.8379H24.2402V25.4589H30.722C30.453 26.9492 29.5888 28.2676 28.3233 29.1054V32.1037H32.1903C34.4611 30.0137 35.7663 26.9272 35.7663 23.2763Z" fill="#4285F4"/>
                        <path d="M24.2401 35.0013C27.4766 35.0013 30.2059 33.9387 32.1945 32.1044L28.3276 29.106C27.2517 29.838 25.8627 30.2525 24.2445 30.2525C21.1139 30.2525 18.4595 28.1404 17.507 25.3008H13.5166V28.3917C15.5537 32.4439 19.7029 35.0013 24.2401 35.0013Z" fill="#34A853"/>
                        <path d="M17.5028 25.3007C17.0001 23.8103 17.0001 22.1965 17.5028 20.7062V17.6152H13.5167C11.8147 21.006 11.8147 25.0009 13.5167 28.3916L17.5028 25.3007Z" fill="#FBBC04"/>
                        <path d="M24.2401 15.7497C25.9509 15.7232 27.6044 16.367 28.8434 17.5487L32.2695 14.1226C30.1001 12.0855 27.2208 10.9655 24.2401 11.0008C19.7029 11.0008 15.5537 13.5582 13.5166 17.6148L17.5026 20.7058C18.4506 17.8617 21.1095 15.7497 24.2401 15.7497Z" fill="#EA4335"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_d_5503_40272" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5503_40272"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5503_40272" result="shape"/>
                        </filter>
                        <clipPath id="clip0_5503_40272">
                        <rect width="24" height="24" fill="white" transform="translate(12 11)"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_5503_40273)">
                        <rect x="2" y="1" width="44" height="44" rx="8" fill="white"/>
                        <rect x="2.5" y="1.5" width="43" height="43" rx="7.5" stroke="#D0D5DD"/>
                        <path d="M25.1752 22.4205L33.0995 33.5111H29.8474L23.381 24.4611V24.4606L22.4317 23.1321L14.8779 12.5596H18.13L24.2259 21.092L25.1752 22.4205Z" fill="#232121"/>
                        <path d="M28.8535 35L22.3099 25.6816L14.1174 35H12L21.3698 24.3433L12 11H19.1465L25.3428 19.8239L33.1006 11H35.218L26.2833 21.1625L36 35H28.8535Z" fill="#232121"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_5503_40273" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5503_40273"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5503_40273" result="shape"/>
                        </filter>
                        </defs>
                    </svg>

                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_5503_40275)">
                        <rect x="2" y="1" width="44" height="44" rx="8" fill="#1877F2"/>
                        <g clipPath="url(#clip0_5503_40275)">
                        <path d="M36 23C36 16.3726 30.6274 11 24 11C17.3726 11 12 16.3726 12 23C12 28.9895 16.3882 33.954 22.125 34.8542V26.4688H19.0781V23H22.125V20.3563C22.125 17.3488 23.9166 15.6875 26.6576 15.6875C27.9701 15.6875 29.3438 15.9219 29.3438 15.9219V18.875H27.8306C26.34 18.875 25.875 19.8001 25.875 20.75V23H29.2031L28.6711 26.4688H25.875V34.8542C31.6118 33.954 36 28.9895 36 23Z" fill="white"/>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_d_5503_40275" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5503_40275"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5503_40275" result="shape"/>
                        </filter>
                        <clipPath id="clip0_5503_40275">
                        <rect width="24" height="24" fill="white" transform="translate(12 11)"/>
                        </clipPath>
                        </defs>
                    </svg>

                </div>
            </form>
        </div>

        <div className='bg-[#543883] w-[725px] h-[854px] rounded-[44px]'>
            <Image className='rounded-[44px] w-full h-full' src='/Rectangle 4299.png' alt='Rectangle 4299.png' width={500} height={500}></Image>
        </div>
    </div>
  )
}

export default Login