"use client"
import { manufacturers } from '@/constant'
import { ManufacturerProps } from '@/types/types'
import { Combobox } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'

const SearchManufacturer = ({Manufacturer, setManufacturer}:ManufacturerProps) => {
  const [query, setquery] = useState("")

  const filteredManufacturers = query === "" ? manufacturers :
  manufacturers.filter((item) => {
    return item.toLowerCase().replace(/\s+/g,'').includes(query.toLowerCase().replace(/\s+/g,''))
  })

  return (
    <div className="search-manufacturer">
      <Combobox value={Manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <div className="absolute top-[14px]">
            <Image src='/car-logo.svg' alt='car logo' width={20} height={20} className='ml-4'/>
          </div>
          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder='Volkswagen'
            onChange={(e)=>setquery(e.target.value)}
          />
          {query && (
            <Combobox.Options>
              {
              (
                filteredManufacturers.map((item)=>(
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={(active)=>`relative search-manufacturer__option ${active?`hover:bg-primary-blue  hover:text-white`:`text-gray-900`}`}
                  >
                    {({selected,active})=>(
                      <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          
                        </span>
                      ) : null}
                    </>
                )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
