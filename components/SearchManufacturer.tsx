"use client"
import { ManufacturerProps } from '@/types/types'
import { Combobox } from '@headlessui/react'


const SearchManufacturer = ({Manufacturer, setManufacturer}:ManufacturerProps) => {
  return (
  <div className="search-manufacturer">
    <Combobox>
        <div className="relative w-full">
            <Combobox.Button className={"absolute top-[14px]"} >

            </Combobox.Button>
        </div>
    </Combobox>
  </div>
  )
}

export default SearchManufacturer
