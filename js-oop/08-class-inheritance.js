// AFTER ES6
class Person {
    // provided by default
    // constructor() {
    // }
    eat() {
        console.log('EAT');
    }
    sleep() {
        console.log('SLEEP');
    }
}
class Programmer extends Person {
    code() {
        console.log('CODE');
    }
}
const programmer_mustafa = new Programmer();
programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();

// Create Singer class and inherit Person methods
// Create a sing method for Singer class
// Create a Singer object and execute the sing(), eat() and sleep() method



// create a Singer template which inherits from Person

class Singer extends Person {
    sing() {
        console.log('SING');
    }
}

const singer = new Singer();
singer.sing();
singer.eat();
singer.sleep(); 