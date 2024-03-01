// function cityCountry (city : string , country : string ) : string {
//     return`${city} , ${country}`;
// }
// console.log(cityCountry("Lahore","Pakistan"));
// console.log(cityCountry("Tokyo","Japan"));
// console.log(cityCountry("Paris","France"));
// Function to format city and country
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs and print the returned values
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
console.log(cityCountry("Paris", "France"));
