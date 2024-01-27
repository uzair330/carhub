"use client"
import { CarProps } from '@/types/types'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
interface carDetailProps{
    IsOpen:boolean
    closeModel:()=>void
    car:CarProps
}
const CarDetails = ({IsOpen,closeModel,car}:carDetailProps) => {
    console.log("CarDetails");
    
    // console.log(IsOpen)
  return (

    <>
    <Transition
    // appear show={IsOpen} as={Fragment}
    appear show={true} as={Fragment}

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
    <div className='fixed inset-0 bg-white bg-opacity-25'/>
</Transition.Child>
</Dialog>
    </Transition>
    </>
  )
}

export default CarDetails
