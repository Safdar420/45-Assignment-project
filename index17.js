var Guests = ["Daniyal", "Amir", "Adil", "Ejaz", "Wakeel", "Faizan"];
// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests until only two names remain
while (Guests.length > 2) {
    // Pop a name from the list
    var removedGuest = Guests.pop();
    // Print a message to the removed guest
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _i = 0, Guests_1 = Guests; _i < Guests_1.length; _i++) {
    var Guest = Guests_1[_i];
    console.log("Dear ".concat(Guest, ", you're still invited to dinner."));
}
// Remove the last two names to make an empty list
Guests.pop();
Guests.pop();
// Print the empty list
console.log("Updated guest list:", Guests);
