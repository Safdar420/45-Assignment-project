
function make_Great(magicians : string []) : string [] {
    return magicians.map(magician => `${magician} the Great`)
}

function showMagicians(magicians : string[]) : void {
    console.log("Magicians :");
    for (let magician of magicians){
        console.log(magician);
    }
}

const Magician_Names: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];

const Great_magicians : string[] = make_Great([...Magician_Names]);

showMagicians(Magician_Names);
console.log("\n");
showMagicians(Great_magicians);