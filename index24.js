// Tests for equality and inequality with strings
var stringA = 'apple';
var stringB = 'orange';
console.log("Is 'apple' equal to 'orange'? I predict false.");
console.log(stringA === stringB);
console.log("Is 'apple' not equal to 'orange'? I predict true.");
console.log(stringA !== stringB);
// Tests using the lower case function
var mixedCaseString = 'HelloWorld';
console.log("Is 'HelloWorld' equal to 'helloworld' (case insensitive)? I predict true.");
console.log(mixedCaseString.toLowerCase() === 'helloworld');
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is 10 greater than 5? I predict true.");
console.log(num1 > num2);
console.log("Is 5 less than or equal to 10? I predict true.");
console.log(num2 <= num1);
console.log("Is 10 equal to 15? I predict false.");
console.log(num1 === 15);
// Tests using "and" and "or" operators
var trueValue = true;
var falseValue = false;
console.log("Is true and false equal to false? I predict true.");
console.log(trueValue && falseValue === false);
console.log("Is false or false equal to false? I predict true.");
console.log(falseValue || falseValue === false);
// Test whether an item is in an array
var fruitsArray = ['apple', 'orange', 'banana'];
console.log("Is 'banana' in the fruits array? I predict true.");
console.log(fruitsArray.includes('banana'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict true.");
console.log(!fruitsArray.includes('grape'));
