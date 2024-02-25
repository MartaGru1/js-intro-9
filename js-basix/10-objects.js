const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: 'Chicago',
    phoneNumber: '000-000-0000'
};

// To get student1 information
console.log(student1);

// To get a specific information about the student1
student1.firstName
console.log(student1.firstName); //John;
console.log(student1['firstName']);
console.log(student1.age); //25



// Update properties of the object
student1.address = 'Miami';

console.log(student1);
console.log(student1.address);


// Adding new property
student1.phoneNumber = '000-000-0000';
student1.ssn = '000-00-0000';
student1.favMovie = 'Lord of the Rings';

// Deleting existing properties
delete student1.phoneNumber;
delete student1.ssn;
delete student1.favMovie;

console.log(student1);
