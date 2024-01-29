import { MouseEventHandler } from "react";

export interface CustomButtonProp{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    fontsize?:string;
    btnType?:"button"|"submit";
    textStyle?:string
    rightIcon?:string
    isDisable?:boolean
}

export interface ManufacturerProps{
    Manufacturer:string
    setManufacturer:(Manufacturer:string)=>void
}

export interface CarProps{
    city_mpg:number
    class:string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive:string
    fuel_type:string
    highway_mpg: number
    make:string
    model:string
    transmission:string
    year: number
}

export interface FilterProps{
    Manufacturer:string,
    model:string,
    fuel:string,
    year:number,
    limit:number,
    
  }
export interface OptionProps{
    title:string;
    value:string
}
export interface CustomFiltersProps{
 title:string;
 options:OptionProps[]
}  