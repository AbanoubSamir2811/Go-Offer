"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFoundPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering mismatched content on the server
  }

  return (
    <div className="flex flex-col items-center justify-center pt-20 mt-1">
      <Image loading="lazy" className="w-[495px] h-auto" src='/notFound.png' alt='notFound' width={500} height={500}></Image>
      <p className="text-[48px] text-[#262254] my-6">
        عذرا هذه الصفحة غير موجودة
      </p>
      <Link
        href="/"
        className="w-[208px] h-[40px] pt-3 text-center text-[14px] font-[600]  bg-[#543883] text-white rounded-[6px] hover:bg-blue-600 transition"
      >
        العوده للصحفة الرئيسية
      </Link>
    </div>
  );
}
