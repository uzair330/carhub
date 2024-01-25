"use client"

import { useState } from "react"
import { SearchManufacturer } from "."

const SearchBar = () => {
    const [Manufacturer, setManufacturer] = useState("")
  const handleSearch=()=>{}
    return (
    <form action="" 
    onSubmit={handleSearch}
    className="searchbar">
<div className="searchbar__item">
    <SearchManufacturer
    manufacturer={Manufacturer}
    setManufacturer={setManufacturer}
    />
</div>
    </form>
  )
}

export default SearchBar
