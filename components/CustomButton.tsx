"use client"
import { CustomButtonProp } from '@/types/types'
import React from 'react'

const CustomButton = ({title,containerStyles,handleClick,fontsize,btnType}:CustomButtonProp) => {
  return (
   <button
   disabled={false}
   type={btnType}
   className={`drop-shadow-sm ${containerStyles} `}
   onClick={()=>{}}
   
   >
<span className={`flex-1 ${fontsize}`}>
  {title}
</span>
   </button>
  )
}

export default CustomButton

