// Map is a method on an array. When used, it iterates through the array, runs a function, and changes the value of each iteration of the array based upon the code that is run. For instance:
// var nums = [10, 15, 20];
// nums.map(function(num) {
// })
// This would be how you set up the map function in JavaScript, which is very similar to array.forEach, below:
// nums.forEach(function(num) {
// })
// In .map(), however, we set things up a little differently within. We use the return statement within the anonymous function, which is telling .map() that that is what we want the value in the array to change to:
// nums.map(function(num) {
//     return num * 2;
// })
// We can then save it in a variable:
// doubledNums = nums.map(function(num) {
//     return num * 2;
// })
// Now, doubledNums should hold [20, 30, 40].
// Use the javaScript .map() function to turn [“Chris”, “Emily”, “Oggi”] into [“Chris works here”, “Emily works here”, “Oggi works here”]
// Then, do it in Ruby on one line.


var nums = [10,15,20];
var doubledNums = nums.map(function(num){
    return num * 2;
})

console.log(doubledNums);

var names = ["chris", "oggi", "emily"];

var worksHere = names.map(function(name){
    return name + " works here";
})

console.log(worksHere);
