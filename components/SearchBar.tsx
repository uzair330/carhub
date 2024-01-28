"use client"

import { useState } from "react"
import SearchManufacturer from "@/components/SearchManufacturer"
import FetchCarModel from "./util/actions"
import { useFormState } from "react-dom"
import Image from "next/image"





const SearchBar = () => {
  // const [state, SendingFormData] = useFormState(FetchCarModel, initialState)
    const [Manufacturer, setManufacturer] = useState("")
const [model, setmodel] = useState("")    
const SearchButton = ({otherClasses}:{otherClasses:string})=>(
  <button
  type="submit"
  className={`-ml-3 z-10 ${otherClasses}`}
  >
    <Image 
    src={'/magnifying-glass.svg'} 
    alt=""
    width={40}
    height={40}
    className="object-contain"
    />
  </button>
)
  const handleSearch=()=>{}
    return (
     

    <form action="" 
    onSubmit={handleSearch}
    className="searchbar">
<div className="searchbar__item ">
    <SearchManufacturer
    Manufacturer={Manufacturer}
    setManufacturer={setManufacturer}
    />
    <SearchButton otherClasses="sm:hidden"/>
</div>
<div className="searchbar__item">
  <Image src={'/model-icon.png'} alt="" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4"/>
  <input
  type="text"
  name="model"
  value={model}
onChange={(e)=>setmodel(e.target.value)}
placeholder="Tiguan"
className="searchbar__input"
  >
  
  </input>
</div>
    </form>
    
    
   
    
  )
}

export default SearchBar
