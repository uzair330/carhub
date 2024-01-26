"use client"
import React from 'react'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
   <div className="hero">
    <div className="flex-1 pt-36 padding-x">
        <h1 className='hero__title'>
    Find, book, or rent a car &mdash;quickly and easily!
        </h1>
        <p className='hero__subtitle'>
            Streamline your car rental experience with our easy-to-use, user-friendly booking process.
        </p>
        <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10 py-2 px-4"
        handleClick={handleScroll}
        fontsize="fontsize"
        btnType='button'
        />
    </div>
<div className="hero__image-container">
    <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className='object-contain'  />
    </div>
        <div className="hero__image-overlay "/>
</div>

   </div>
  )
}

export default Hero
