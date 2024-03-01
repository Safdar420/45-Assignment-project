let usernames : string[] = ["Admin","Wakeel","Raheel","Jawwad","Fahad"]
for(let username of usernames){
    if(username === "Admin"){
        console.log("Hello Admin , would you like to see my status report");
    }else{
        console.log(`Hello ,${username} thanks you for loggin in again`);
    }
}