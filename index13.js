//  Q no 13 :
var favouriteTransportation = ["CorolaCar", "motorbike", "Plane", "Landcrusor"];
function PrintTransportationstatements(transportationlist) {
    for (var _i = 0, transportationlist_1 = transportationlist; _i < transportationlist_1.length; _i++) {
        var transport = transportationlist_1[_i];
        console.log("I would like to own my , ".concat(transport));
    }
}
PrintTransportationstatements(favouriteTransportation);
