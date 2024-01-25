import { MouseEventHandler } from "react";

export interface CustomButtonProp{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    fontsize:string;
    btnType?:"button"|"submit";
}

export interface ManufacturerProps{
    Manufacturer:string
    setManufacturer:(Manufacturer:string)=>void
}