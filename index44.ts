function makeSandwich (...items : string []) : void {
    console.log("Sandwiches summary");
    console.log("Bread");

    for (let item of items){
        console.log(item);
    }
    console.log("Bread");
    console.log();
}

makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Mustard");
makeSandwich("Turkey", "Bacon", "Avocado", "Mayonnaise");