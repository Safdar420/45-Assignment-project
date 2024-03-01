//  Q no 13 :
let favouriteTransportation: string[] = ["CorolaCar", "motorbike" ,"Plane" ,"Landcrusor"];
function PrintTransportationstatements ( transportationlist : string[]) : void {
    for (let transport of transportationlist ) {
        console.log(`I would like to own my , ${transport}`);
     }
}
 PrintTransportationstatements(favouriteTransportation);