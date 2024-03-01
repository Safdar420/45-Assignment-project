var country1 = {
    name: 'USA',
    capital: 'Washington, D.C.',
    population: 331002651
};
var country2 = {
    name: 'France',
    capital: 'Paris',
    population: 65273511
};
var country3 = {
    name: 'Japan',
    capital: 'Tokyo',
    population: 126476461
};
// Printing information about the countries
console.log('Information about countries:');
printCountryInfo(country1);
printCountryInfo(country2);
printCountryInfo(country3);
// Function to print country information
function printCountryInfo(country) {
    console.log("".concat(country.name, ": Capital - ").concat(country.capital, ", Population - ").concat(country.population));
}
