// BEFORE ES6
// Create a template with constructor function to create many objects

function Person() {

}

Person.prototype.eat = function() {
    console.log('EAT');
}

Person.prototype.sleep = function() {
    console.log('SLEEP');
}


function Programmer() {

}

// Inherit the prototype object of Person to Programmer

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function() {
    console.log('CODE');
}

const programmer_mustafa = new Programmer();
programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();


// Create Singer template which inherits from Person and add sing method to it.
// Create a Singer object and execute the sing(), eat() and sleep() method

function Singer() {

}

Singer.prototype = Object.create(Person.prototype);
Singer.prototype.sing = function() {
    console.log('SING');
}

const singer_A = new Singer();
singer_A.sing();
singer_A.eat();
singer_A.sleep();
