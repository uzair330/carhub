"use client"
import { CustomButtonProp } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({title,containerStyles,handleClick,fontsize,btnType,textStyle,rightIcon}:CustomButtonProp) => {
  return (
   <button
   disabled={false}
   type={btnType}
   className={`drop-shadow-sm ${containerStyles} `}
   onClick={handleClick}
   
   >
    <div className="flex ">

<span className={`flex-1 ${textStyle}`}>
  {title}
  
</span>
<div className="">

{rightIcon && (
  <div className="relative w-6 h-6 mx-4">
   <Image src={rightIcon} alt='' fill className='object-contain ' />
  </div>
)}
</div>
    </div>

   </button>
  )
}

export default CustomButton

