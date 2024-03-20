class Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        //console.log('Parent constructor is executed');
    }

    // you can crate methods in the constructor
    eat() {
        console.log('EAT');
    }
}

const person1 = new Person();

class Customer extends Person {
    constructor(fname, lname, age, id){
        super(fname, lname, age);
        this.id = id;
        //console.log('Child constructor is executed');
    }
}

const cust = new Customer('John', 'Doe', 25, 1)
console.log(cust);
cust.eat(); // EAT

class VIPCustomer extends Customer {
    constructor(fname, lname, age, id, vipID){
        super(fname, lname, age, id);
        this.vipID = vipID;
        //console.log('Grandchild constructor is executed');
    }
}

const rabe = new VIPCustomer('Rabe', 'A', 25, 2, 1);
console.log(rabe);
console.log(rabe.vipID);