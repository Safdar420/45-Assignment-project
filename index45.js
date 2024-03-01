function createCar(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i = 0; i < Options.length; i += 2) {
        var key = Options[i];
        var value = Options[i + 1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', '2022');
console.log(myCar);
