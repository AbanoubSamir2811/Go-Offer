// "use client";
// import React, { useState } from 'react'
// import { registerService } from '../services/auth';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';

// function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [password_confirmation, setPassword_confirmation] = useState("");
//     const [name, setName] = useState("");  
//     const [phone, setPhone] = useState("");     
//     const [gender, setGender] = useState("");
//     const [country_code, setCountry_code] = useState("EG");
//     const [country_id, setCountry_id] = useState("64");
//     const [lang, setLang] = useState("en");
//     const [brand_ids, setBrand_ids] = useState('1,2');
//     const [platform, setPlatform] = useState("website");
//     // const [referral_code, setReferral_code] = useState("magmaa27");
//     const [error, setError] = useState(null);
//     const router = useRouter();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError(null);
//         console.log(email, password, password_confirmation, name, phone, gender, country_code)
//         try {
//           const data = registerService(email, password, password_confirmation, name, phone, gender, country_code, lang, brand_ids, country_id, platform);
//           // Redirect to the dashboard or home page
//           console.log(data)
//           router.push("/");
//         } catch (err) {
//           setError(err.message);
//         }
//       };
//   return (
//     <div className='flex h-fit w-full p-[85px] justify-between'>
//         <div>
//             <div className='my-4'>
//                 <p className='text-[#1C262D] text-[24px] font-[700]'>تسجيل الدخول</p>
//                 <p className='text-[#5D686F] text-[14px] font-[500]'>يرجي ادخال واكمال البيانات التالية</p>
//             </div>

