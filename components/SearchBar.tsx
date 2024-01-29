"use client"

import { useState } from "react"
import SearchManufacturer from "@/components/SearchManufacturer"
import FetchCarModel from "./util/actions"
import { useFormState } from "react-dom"
import Image from "next/image"
import {useRouter} from "next/navigation"





const SearchBar = () => {
  // const [state, SendingFormData] = useFormState(FetchCarModel, initialState)
    const [Manufacturer, setManufacturer] = useState("")
const [model, setmodel] = useState("")
const router = useRouter()    
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
  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(Manufacturer == "" && model == ""){
      return alert("Please select a manufacturer and model")
    }
    updateSearchParams(Manufacturer.toLowerCase(),model.toLowerCase())
  }
const updateSearchParams=(Manufacturer:string,model:string)=>{
const searchParams = new URLSearchParams(window.location.search);
if(model){
  searchParams.set("model", model);
}else{
  searchParams.delete("model");
}

if(Manufacturer){
  searchParams.set("Manufacturer", Manufacturer);
}else{
  searchParams.delete("Manufacturer");
}
const newPath = `${window.location.pathname}?${searchParams.toString()}`;
router.push(newPath)
}
  
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
 />
  <SearchButton otherClasses="sm:hidden"/>
  
</div>
  <SearchButton otherClasses="max-sm:hidden"/>
    </form>
    
    
   
    
  )
}

export default SearchBar
