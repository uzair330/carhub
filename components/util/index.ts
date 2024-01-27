

export async function fetchCar() {
   try {
      const secretKey = process.env['RapidAPI_Key'];
      if (!secretKey) {
         throw new Error('RapidAPI_Key is not set in the environment variables');
      }
      const header = {
         'X-RapidAPI-Key': secretKey,
         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }   
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
         headers: header,
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

  
 
  