"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    const { status, error, token } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(Login({ email, password }));
    };
  
    useEffect(() => {
      if (token) {
        router.push('/');
      }
    }, [token, router]);
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
                <p className='text-center text-[#1C262D] text-[16px] font-[400] my-3'>لديك حساب بالفعل ؟ <span className='font-[700] text-[#A33670]'><Link href='/register'>انشاء حساب</Link></span></p>
                <p className='text-center text-[#5D686F] text-[16px] font-[400]'>او سجل حساب عن طريق</p>
                <div className='flex justify-center gap-3 mt-3'>
                    <div className='w-[44px] h-[44px] bg-white cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8428 17.1447C20.5101 17.9133 20.1163 18.6208 19.66 19.2713C19.0381 20.158 18.5288 20.7719 18.1364 21.1127C17.528 21.6722 16.8762 21.9587 16.1782 21.975C15.6771 21.975 15.0728 21.8324 14.3693 21.5432C13.6636 21.2553 13.015 21.1127 12.422 21.1127C11.8 21.1127 11.133 21.2553 10.4195 21.5432C9.70493 21.8324 9.12928 21.9832 8.68916 21.9981C8.01981 22.0266 7.35264 21.7319 6.68668 21.1127C6.26164 20.742 5.72999 20.1064 5.09309 19.2061C4.40976 18.2446 3.84796 17.1297 3.40784 15.8587C2.93648 14.4857 2.7002 13.1563 2.7002 11.8692C2.7002 10.3948 3.01878 9.12321 3.65689 8.0576C4.1584 7.20166 4.82557 6.52647 5.66059 6.03081C6.49562 5.53514 7.39786 5.28256 8.36949 5.2664C8.90114 5.2664 9.59833 5.43085 10.4647 5.75405C11.3287 6.07834 11.8834 6.24279 12.1266 6.24279C12.3085 6.24279 12.9247 6.0505 13.9694 5.66714C14.9573 5.31162 15.7911 5.16441 16.4742 5.2224C18.3251 5.37178 19.7157 6.10142 20.6405 7.41595C18.9851 8.41896 18.1662 9.82379 18.1825 11.626C18.1975 13.0297 18.7067 14.1979 19.7076 15.1254C20.1611 15.5558 20.6676 15.8885 21.2312 16.1248C21.109 16.4793 20.98 16.8188 20.8428 17.1447ZM16.5978 0.440125C16.5978 1.54038 16.1958 2.56768 15.3946 3.51854C14.4277 4.64892 13.2582 5.30211 11.99 5.19904C11.9738 5.06705 11.9645 4.92812 11.9645 4.78214C11.9645 3.7259 12.4243 2.59552 13.2408 1.67127C13.6485 1.20331 14.167 0.814209 14.7957 0.503814C15.4231 0.19805 16.0166 0.0289566 16.5747 0C16.591 0.147086 16.5978 0.294182 16.5978 0.440111V0.440125Z" fill="black"/>
                        </svg>

                    </div>

                    <div className='w-[44px] h-[44px] bg-white cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5812_99)">
                        <path d="M23.7663 12.2763C23.7663 11.4605 23.7001 10.6404 23.559 9.83789H12.2402V14.4589H18.722C18.453 15.9492 17.5888 17.2676 16.3233 18.1054V21.1037H20.1903C22.4611 19.0137 23.7663 15.9272 23.7663 12.2763Z" fill="#4285F4"/>
                        <path d="M12.2401 24.0013C15.4766 24.0013 18.2059 22.9387 20.1945 21.1044L16.3276 18.106C15.2517 18.838 13.8627 19.2525 12.2445 19.2525C9.11388 19.2525 6.45946 17.1404 5.50705 14.3008H1.5166V17.3917C3.55371 21.4439 7.7029 24.0013 12.2401 24.0013Z" fill="#34A853"/>
                        <path d="M5.50277 14.3007C5.00011 12.8103 5.00011 11.1965 5.50277 9.70618V6.61523H1.51674C-0.185266 10.006 -0.185266 14.0009 1.51674 17.3916L5.50277 14.3007Z" fill="#FBBC04"/>
                        <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5812_99">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>

                    <div className='w-[44px] h-[44px] bg-white cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1752 11.4205L21.0995 22.5111H17.8474L11.381 13.4611V13.4606L10.4317 12.1321L2.87793 1.55957H6.13005L12.2259 10.092L13.1752 11.4205Z" fill="#232121"/>
                        <path d="M16.8535 24L10.3099 14.6816L2.11738 24H0L9.36978 13.3433L0 0H7.14651L13.3428 8.8239L21.1006 0H23.218L14.2833 10.1625L24 24H16.8535Z" fill="#232121"/>
                        </svg>
                    </div>


                    <div className='w-[44px] h-[44px] bg-[#1877F2] cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5812_11)">
                        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5812_11">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>

                </div>
            </form>
        </div>

        <div className='bg-[#543883] w-[725px] h-[854px] rounded-[44px]'>
            <Image loading="lazy" className='rounded-[44px] w-full h-full' src='/Rectangle 4299.png' alt='Rectangle 4299.png' width={500} height={500}></Image>
        </div>
    </div>
  )
}

export default Login