var users = ["Safadr", "Almas", "Zafar"];
if (users.length > 0) {
    console.log("List of users:");
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
    users = [];
}
else {
    console.log("we need to find some users !");
}
