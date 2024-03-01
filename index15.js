//  Q no 15 :
var Guestlist = ["Amir", "Adil", "Wakeel"];
console.log("orignal Guest list :");
for (var _i = 0, Guestlist_1 = Guestlist; _i < Guestlist_1.length; _i++) {
    var Guest = Guestlist_1[_i];
    console.log("-".concat(Guest));
}
var guestWhoCantMakeIt = "Wakeel";
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " can't make it to the dinner.\n"));
var indexOfGuestWhoCantMakeIt = Guestlist.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    var newPerson = "Ata-ur-rehman";
    Guestlist[indexOfGuestWhoCantMakeIt] = newPerson;
    console.log("Updated Guest List:");
    for (var _a = 0, Guestlist_2 = Guestlist; _a < Guestlist_2.length; _a++) {
        var guest = Guestlist_2[_a];
        console.log("- ".concat(guest));
    }
    console.log("\nSecond Set of Invitation Messages:");
    for (var _b = 0, Guestlist_3 = Guestlist; _b < Guestlist_3.length; _b++) {
        var guest = Guestlist_3[_b];
        console.log("Dear ".concat(guest, ", you are invited to the dinner. Please join us!\n"));
    }
}
else {
    console.log("".concat(guestWhoCantMakeIt, " was not found in the guest list."));
}
