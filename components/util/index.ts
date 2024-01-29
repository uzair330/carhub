//Getting data from api

import { CarProps, FilterProps } from "@/types/types";

export async function fetchCar(filter:FilterProps) {
   const {
   Manufacturer,
   model,
   fuel,
   year,
   limit,
   
 }=filter
   try {
      const secretKey = process.env['RapidAPI_Key'];
      if (!secretKey) {
         throw new Error('RapidAPI_Key is not set in the environment variables');
      }
      const header = {
         'X-RapidAPI-Key': secretKey,
         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }   
      const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${Manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {
         headers: header,
         cache:"no-store"
      });


      



      const result = await response.json();
      return result;
   } catch (error) {
      console.error('An error occurred:', error);
      throw error;
   }
}




export function calculateRent(year: number, cityMileage: number): number {
    let basePrice = 50; // Base price for car rent per day
  
    // Deduct $1 for each year the car is old
    let ageDeduction = new Date().getFullYear() - year;
  
    // Deduct $0.5 for each mile of city mileage
    let mileageDeduction = cityMileage * 0.5;
  
    let rentPrice = basePrice - ageDeduction - mileageDeduction;
  
    // Ensure rent price is not less than a minimum value (e.g., $20)
    rentPrice = Math.max(rentPrice, 20);
  
    return rentPrice;
}

  
 
export const generateCarImageUrl=(car:CarProps,angle?:string)=>{
   const url= new URL('https://cdn.imagin.studio/getimage')
  const {make,year,model}=car
   url.searchParams.append("customer","hrjavascript-mastery")

   url.searchParams.append("make",make)
   url.searchParams.append("modelFamily",model.split(" ")[0])
   url.searchParams.append("zoomType","fulscreen")
   url.searchParams.append("modelYear",`${year}`)
   url.searchParams.append("angle",`${angle}`)
   return `${url}`


}  

export const updateSearchParams=(type:string, value:string)=>{
   const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type,value);

const newPath = `${window.location.pathname}?${searchParams.toString()}`;
return newPath
}