class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person{
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return "hello " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Michael", lastName: "Wiebe"};
// var user = "Michael J";


interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


let a: string = "letter a"
let b: number[] = [3,4,5];
let c: number = 3;
let d: string[] = ["sdf", "sdd"]

let numArray: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = numArray;

console.log(ro);
console.log(numArray);

// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// numArray = ro; // error!
numArray = ro as number[];
numArray[0]= 5;


interface SearchFunc {
    (source: string, subString: string): boolean;
}

function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
        // toreturn.push(parseInt(items[i]));
    }
    return toreturn;
}
console.log("type safety")
// let reversedArray = reverse(numArray);
// console.log(reversedArray)

document.body.innerHTML = greeter(user);
