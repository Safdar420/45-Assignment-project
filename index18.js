var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["Makkah", "Madina", "Dubai", "Misar", "Turkey"];
// Print array in its original order
console.log("Original Order:", placesToVisit);
// Print array in alphabetical order without modifying the actual list
var sortedAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedAlphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Print array in reverse alphabetical order without changing the order of the original list
var sortedReverseAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", sortedReverseAlphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order (after reversing again):", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);