//             <form className="w-[509px] mx-auto" onSubmit={handleSubmit}>
//                 <div className='mb-16'>
//                     <label htmlFor="full-name-icon" className="text-[14px] font-[500] text-[#344054]">الاسم الكامل </label>
//                     <div className="relative mb-4">
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M7.88598 7.70726C8.94481 7.70726 9.86156 7.3275 10.6108 6.57823C11.3598 5.82909 11.7397 4.91247 11.7397 3.85351C11.7397 2.79492 11.36 1.87817 10.6107 1.12878C9.86144 0.37976 8.94469 0 7.88598 0C6.82702 0 5.9104 0.37976 5.16125 1.1289C4.41211 1.87805 4.03223 2.79479 4.03223 3.85351C4.03223 4.91247 4.41211 5.82921 5.16125 6.57836C5.91064 7.32738 6.82739 7.70726 7.88598 7.70726ZM5.82434 1.79187C6.39917 1.21704 7.07348 0.93762 7.88598 0.93762C8.69836 0.93762 9.37279 1.21704 9.94774 1.79187C10.5226 2.36682 10.8021 3.04125 10.8021 3.85351C10.8021 4.66601 10.5226 5.34032 9.94774 5.91527C9.37279 6.49022 8.69836 6.76964 7.88598 6.76964C7.07372 6.76964 6.39941 6.4901 5.82434 5.91527C5.24939 5.34044 4.96985 4.66601 4.96985 3.85351C4.96985 3.04125 5.24939 2.36682 5.82434 1.79187Z" fill="#20831E"/>
//                             <path d="M14.629 12.3031C14.6074 11.9913 14.5637 11.6512 14.4994 11.2921C14.4344 10.9303 14.3508 10.5883 14.2507 10.2756C14.1472 9.95251 14.0067 9.63342 13.8327 9.32763C13.6524 9.01025 13.4405 8.73388 13.2027 8.50647C12.9541 8.26855 12.6496 8.07727 12.2976 7.93774C11.9468 7.79895 11.558 7.72864 11.1421 7.72864C10.9787 7.72864 10.8208 7.79565 10.5157 7.99426C10.328 8.1167 10.1084 8.2583 9.86327 8.41492C9.65367 8.54846 9.36974 8.67358 9.01903 8.78686C8.67687 8.89758 8.32945 8.95373 7.98644 8.95373C7.64366 8.95373 7.29625 8.89758 6.95385 8.78686C6.60351 8.6737 6.31945 8.54858 6.11022 8.41504C5.86742 8.25989 5.6477 8.11829 5.45715 7.99414C5.15234 7.79553 4.99438 7.72852 4.83105 7.72852C4.41503 7.72852 4.02636 7.79895 3.67565 7.93787C3.32385 8.07715 3.01928 8.26843 2.77038 8.50659C2.53259 8.73413 2.32068 9.01037 2.1405 9.32763C1.9668 9.63342 1.82617 9.95239 1.72266 10.2758C1.62268 10.5884 1.53906 10.9303 1.47412 11.2921C1.40967 11.6507 1.36609 11.991 1.34448 12.3035C1.32324 12.609 1.3125 12.927 1.3125 13.2483C1.3125 14.0835 1.578 14.7596 2.10156 15.2583C2.61865 15.7503 3.30273 15.9999 4.13488 15.9999H11.839C12.6709 15.9999 13.355 15.7503 13.8722 15.2583C14.3958 14.76 14.6614 14.0836 14.6614 13.2482C14.6612 12.9258 14.6504 12.6078 14.629 12.3031ZM13.2257 14.579C12.884 14.9042 12.4304 15.0622 11.8388 15.0622H4.13488C3.54321 15.0622 3.0896 14.9042 2.74804 14.5791C2.41296 14.2601 2.25012 13.8247 2.25012 13.2483C2.25012 12.9485 2.26001 12.6525 2.27978 12.3683C2.29907 12.0895 2.3385 11.7832 2.39697 11.4578C2.45471 11.1363 2.5282 10.8347 2.6156 10.5616C2.69946 10.2998 2.81384 10.0405 2.95569 9.79077C3.09106 9.55273 3.24682 9.34851 3.4187 9.18396C3.57946 9.03003 3.7821 8.90405 4.02087 8.80957C4.24169 8.72217 4.48986 8.67431 4.75927 8.66711C4.79211 8.68457 4.85058 8.71789 4.94531 8.77966C5.13805 8.90527 5.36022 9.04858 5.60583 9.20544C5.88268 9.38195 6.23937 9.54138 6.66552 9.67895C7.10119 9.81982 7.54552 9.89135 7.98656 9.89135C8.4276 9.89135 8.87206 9.81982 9.30748 9.67907C9.73399 9.54126 10.0906 9.38195 10.3678 9.2052C10.6191 9.04455 10.8351 8.90539 11.0278 8.77966C11.1225 8.71802 11.181 8.68457 11.2138 8.66711C11.4834 8.67431 11.7315 8.72217 11.9525 8.80957C12.1911 8.90405 12.3938 9.03015 12.5545 9.18396C12.7264 9.34839 12.8822 9.55261 13.0176 9.79089C13.1595 10.0405 13.274 10.2999 13.3578 10.5615C13.4453 10.835 13.5189 11.1365 13.5765 11.4576C13.6349 11.7837 13.6744 12.0901 13.6937 12.3684V12.3686C13.7136 12.6517 13.7236 12.9476 13.7237 13.2483C13.7236 13.8248 13.5608 14.2601 13.2257 14.579Z" fill="#20831E"/>
//                         </svg>
//                         </div>
//                         <input type="text" id="full-name-icon" value={name} onChange={(e) => setName(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="البريد الالكتروني" required/>
//                     </div>
//                     <div className='flex items-center my-4 justify-evenly'>
//                         <label htmlFor='gender' className="text-[14px] font-[500] text-[#344054]">الجنس</label>
//                         <div className="flex items-center justify-around w-full">
//                             <div className="flex items-center">
//                                 <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} className="peer" required/>
//                                 <label htmlFor="male" className="text-[14px] mx-2 font-[500] text-[#344054]">ذكر</label>
//                             </div>
//                             <div className="flex items-center">
//                                 <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} className="peer" required/>
//                                 <label htmlFor="female" className="text-[14px] mx-2 font-[500] text-[#344054]">انثى</label>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <label htmlFor='phone' className="text-[14px] font-[500] text-[#344054] mt-4">رقم الهاتف</label>
//                     <div className="relative mb-4">
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <g clipPath="url(#clip0_5503_40185)">
//                                 <path d="M11.5146 16C8.70972 16 5.71444 14.9693 3.3725 12.6275C1.03447 10.2894 0 7.29613 0 4.48541C0 2.00825 2.00413 0 4.48541 0C4.67709 0 4.84944 0.116687 4.92063 0.294656L6.92897 5.3155C7.02513 5.55587 6.90822 5.82866 6.66787 5.92481L4.46172 6.80725C4.61778 9.34531 6.65509 11.3825 9.19275 11.5383L10.0752 9.33219C10.1712 9.09222 10.4438 8.97487 10.6845 9.07106L15.7053 11.0794C15.8833 11.1506 16 11.3229 16 11.5146C16 13.9918 13.9959 16 11.5146 16ZM4.17344 0.950938C2.37819 1.10628 0.9375 2.61172 0.9375 4.48541C0.9375 7.31066 2.03769 9.96681 4.03544 11.9645C6.03316 13.9623 8.68931 15.0625 11.5146 15.0625C13.3877 15.0625 14.8936 13.6226 15.0491 11.8266L10.7716 10.1156L9.94147 12.1908C9.87031 12.3687 9.69794 12.4854 9.50625 12.4854C6.20222 12.4854 3.51459 9.79778 3.51459 6.49425C3.51459 6.30259 3.63128 6.12969 3.80925 6.05853L5.88444 5.22844L4.17344 0.950938Z" fill="#5D686F"/>
//                                 </g>
//                                 <defs>
//                                 <clipPath id="clip0_5503_40185">
//                                 <rect width="16" height="16" fill="white"/>
//                                 </clipPath>
//                                 </defs>
//                             </svg>
//                         </div>
//                         <input type='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=' اكتب رقم الهاتف هنا ...' required/>
//                     </div>

