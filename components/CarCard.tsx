"use client"
import { CarProps } from '@/types/types'
import React, { useState } from 'react'
import { calculateRent } from './util'
import Image from 'next/image'
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'
interface CarCardProps {
  car: CarProps
}
const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,drive,make,model,transmission,year} = car
const [IsOpen, setIsOpen] = useState(false)
    const carRent = calculateRent(year,city_mpg)
   
    
  return (
    <div className='car-card group'>
      <div className="car-card__content">
        <h2 className='car-card__content-title'>
            {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start font-medium text-[14px]'>
            $
        </span>
            {carRent}
            <span className='self-end font-medium text-[14px]'>
            /day
        </span>    
      </p>
    <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" alt='' fill priority className='object-contain' />
    </div>
<div className="relative flex w-full mt-2">
    <div className="flex group-hover:invisible w-full justify-between text-gray">
<div className="flex flex-col justify-center items-center gap-2">
    <Image src={'/steering-wheel.svg'} alt='steering wheel' width={20} height={20}/>
    <p className='text-[14px]'>{transmission == "a"?"Automatic":"Manual"}</p>
</div>
<div className="flex flex-col justify-center items-center gap-2">
    <Image src={'/tire.svg'} alt='tire' width={20} height={20}/>
    <p className='text-[14px] uppercase'>{drive}</p>
</div>
<div className="flex flex-col justify-center items-center gap-2">
    <Image src={'/gas.svg'} alt='gas' width={20} height={20}/>
    <p className='text-[14px] uppercase'>{city_mpg} MPG</p>
</div>
    </div>

<div className="car-card__btn-container">
    <CustomButton
    title='View More'
    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
    textStyle="text-white text-[14px] leading-[17px] font-bold"
    rightIcon = "/right-arrow.svg"
    handleClick={()=>setIsOpen(true)}
    
    />
</div>

</div>

<CarDetails IsOpen={IsOpen} closeModel={()=>(setIsOpen(false))} car={car}/>

    </div>
  )
}

export default CarCard
