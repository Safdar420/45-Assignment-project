let currentUsers : string[] = ["user1","user2","Raheel","Zafar","Almas"];
let newUsers : string[] = ["Zafar","Almas","user3","Jawwad","user4"];

for (let newUser of newUsers) {
   let usernameExists = currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase());
    if (usernameExists){
        console.log(`the username ${newUser} is not available please enter a new username`)
    }
    else{
        console.log(`the username ${newUser} is available`);
    }
}    