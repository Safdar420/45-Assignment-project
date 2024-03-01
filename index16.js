var guests = ["Amir", "Adil", "Wakeel"];
console.log("Good news! We found a bigger dinner table.");
// Add a new guest to the beginning of the array
guests.unshift("Daniyal");
// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Ejaz");
// Use push() to add a new guest to the end of the array
guests.push("Faizan");

for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner at our place!"));
}
