function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwiches summary");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread");
    console.log();
}
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Mustard");
makeSandwich("Turkey", "Bacon", "Avocado", "Mayonnaise");
