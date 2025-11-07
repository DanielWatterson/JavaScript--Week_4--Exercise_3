// TODO: Create a global variable called globalCount

var globalCount = 0;

console.log (globalCount);
// TODO: Create a function that demonstrates local scope

function locFunction() {
    let carName = "Ford";
    return carName
}

console.log (locFunction());
// TODO: Create a function that tries to modify both variables

function modifyFunction() {
    let carName = "Mustang";
    globalCount = 100;
    return carName
}

console.log(modifyFunction());
console.log (globalCount);

// TODO: Create a Student constructor function
function Student(firstName, lastName, age, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grade = grade; 
}

console.log(new Student("Johnny", "Parker", 22, "A"));

// TODO: Create several student instances
const student1 = new Student("John", "Doe", 20, "B");
const student2 = new Student("Jane", "Doe", 21, "A");
const student3 = new Student("Jackie", "Chan", 76, "C")

console.log(student1)
console.log(student2)
console.log(student3)

// TODO: Create an object literal with nested properties

const myObject = {
    name: "Johnny",
    age: 22,
    car: {
        maker: "Ford",
        model: "Fiesta",
        color: "red",
        year: 2019
    }
}

console.log(JSON.stringify(myObject, null, 2));
