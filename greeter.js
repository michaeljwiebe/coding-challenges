var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Michael", lastName: "Wiebe" };
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var a = "letter a";
var b = [3, 4, 5];
var c = 3;
var d = ["sdf", "sdd"];
var numArray = [1, 2, 3, 4];
var ro = numArray;
console.log(ro);
console.log(numArray);
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// numArray = ro; // error!
numArray = ro;
numArray[0] = 5;
function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
console.log("type safety");
console.log(reverse(numArray));
document.body.innerHTML = greeter(user);
