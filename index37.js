function MakeShirts(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I Love Programming'; }
    console.log("Shirt size : ".concat(size));
    console.log("Message on the Shirt : ".concat(message));
}
MakeShirts();
console.log('\n');
MakeShirts('Medium');
console.log('\n');
MakeShirts('Small', 'Progming is my love');
