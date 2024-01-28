"use server"
const FetchCarModel = async (formData: FormData) => {
    
    const car_Model = formData.get("model")


    console.log(`Car Model: ` + car_Model)
    try {
       const secretKey = process.env['RapidAPI_Key'];
       if (!secretKey) {
          throw new Error('RapidAPI_Key is not set in the environment variables');
       }
       const header = {
          'X-RapidAPI-Key': secretKey,
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
       }   
       const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${car_Model}`, {
          headers: header,
          cache:"no-store"
       });
       const result = await response.json();
       console.log(result)
       return result;
    } catch (error) {
       console.error('An error occurred:', error);
       throw error;
    }
 }

 export default FetchCarModel;