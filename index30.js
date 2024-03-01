var usernames = ["Admin", "Wakeel", "Raheel", "Jawwad", "Fahad"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "Admin") {
        console.log("Hello Admin , would you like to see my status report");
    }
    else {
        console.log("Hello ,".concat(username, " thanks you for loggin in again"));
    }
}
