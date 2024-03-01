const country1 = {
    name: 'USA',
    capital: 'Washington, D.C.',
    population: 331002651
};

const country2 = {
    name: 'France',
    capital: 'Paris',
    population: 65273511
};

const country3 = {
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
function printCountryInfo(country: { name: string, capital: string, population: number }) {
    console.log(`${country.name}: Capital - ${country.capital}, Population - ${country.population}`);
}