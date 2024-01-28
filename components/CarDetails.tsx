"use client"
import { CarProps } from '@/types/types'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { generateCarImageUrl } from './util'
interface carDetailProps{
    IsOpen:boolean
    closeModel:()=>void
    car:CarProps
}
const CarDetails = ({IsOpen,closeModel,car}:carDetailProps) => {
    console.log("CarDetails");
    
    console.log(IsOpen)
     let data:boolean=false
     data=IsOpen
     console.log(data)
  return (

    <>
    <Transition
    appear show={data} as={Fragment}
    
    // appear show={false} as={Fragment}

    >
<Dialog as='div' className={'relative z-10'} onClose={closeModel} >
<Transition.Child
as = {Fragment}
enter='ease-out duration-300'
enterFrom='opacity-0'
enterTo='opacity-100'
leave='ease-in duration-200'
leaveFrom='opacity-100'
leaveTo='opacity-0'
>
    <div className='fixed inset-0 bg-black bg-opacity-25'/>
</Transition.Child>

<div className="fixed inset-0 overflow-y-auto">
    <div className="flex min-h-full items-center justify-center p-4 text-center">
    <Transition.Child
as = {Fragment}
enter='ease-out duration-300'
enterFrom='opacity-0 scale-95'
enterTo='opacity-100 scale-100'
leave='ease-in duration-200'
leaveFrom='opacity-100 scale-100'
leaveTo='opacity-0 scale-95'
>
    <Dialog.Panel className="relative  w-full p-6 max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left transition-all flex flex-col gap-5">
    <button type='button' onClick={closeModel}
    className='absolute top-2 right-2 z-10  w-fit p-2 bg-primary-blue-100 rounded-full '
    >

    <Image src={"/close.svg"} alt='' width={20} height={20}
    className='object-contain'
    />
    </button>
<div className="flex flex-1 flex-col gap-3">
    <div className="relative w-full h-40 bg-pattern bg-cover  bg-center rounded-lg">
    <Image src={generateCarImageUrl(car)} alt='gas' fill className='object-contain'/>
        
    </div>
    <div className="flex gap-3">
        <div className="flex-1 relative"> <Image src={generateCarImageUrl(car,"29")} alt='gas' width={150} height={150} className='object-contain'/></div>
        <div className="flex-1 relative"> <Image src={generateCarImageUrl(car,"33")} alt='gas' width={150} height={150} className='object-contain'/></div>
        <div className="flex-1 relative"> <Image src={generateCarImageUrl(car,"13")} alt='gas' width={150} height={150} className='object-contain'/></div>

    </div>
</div>
<div className="flex flex-1 flex-col gap-3">
    <h2 className='font-semibold text-2xl capitalize'>
        {car.make} {car.model}
    </h2>
    <div className="mt-3 flex gap-4 flex-wrap">
        {Object.entries(car).map(([key,value])=>(
            <div className="flex justify-between  gap-3 w-full text-right" key={key}>
                <div className="text-grey capitalize">{key.split("_").join(" ")}</div>
                <div className="text-black-100 font-semibold">{value}</div>
            </div>
        ))}
    </div>
</div>
    </Dialog.Panel>
</Transition.Child>
    </div>
</div>

</Dialog>
    </Transition>
    </>
  )
}

export default CarDetails
