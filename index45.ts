interface Car {
manufacturer : string;
model : string ;
[key : string ] : any 
}

function createCar(manufacturer : string , model : string , ...Options : any[]) : Car {
    const car : Car = {
    manufacturer,
    model,
    }


for (let i = 0; i < Options.length; i +=2){

    const key = Options[i];
    const value = Options[i + 1];

    car[key] = value;
    }
return car;
}

const myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', '2022');

console.log(myCar);