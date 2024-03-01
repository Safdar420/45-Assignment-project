//  Q no 12 :
let names : string[] = ["Amir", "Adil", "Wakeel"];
function greetFriends(names : string[]) : void {
    for (let name of names){
        console.log(`hello , ${name}! have a great day`);
    }
}
greetFriends(names) 