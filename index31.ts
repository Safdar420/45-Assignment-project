let users : string [] = ["Safadr","Almas","Zafar"];
if(users.length > 0){
    console.log("List of users:");

for ( let user of users){
    console.log(user);
}

users = [];
}
else {
    console.log("we need to find some users !");
}
