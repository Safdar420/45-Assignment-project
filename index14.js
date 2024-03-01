//  Q no 14 :
var guestlist = ["Amir", "Adil", "Wakeel"];
function invitetodinner(guestlist) {
    for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
        var guest = guestlist_1[_i];
        console.log("Dear ".concat(guest, " , you are coordinaly invited to jion me today for a dinner"));
    }
}
invitetodinner(guestlist);
