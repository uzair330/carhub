
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCar } from "@/components/util";
import { fuels, yearsOfProduction } from "@/constant";
import { FilterProps } from "@/types/types";


import Image from "next/image";
interface SearchParams{
  searchParams:FilterProps
}
export default async function Home({searchParams}:SearchParams) {




  const allcars= await fetchCar(
    {
      Manufacturer:searchParams.Manufacturer || "",
      model:searchParams.model || "",
      fuel:searchParams.fuel || "",
      year:searchParams.year || 2022,
      limit:searchParams.limit || 10,

    }
  );
  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  console.log(allcars);
  
  return (
   <main className="overflow-hidden">
<Hero/>

<div className="mt-12 padding-x padding-y max-width" id="discover">
  <div className="home__text-container">
    <h1 className="text-4xl font-extrabold">
      Car Catalogue
    </h1>
   <p>
    Explore the cars you may like
   </p>
  </div>
  <div className="home__filters">
    <SearchBar/>
   
  <div className="home__filter-container">
    <CustomFilter title="fuel" options={fuels}/>
    <CustomFilter title="year" options={yearsOfProduction}/> 

  </div>
  </div>

{!isDataEmpty ? (
<section>

  <div className="home__cars-wrapper">
    {
      allcars?.map((car)=>(
        <CarCard car={car} key={car} />
      ))
    }
  </div>
</section>
):(
  <div className="home__error-container">

  <h2 className="text-black text-xl font-bold">Opps no results</h2>
  <p>{allcars?.message}</p>
  </div>
  
)}

</div>



   </main>
  );
}

