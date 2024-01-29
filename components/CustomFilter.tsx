"use client"
import { CustomFiltersProps, OptionProps } from '@/types/types'
import { Listbox, Transition } from '@headlessui/react'
import { validateHeaderValue } from 'http'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { Fragment, useState } from 'react'
import { updateSearchParams } from './util'

const CustomFilter = ({title,options}:CustomFiltersProps) => {
  const [selected, setselected] = useState(options[0])

const router  = useRouter() 
const handleUpdateParam=(e:{title:string,value:string})=>{
  const newPath=updateSearchParams(title,e.value.toLowerCase())
  router.push(newPath)
}

  return (
    <div className='w-fit'>
      <Listbox
      value={selected}
      onChange={(e)=>
        {

          setselected(e);
          handleUpdateParam(e);
        }
        
        }
      >
        <div className="relative w-fit z-10 ">
          <Listbox.Button className='custom-filter__btn '>
<span className='block truncate '>
  {selected.title}
</span>
  <Image src='/chevron-up-down.svg' alt='arrow down' width={20} height={20} className='ml-4 object-contain'/>
  
          </Listbox.Button>
          <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          
          >
<Listbox.Options className='custom-filter__options'>
{options.map((option)=>(
  <Listbox.Option 
  value={option}
  key={option.title}
  className={({active})=>`relative cursor-default select-none py-2 px-4 ${!active ?"text-grey-900":"text-white bg-primary-blue"} `}
  >
    {(seleted)=>(
      <span className={seleted ? "font-medium":"font-normal"}>
        {option.title}
      </span>
      
    )}
  </Listbox.Option>
))}
</Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      
    </div>
  )
}

export default CustomFilter


