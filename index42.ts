function makeGreat (magicians : string[]) : string [] {
     return magicians.map(magician => `${magician} the Great`);
}

function Showmagicians(magicians : string[]) : void {
    console.log("Magicians :");
    for (let magician of magicians){
        console.log(magician);
    }
}

const MagicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];

const Greatmagicians : string[] = makeGreat(MagicianNames);

Showmagicians(MagicianNames);