//                     <label htmlFor="email-address-icon" className="text-[14px] font-[500] text-[#344054]">البريد الالكتروني </label>
//                     <div className="relative mb-4">
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M18.3337 4.99967C18.3337 4.08301 17.5837 3.33301 16.667 3.33301H3.33366C2.41699 3.33301 1.66699 4.08301 1.66699 4.99967M18.3337 4.99967V14.9997C18.3337 15.9163 17.5837 16.6663 16.667 16.6663H3.33366C2.41699 16.6663 1.66699 15.9163 1.66699 14.9997V4.99967M18.3337 4.99967L10.0003 10.833L1.66699 4.99967" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </div>
//                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-address-icon" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="اكتب البريد الالكتروني هنا..." required/>
//                     </div>

//                     <label htmlFor="password" className="text-[14px] font-[500] text-[#344054] mt-4">كلمة المرور</label>
//                     <div className="relative mb-4">
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                             <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M12.6864 5.64844H12.2305V4.23047C12.2305 1.89778 10.3327 0 8 0C5.66731 0 3.76953 1.89778 3.76953 4.23047V5.64844H3.31363C2.52469 5.64844 1.88281 6.29031 1.88281 7.07928V14.5692C1.88281 15.3581 2.52469 16 3.31363 16H12.6864C13.4753 16 14.1172 15.3581 14.1172 14.5692V7.07928C14.1172 6.29031 13.4753 5.64844 12.6864 5.64844ZM4.70703 4.23047C4.70703 2.41472 6.18425 0.9375 8 0.9375C9.81575 0.9375 11.293 2.41472 11.293 4.23047V5.64844H10.3555V4.01044C10.3555 2.83294 9.39753 1.875 8.22003 1.875H7.77997C6.60247 1.875 5.64453 2.83294 5.64453 4.01044V5.64844H4.70703V4.23047ZM6.58203 5.64844V4.01044C6.58203 3.34991 7.11941 2.8125 7.77997 2.8125H8.22003C8.88059 2.8125 9.41797 3.34991 9.41797 4.01044V5.64844H6.58203ZM13.1797 14.5692C13.1797 14.8412 12.9584 15.0625 12.6864 15.0625H3.31363C3.04163 15.0625 2.82031 14.8412 2.82031 14.5692V7.07928C2.82031 6.80725 3.04163 6.58594 3.31363 6.58594H12.6864C12.9584 6.58594 13.1797 6.80725 13.1797 7.07928V14.5692Z" fill="#667085"/>
//                             <path d="M8 8.55371C7.22244 8.55371 6.58984 9.1863 6.58984 9.96387C6.58984 10.5771 6.98347 11.0999 7.53125 11.2936V12.7881C7.53125 13.047 7.74112 13.2568 8 13.2568C8.25888 13.2568 8.46875 13.047 8.46875 12.7881V11.2936C9.01653 11.0999 9.41016 10.5771 9.41016 9.96387C9.41016 9.1863 8.77756 8.55371 8 8.55371ZM8 10.4365C7.73937 10.4365 7.52734 10.2245 7.52734 9.96387C7.52734 9.70324 7.73937 9.49121 8 9.49121C8.26063 9.49121 8.47266 9.70324 8.47266 9.96387C8.47266 10.2245 8.26063 10.4365 8 10.4365Z" fill="#667085"/>
//                             </svg>
//                         </div>
//                         <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder='ادخل كلمة المرور' required></input>
//                     </div>
//                     <label htmlFor='password_confirm' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تأكيد كلمة المرور</label>
//                     <div className="relative mb-4">
//                         <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                             <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M12.6864 5.64844H12.2305V4.23047C12.2305 1.89778 10.3327 0 8 0C5.66731 0 3.76953 1.89778 3.76953 4.23047V5.64844H3.31363C2.52469 5.64844 1.88281 6.29031 1.88281 7.07928V14.5692C1.88281 15.3581 2.52469 16 3.31363 16H12.6864C13.4753 16 14.1172 15.3581 14.1172 14.5692V7.07928C14.1172 6.29031 13.4753 5.64844 12.6864 5.64844ZM4.70703 4.23047C4.70703 2.41472 6.18425 0.9375 8 0.9375C9.81575 0.9375 11.293 2.41472 11.293 4.23047V5.64844H10.3555V4.01044C10.3555 2.83294 9.39753 1.875 8.22003 1.875H7.77997C6.60247 1.875 5.64453 2.83294 5.64453 4.01044V5.64844H4.70703V4.23047ZM6.58203 5.64844V4.01044C6.58203 3.34991 7.11941 2.8125 7.77997 2.8125H8.22003C8.88059 2.8125 9.41797 3.34991 9.41797 4.01044V5.64844H6.58203ZM13.1797 14.5692C13.1797 14.8412 12.9584 15.0625 12.6864 15.0625H3.31363C3.04163 15.0625 2.82031 14.8412 2.82031 14.5692V7.07928C2.82031 6.80725 3.04163 6.58594 3.31363 6.58594H12.6864C12.9584 6.58594 13.1797 6.80725 13.1797 7.07928V14.5692Z" fill="#667085"/>
//                             <path d="M8 8.55371C7.22244 8.55371 6.58984 9.1863 6.58984 9.96387C6.58984 10.5771 6.98347 11.0999 7.53125 11.2936V12.7881C7.53125 13.047 7.74112 13.2568 8 13.2568C8.25888 13.2568 8.46875 13.047 8.46875 12.7881V11.2936C9.01653 11.0999 9.41016 10.5771 9.41016 9.96387C9.41016 9.1863 8.77756 8.55371 8 8.55371ZM8 10.4365C7.73937 10.4365 7.52734 10.2245 7.52734 9.96387C7.52734 9.70324 7.73937 9.49121 8 9.49121C8.26063 9.49121 8.47266 9.70324 8.47266 9.96387C8.47266 10.2245 8.26063 10.4365 8 10.4365Z" fill="#667085"/>
//                             </svg>
//                         </div>
//                         <input id='password_confirm' value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block w-full h-[56px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder='ادخل كلمة المرور' required></input>
//                     </div>
//                     {error && <p style={{ color: "red" }}>{error}</p>}
//                 </div>
                
