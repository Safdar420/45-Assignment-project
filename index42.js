function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function Showmagicians(magicians) {
    console.log("Magicians :");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var MagicianNames = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];
var Greatmagicians = makeGreat(MagicianNames);
Showmagicians(MagicianNames);
