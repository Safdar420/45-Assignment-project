//  Q no 15 :
let Guestlist : string [] = ["Amir", "Adil", "Wakeel"];
console.log("orignal Guest list :");
for (const Guest of Guestlist) {
    console.log(`-${Guest}`);
}
const guestWhoCantMakeIt = "Wakeel";

console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.\n`);

const indexOfGuestWhoCantMakeIt = Guestlist.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== -1) {
    const newPerson = "Ata-ur-rehman"; 
    Guestlist[indexOfGuestWhoCantMakeIt] = newPerson;

    console.log("Updated Guest List:");
    for (const guest of Guestlist) {
        console.log(`- ${guest}`);
    }

    console.log("\nSecond Set of Invitation Messages:");
    for (const guest of Guestlist) {
        console.log(`Dear ${guest}, you are invited to the dinner. Please join us!\n`);
    }
} else {
    console.log(`${guestWhoCantMakeIt} was not found in the guest list.`);
}