//                 <button type="submit" className='bg-[#543883] text-white rounded-[8px] w-full text-[20px] font-[500] h-[56px]'>تسجيل الدخول</button>
//                 <p className='text-center text-[#1C262D] text-[16px] font-[400] my-3'>لديك حساب بالفعل ؟ <span className='font-[700] text-[#A33670]'><Link href='/'>انشاء حساب</Link></span></p>
//                 <p className='text-center text-[#5D686F] text-[16px] font-[400]'>او سجل حساب عن طريق</p>
//                 <div className='flex justify-center gap-3 mt-3'>
//                     <div className='w-[44px] h-[44px] bg-white cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M20.8428 17.1447C20.5101 17.9133 20.1163 18.6208 19.66 19.2713C19.0381 20.158 18.5288 20.7719 18.1364 21.1127C17.528 21.6722 16.8762 21.9587 16.1782 21.975C15.6771 21.975 15.0728 21.8324 14.3693 21.5432C13.6636 21.2553 13.015 21.1127 12.422 21.1127C11.8 21.1127 11.133 21.2553 10.4195 21.5432C9.70493 21.8324 9.12928 21.9832 8.68916 21.9981C8.01981 22.0266 7.35264 21.7319 6.68668 21.1127C6.26164 20.742 5.72999 20.1064 5.09309 19.2061C4.40976 18.2446 3.84796 17.1297 3.40784 15.8587C2.93648 14.4857 2.7002 13.1563 2.7002 11.8692C2.7002 10.3948 3.01878 9.12321 3.65689 8.0576C4.1584 7.20166 4.82557 6.52647 5.66059 6.03081C6.49562 5.53514 7.39786 5.28256 8.36949 5.2664C8.90114 5.2664 9.59833 5.43085 10.4647 5.75405C11.3287 6.07834 11.8834 6.24279 12.1266 6.24279C12.3085 6.24279 12.9247 6.0505 13.9694 5.66714C14.9573 5.31162 15.7911 5.16441 16.4742 5.2224C18.3251 5.37178 19.7157 6.10142 20.6405 7.41595C18.9851 8.41896 18.1662 9.82379 18.1825 11.626C18.1975 13.0297 18.7067 14.1979 19.7076 15.1254C20.1611 15.5558 20.6676 15.8885 21.2312 16.1248C21.109 16.4793 20.98 16.8188 20.8428 17.1447ZM16.5978 0.440125C16.5978 1.54038 16.1958 2.56768 15.3946 3.51854C14.4277 4.64892 13.2582 5.30211 11.99 5.19904C11.9738 5.06705 11.9645 4.92812 11.9645 4.78214C11.9645 3.7259 12.4243 2.59552 13.2408 1.67127C13.6485 1.20331 14.167 0.814209 14.7957 0.503814C15.4231 0.19805 16.0166 0.0289566 16.5747 0C16.591 0.147086 16.5978 0.294182 16.5978 0.440111V0.440125Z" fill="black"/>
//                         </svg>

