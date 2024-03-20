/*
NOT RECOMMENDED - NOT EFFICIENT

const student_john = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge(){
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
    }
}


const student_jane = {
    fName: 'Jane',
    lName: 'Doe',
    age: 23,
    study() {
        console.log(`${this.fName} ${this.lName} studies.`);
    },
    getAge(){
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
    }
}


const student_alex = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30,
    study() {
        console.log(`${this.fName} ${this.lName} studies.`);
    },
    getAge(){
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
    }
}


student_morgan = {
    fName: 'Morgan',
    lName: 'Smith',
    age: 19,
    study() {
        console.log(`${this.fName} ${this.lName} studies.`);
    },
    getAge(){
        console.log(`${this.fname} ${this.lname} is ${this.age} years old.`);
    }
}
*/
// Create a template for student, and you can create as many student objects as you want - constructor function

function Student(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;

}
// Add methods(functions) to the prototype:

Student.prototype.study = function() {
    console.log(`${this.fName} ${this.lName} studies.`);
}

Student.prototype.getAge = function() {
    console.log(`${this.fName} ${this.lName} is ${this.age} years old.`);
}


const student_john = new Student('John', 'Doe', 25);
const student_jane = new Student('Jane', 'Doe', 23);
const student_alex = new Student('Alex', 'Smith', 30);
const student_morgan = new Student('Morgan', 'Smith', 19);


console.log(student_john);
console.log(student_jane);
console.log(student_alex);
console.log(student_morgan);


student_alex.study();
student_morgan.getAge();


Array.prototype.middle = function() {
    return this[Math.floor(this.length / 2)];
};

console.log([1, 2, 3].middle());