'use client'

import React from 'react'
import Image from 'next/image'

interface ButtonProps {
  text: string,
  className : string,
  onClick: () => void
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between bg-black text-white rounded-full w-[150px] sm:w-[160px] lg:w-[183px] h-[50px] sm:h-[56px] lg:h-[64px] pl-4 sm:pl-5 lg:pl-6 pr-2 focus:outline-none`}
    >
      <span className={`text-sm sm:text-base font-medium`}>
        {text}
      </span>
      <div className="relative w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[48px] lg:h-[48px] bg-white rounded-full flex items-center justify-center">
        <Image
          src="/icons/icon-arrow-right.png"
          alt="Arrow Icon"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
    </button>
  )
}
