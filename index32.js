var currentUsers = ["user1", "user2", "Raheel", "Zafar", "Almas"];
var newUsers = ["Zafar", "Almas", "user3", "Jawwad", "user4"];
var _loop_1 = function (newUser) {
    var usernameExists = currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); });
    if (usernameExists) {
        console.log("the username ".concat(newUser, " is not available please enter a new username"));
    }
    else {
        console.log("the username ".concat(newUser, " is available"));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
