export async function fetchCars(){
    const headers = {
		'x-rapidapi-key': '9f07982f0cmsh0f5bacec150f96cp13e214jsnd2e933d96849',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers : headers,
    });
    
    const result = await response.json();
    
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(1);
  };

export const convertToKilometerPerLitre = (city_mpg:number) => {
    // 1 mile = 1.60934 kilometers
    // 1 gallon = 3.78541 liters
    const milesToKilometers = 1.60934;
    const gallonsToLiters = 3.78541;
    
    const kilometersPerLiter = city_mpg * milesToKilometers / gallonsToLiters;
    return kilometersPerLiter.toFixed(2); // rounding to 2 decimal places
}