//                     </div>

//                     <div className='w-[44px] h-[44px] bg-white cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <g clipPath="url(#clip0_5812_99)">
//                         <path d="M23.7663 12.2763C23.7663 11.4605 23.7001 10.6404 23.559 9.83789H12.2402V14.4589H18.722C18.453 15.9492 17.5888 17.2676 16.3233 18.1054V21.1037H20.1903C22.4611 19.0137 23.7663 15.9272 23.7663 12.2763Z" fill="#4285F4"/>
//                         <path d="M12.2401 24.0013C15.4766 24.0013 18.2059 22.9387 20.1945 21.1044L16.3276 18.106C15.2517 18.838 13.8627 19.2525 12.2445 19.2525C9.11388 19.2525 6.45946 17.1404 5.50705 14.3008H1.5166V17.3917C3.55371 21.4439 7.7029 24.0013 12.2401 24.0013Z" fill="#34A853"/>
//                         <path d="M5.50277 14.3007C5.00011 12.8103 5.00011 11.1965 5.50277 9.70618V6.61523H1.51674C-0.185266 10.006 -0.185266 14.0009 1.51674 17.3916L5.50277 14.3007Z" fill="#FBBC04"/>
//                         <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/>
//                         </g>
//                         <defs>
//                         <clipPath id="clip0_5812_99">
//                         <rect width="24" height="24" fill="white"/>
//                         </clipPath>
//                         </defs>
//                         </svg>
//                     </div>

//                     <div className='w-[44px] h-[44px] bg-white cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M13.1752 11.4205L21.0995 22.5111H17.8474L11.381 13.4611V13.4606L10.4317 12.1321L2.87793 1.55957H6.13005L12.2259 10.092L13.1752 11.4205Z" fill="#232121"/>
//                         <path d="M16.8535 24L10.3099 14.6816L2.11738 24H0L9.36978 13.3433L0 0H7.14651L13.3428 8.8239L21.1006 0H23.218L14.2833 10.1625L24 24H16.8535Z" fill="#232121"/>
//                         </svg>
//                     </div>


//                     <div className='w-[44px] h-[44px] bg-[#1877F2] cursor-pointer rounded-lg shadow-md shadow-[#6c7075] flex justify-center items-center'>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <g clipPath="url(#clip0_5812_11)">
//                         <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="white"/>
//                         </g>
//                         <defs>
//                         <clipPath id="clip0_5812_11">
//                         <rect width="24" height="24" fill="white"/>
//                         </clipPath>
//                         </defs>
//                         </svg>
//                     </div>

//                 </div>
//             </form>
//         </div>

//         <div className='bg-[#543883] w-[725px] h-[854px] rounded-[44px]'>
//             <Image loading="lazy" className='rounded-[44px] w-full h-full' src='/Rectangle 4299.png' alt='Rectangle 4299.png' width={500} height={500}></Image>
//         </div>
//     </div>
//   )
// }

// export default Register