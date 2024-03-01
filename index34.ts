let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];
console.log('Pizzas name');

for (let pizza of pizzas){
    console.log(pizza);
}

console.log('Pizzas reference');

for (let pizza of pizzas){
    console.log(`I really like ${pizza} pizza`);
}

console.log('I really love pizza !');