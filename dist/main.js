var hello = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Aytugan", "Özgan"));
var user = {
    name: "Aytugan",
    age: 26,
    getMessage: function () {
        return this.name + "'s age is " + this.age + " ";
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return this.name + "'s age is " + this.age + " ";
    }
};
console.log(user.age);
