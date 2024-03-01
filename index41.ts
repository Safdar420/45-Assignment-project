function showmagicians (magicians : string[]) : void {
    console.log("Magicians :");
    for ( let magician of magicians) {
        console.log(magician);
    }
}
const magicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];

showmagicians(magicianNames);