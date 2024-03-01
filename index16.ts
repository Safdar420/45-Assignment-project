let guests: string[] = ["Amir", "Adil", "Wakeel"];

console.log("Good news! We found a bigger dinner table.");

// Add a new guest to the begining of the array
guests.unshift("Daniyal");

// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Ejaz");

// Use push() to add a new guest to the end of the array
guests.push("Faizan");

for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner at our place!`);
}