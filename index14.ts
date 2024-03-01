//  Q no 14 :
let guestlist : string [] = ["Amir", "Adil", "Wakeel"];
function invitetodinner(guestlist : string[]) : void {
    for (let guest of guestlist) {
        console.log(`Dear ${guest} , you are coordinaly invited to jion me today for a dinner`);
    }
}
invitetodinner(guestlist);