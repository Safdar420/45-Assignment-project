var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_Great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function showMagicians(magicians) {
    console.log("Magicians :");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var Magician_Names = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];
var Great_magicians = make_Great(__spreadArray([], Magician_Names, true));
showMagicians(Magician_Names);
console.log("\n");
showMagicians(Great_magicians);
