"use client";
import React, { useState } from 'react'
import { registerService } from '../services/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [name, setName] = useState("");  
    const [phone, setPhone] = useState("");     
    const [gender, setGender] = useState("");
    const [country_code, setCountry_code] = useState("EG");
    const [country_id, setCountry_id] = useState("64");
    const [lang, setLang] = useState("en");
    const [brand_ids, setBrand_ids] = useState('1,2');
    const [platform, setPlatform] = useState("website");
    // const [referral_code, setReferral_code] = useState("magmaa27");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        console.log(email, password, password_confirmation, name, phone, gender, country_code)
        try {
          const data = await registerService(email, password, password_confirmation, name, phone, gender, country_code, lang, brand_ids, country_id, platform);
          // Redirect to the dashboard or home page
          console.log(data)
          router.push("/");
        } catch (err) {
          setError(err.message);
        }
      };
  return (
    <div className='flex h-fit w-full p-[85px] justify-between'>
        <div>
            <div className='my-4'>
                <p className='text-[#1C262D] text-[24px] font-[700]'>تسجيل الدخول</p>
                <p className='text-[#5D686F] text-[14px] font-[500]'>يرجي ادخال واكمال البيانات التالية</p>
            </div>

            <form className="w-[509px] mx-auto" onSubmit={handleSubmit}>
                <div className='mb-16'>
                    <label htmlFor="full-name-icon" className="text-[14px] font-[500] text-[#344054]">الاسم الكامل </label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.88598 7.70726C8.94481 7.70726 9.86156 7.3275 10.6108 6.57823C11.3598 5.82909 11.7397 4.91247 11.7397 3.85351C11.7397 2.79492 11.36 1.87817 10.6107 1.12878C9.86144 0.37976 8.94469 0 7.88598 0C6.82702 0 5.9104 0.37976 5.16125 1.1289C4.41211 1.87805 4.03223 2.79479 4.03223 3.85351C4.03223 4.91247 4.41211 5.82921 5.16125 6.57836C5.91064 7.32738 6.82739 7.70726 7.88598 7.70726ZM5.82434 1.79187C6.39917 1.21704 7.07348 0.93762 7.88598 0.93762C8.69836 0.93762 9.37279 1.21704 9.94774 1.79187C10.5226 2.36682 10.8021 3.04125 10.8021 3.85351C10.8021 4.66601 10.5226 5.34032 9.94774 5.91527C9.37279 6.49022 8.69836 6.76964 7.88598 6.76964C7.07372 6.76964 6.39941 6.4901 5.82434 5.91527C5.24939 5.34044 4.96985 4.66601 4.96985 3.85351C4.96985 3.04125 5.24939 2.36682 5.82434 1.79187Z" fill="#20831E"/>
                            <path d="M14.629 12.3031C14.6074 11.9913 14.5637 11.6512 14.4994 11.2921C14.4344 10.9303 14.3508 10.5883 14.2507 10.2756C14.1472 9.95251 14.0067 9.63342 13.8327 9.32763C13.6524 9.01025 13.4405 8.73388 13.2027 8.50647C12.9541 8.26855 12.6496 8.07727 12.2976 7.93774C11.9468 7.79895 11.558 7.72864 11.1421 7.72864C10.9787 7.72864 10.8208 7.79565 10.5157 7.99426C10.328 8.1167 10.1084 8.2583 9.86327 8.41492C9.65367 8.54846 9.36974 8.67358 9.01903 8.78686C8.67687 8.89758 8.32945 8.95373 7.98644 8.95373C7.64366 8.95373 7.29625 8.89758 6.95385 8.78686C6.60351 8.6737 6.31945 8.54858 6.11022 8.41504C5.86742 8.25989 5.6477 8.11829 5.45715 7.99414C5.15234 7.79553 4.99438 7.72852 4.83105 7.72852C4.41503 7.72852 4.02636 7.79895 3.67565 7.93787C3.32385 8.07715 3.01928 8.26843 2.77038 8.50659C2.53259 8.73413 2.32068 9.01037 2.1405 9.32763C1.9668 9.63342 1.82617 9.95239 1.72266 10.2758C1.62268 10.5884 1.53906 10.9303 1.47412 11.2921C1.40967 11.6507 1.36609 11.991 1.34448 12.3035C1.32324 12.609 1.3125 12.927 1.3125 13.2483C1.3125 14.0835 1.578 14.7596 2.10156 15.2583C2.61865 15.7503 3.30273 15.9999 4.13488 15.9999H11.839C12.6709 15.9999 13.355 15.7503 13.8722 15.2583C14.3958 14.76 14.6614 14.0836 14.6614 13.2482C14.6612 12.9258 14.6504 12.6078 14.629 12.3031ZM13.2257 14.579C12.884 14.9042 12.4304 15.0622 11.8388 15.0622H4.13488C3.54321 15.0622 3.0896 14.9042 2.74804 14.5791C2.41296 14.2601 2.25012 13.8247 2.25012 13.2483C2.25012 12.9485 2.26001 12.6525 2.27978 12.3683C2.29907 12.0895 2.3385 11.7832 2.39697 11.4578C2.45471 11.1363 2.5282 10.8347 2.6156 10.5616C2.69946 10.2998 2.81384 10.0405 2.95569 9.79077C3.09106 9.55273 3.24682 9.34851 3.4187 9.18396C3.57946 9.03003 3.7821 8.90405 4.02087 8.80957C4.24169 8.72217 4.48986 8.67431 4.75927 8.66711C4.79211 8.68457 4.85058 8.71789 4.94531 8.77966C5.13805 8.90527 5.36022 9.04858 5.60583 9.20544C5.88268 9.38195 6.23937 9.54138 6.66552 9.67895C7.10119 9.81982 7.54552 9.89135 7.98656 9.89135C8.4276 9.89135 8.87206 9.81982 9.30748 9.67907C9.73399 9.54126 10.0906 9.38195 10.3678 9.2052C10.6191 9.04455 10.8351 8.90539 11.0278 8.77966C11.1225 8.71802 11.181 8.68457 11.2138 8.66711C11.4834 8.67431 11.7315 8.72217 11.9525 8.80957C12.1911 8.90405 12.3938 9.03015 12.5545 9.18396C12.7264 9.34839 12.8822 9.55261 13.0176 9.79089C13.1595 10.0405 13.274 10.2999 13.3578 10.5615C13.4453 10.835 13.5189 11.1365 13.5765 11.4576C13.6349 11.7837 13.6744 12.0901 13.6937 12.3684V12.3686C13.7136 12.6517 13.7236 12.9476 13.7237 13.2483C13.7236 13.8248 13.5608 14.2601 13.2257 14.579Z" fill="#20831E"/>
                        </svg>
                        </div>
                        <input type="text" id="full-name-icon" value={name} onChange={(e) => setName(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="البريد الالكتروني" required/>
                    </div>
                    <div className='flex items-center my-4 justify-evenly'>
                        <label htmlFor='gender' className="text-[14px] font-[500] text-[#344054]">الجنس</label>
                        <div className="flex items-center justify-around w-full">
                            <div className="flex items-center">
                                <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} className="peer" required/>
                                <label htmlFor="male" className="text-[14px] mx-2 font-[500] text-[#344054]">ذكر</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} className="peer" required/>
                                <label htmlFor="female" className="text-[14px] mx-2 font-[500] text-[#344054]">انثى</label>
                            </div>
                        </div>
                    </div>
                    
                    <label htmlFor='phone' className="text-[14px] font-[500] text-[#344054] mt-4">رقم الهاتف</label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_5503_40185)">
                                <path d="M11.5146 16C8.70972 16 5.71444 14.9693 3.3725 12.6275C1.03447 10.2894 0 7.29613 0 4.48541C0 2.00825 2.00413 0 4.48541 0C4.67709 0 4.84944 0.116687 4.92063 0.294656L6.92897 5.3155C7.02513 5.55587 6.90822 5.82866 6.66787 5.92481L4.46172 6.80725C4.61778 9.34531 6.65509 11.3825 9.19275 11.5383L10.0752 9.33219C10.1712 9.09222 10.4438 8.97487 10.6845 9.07106L15.7053 11.0794C15.8833 11.1506 16 11.3229 16 11.5146C16 13.9918 13.9959 16 11.5146 16ZM4.17344 0.950938C2.37819 1.10628 0.9375 2.61172 0.9375 4.48541C0.9375 7.31066 2.03769 9.96681 4.03544 11.9645C6.03316 13.9623 8.68931 15.0625 11.5146 15.0625C13.3877 15.0625 14.8936 13.6226 15.0491 11.8266L10.7716 10.1156L9.94147 12.1908C9.87031 12.3687 9.69794 12.4854 9.50625 12.4854C6.20222 12.4854 3.51459 9.79778 3.51459 6.49425C3.51459 6.30259 3.63128 6.12969 3.80925 6.05853L5.88444 5.22844L4.17344 0.950938Z" fill="#5D686F"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_5503_40185">
                                <rect width="16" height="16" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <input type='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=' اكتب رقم الهاتف هنا ...' required/>
                    </div>

                    <label htmlFor="email-address-icon" className="text-[14px] font-[500] text-[#344054]">البريد الالكتروني </label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3337 4.99967C18.3337 4.08301 17.5837 3.33301 16.667 3.33301H3.33366C2.41699 3.33301 1.66699 4.08301 1.66699 4.99967M18.3337 4.99967V14.9997C18.3337 15.9163 17.5837 16.6663 16.667 16.6663H3.33366C2.41699 16.6663 1.66699 15.9163 1.66699 14.9997V4.99967M18.3337 4.99967L10.0003 10.833L1.66699 4.99967" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-address-icon" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="اكتب البريد الالكتروني هنا..." required/>
                    </div>

                    <label htmlFor="password" className="text-[14px] font-[500] text-[#344054] mt-4">كلمة المرور</label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6864 5.64844H12.2305V4.23047C12.2305 1.89778 10.3327 0 8 0C5.66731 0 3.76953 1.89778 3.76953 4.23047V5.64844H3.31363C2.52469 5.64844 1.88281 6.29031 1.88281 7.07928V14.5692C1.88281 15.3581 2.52469 16 3.31363 16H12.6864C13.4753 16 14.1172 15.3581 14.1172 14.5692V7.07928C14.1172 6.29031 13.4753 5.64844 12.6864 5.64844ZM4.70703 4.23047C4.70703 2.41472 6.18425 0.9375 8 0.9375C9.81575 0.9375 11.293 2.41472 11.293 4.23047V5.64844H10.3555V4.01044C10.3555 2.83294 9.39753 1.875 8.22003 1.875H7.77997C6.60247 1.875 5.64453 2.83294 5.64453 4.01044V5.64844H4.70703V4.23047ZM6.58203 5.64844V4.01044C6.58203 3.34991 7.11941 2.8125 7.77997 2.8125H8.22003C8.88059 2.8125 9.41797 3.34991 9.41797 4.01044V5.64844H6.58203ZM13.1797 14.5692C13.1797 14.8412 12.9584 15.0625 12.6864 15.0625H3.31363C3.04163 15.0625 2.82031 14.8412 2.82031 14.5692V7.07928C2.82031 6.80725 3.04163 6.58594 3.31363 6.58594H12.6864C12.9584 6.58594 13.1797 6.80725 13.1797 7.07928V14.5692Z" fill="#667085"/>
                            <path d="M8 8.55371C7.22244 8.55371 6.58984 9.1863 6.58984 9.96387C6.58984 10.5771 6.98347 11.0999 7.53125 11.2936V12.7881C7.53125 13.047 7.74112 13.2568 8 13.2568C8.25888 13.2568 8.46875 13.047 8.46875 12.7881V11.2936C9.01653 11.0999 9.41016 10.5771 9.41016 9.96387C9.41016 9.1863 8.77756 8.55371 8 8.55371ZM8 10.4365C7.73937 10.4365 7.52734 10.2245 7.52734 9.96387C7.52734 9.70324 7.73937 9.49121 8 9.49121C8.26063 9.49121 8.47266 9.70324 8.47266 9.96387C8.47266 10.2245 8.26063 10.4365 8 10.4365Z" fill="#667085"/>
                            </svg>
                        </div>
                        <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder='ادخل كلمة المرور' required></input>
                    </div>
                    <label htmlFor='password_confirm' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تأكيد كلمة المرور</label>
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6864 5.64844H12.2305V4.23047C12.2305 1.89778 10.3327 0 8 0C5.66731 0 3.76953 1.89778 3.76953 4.23047V5.64844H3.31363C2.52469 5.64844 1.88281 6.29031 1.88281 7.07928V14.5692C1.88281 15.3581 2.52469 16 3.31363 16H12.6864C13.4753 16 14.1172 15.3581 14.1172 14.5692V7.07928C14.1172 6.29031 13.4753 5.64844 12.6864 5.64844ZM4.70703 4.23047C4.70703 2.41472 6.18425 0.9375 8 0.9375C9.81575 0.9375 11.293 2.41472 11.293 4.23047V5.64844H10.3555V4.01044C10.3555 2.83294 9.39753 1.875 8.22003 1.875H7.77997C6.60247 1.875 5.64453 2.83294 5.64453 4.01044V5.64844H4.70703V4.23047ZM6.58203 5.64844V4.01044C6.58203 3.34991 7.11941 2.8125 7.77997 2.8125H8.22003C8.88059 2.8125 9.41797 3.34991 9.41797 4.01044V5.64844H6.58203ZM13.1797 14.5692C13.1797 14.8412 12.9584 15.0625 12.6864 15.0625H3.31363C3.04163 15.0625 2.82031 14.8412 2.82031 14.5692V7.07928C2.82031 6.80725 3.04163 6.58594 3.31363 6.58594H12.6864C12.9584 6.58594 13.1797 6.80725 13.1797 7.07928V14.5692Z" fill="#667085"/>
                            <path d="M8 8.55371C7.22244 8.55371 6.58984 9.1863 6.58984 9.96387C6.58984 10.5771 6.98347 11.0999 7.53125 11.2936V12.7881C7.53125 13.047 7.74112 13.2568 8 13.2568C8.25888 13.2568 8.46875 13.047 8.46875 12.7881V11.2936C9.01653 11.0999 9.41016 10.5771 9.41016 9.96387C9.41016 9.1863 8.77756 8.55371 8 8.55371ZM8 10.4365C7.73937 10.4365 7.52734 10.2245 7.52734 9.96387C7.52734 9.70324 7.73937 9.49121 8 9.49121C8.26063 9.49121 8.47266 9.70324 8.47266 9.96387C8.47266 10.2245 8.26063 10.4365 8 10.4365Z" fill="#667085"/>
                            </svg>
                        </div>
                        <input id='password_confirm' value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder='ادخل كلمة المرور' required></input>
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
            <Image loading="lazy" className='rounded-[44px] w-full h-full' src='/Rectangle 4299.png' alt='Rectangle 4299.png' width={500} height={500}></Image>
        </div>
    </div>
  )
}

export default Register