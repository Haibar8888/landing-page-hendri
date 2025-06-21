'use client'

import React from 'react'
import Image from "next/image";

interface cardProp {
    className : string,
    srcCard : string,
    srcProfile : string,
    userProfile : string,
    category : string,
    alt : string,
}

function card({className, srcCard, srcProfile, alt,userProfile,category} : cardProp) {
  return (
    <div className=''>
        <Image src={srcCard} alt='' width={419} height={459}/>
        <div className="flex flex-row gap-1.5  items-center mt-7">
            <Image src={srcProfile} alt='' width={36} height={36} className=''/>
            <p className='font-medium text-[16px]'>{userProfile}</p>
        </div>  
        <p className='text-[28px] font-semibold mt-[12px]'>Covers marketing, sales, <br />and customer service.</p>
        <div className="mt-[20px] flex flex-row gap-5 items-center">
            <p className='text-[16px] font-light'>Dec 02, 2025</p>
            <p className='bg-[#E8F7F2] px-[8px] py-[4px] text-black text-[16px] font-semibold'>{category}</p>
        </div>
    </div>
  )
}

export default card