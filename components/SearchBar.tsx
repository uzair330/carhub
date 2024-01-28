"use client"

import { useState } from "react"
import SearchManufacturer from "@/components/SearchManufacturer"
import FetchCarModel from "./util/actions"
import { useFormState } from "react-dom"


const initialState = {
  "message" : null
}


const SearchBar = () => {
  const [state, SendingFormData] = useFormState(FetchCarModel, initialState)
    const [Manufacturer, setManufacturer] = useState("")
    

  const handleSearch=()=>{}
    return (
      <div className="">

    <form action="" 
    onSubmit={handleSearch}
    className="searchbar">
<div className="searchbar__item">
    <SearchManufacturer
    Manufacturer={Manufacturer}
    setManufacturer={setManufacturer}
    />
</div>
    </form>
    
    
    </div>
    
  )
}

export default SearchBar
