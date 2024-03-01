// Array of places to visit
let placesToVisit: string[] = ["Makkah", "Madina", "Dubai", "Misar", "Turkey"];

// Print array in its original order
console.log("Original Order:", placesToVisit);

// Print array in alphabetical order without modifying the actual list
let sortedAlphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabeticalOrder);

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);

// Print array in reverse alphabetical order without changing the order of the original list
let sortedReverseAlphabeticalOrder = [...placesToVisit].sort().reverse();
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
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);