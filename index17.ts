let Guests: string[] = ["Daniyal", "Amir", "Adil", "Ejaz", "Wakeel", "Faizan"];

// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests until only two names remain
while (Guests.length > 2) {
    // Pop a name from the list
    const removedGuest = Guests.pop();

    // Print a message to the removed guest
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let Guest of Guests) {
    console.log(`Dear ${Guest}, you're still invited to dinner.`);
}

// Remove the last two names to make an empty list
Guests.pop();
Guests.pop();

// Print the empty list
console.log("Updated guest list:", Guests);