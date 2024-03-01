function MakeShirts ( size : string = 'Large' , message : string = 'I Love Programming') : void {
    console.log(`Shirt size : ${size}`);
    console.log(`Message on the Shirt : ${message}`);
}

MakeShirts();
console.log('\n');
MakeShirts('Medium');
console.log('\n')
MakeShirts('Small','Progming is my love');