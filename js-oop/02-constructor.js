// Create Teacher constructor with fname, lname, age, field properties.

function Teacher(fname, lname, age, field) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.major = field;
}

const teacherPT = new Teacher('Mustafa', 'Bond', 25, 'PT');

console.log(teacherPT.firstname); //Mustafa
console.log(teacherPT.lastname); //Bond
console.log(teacherPT.age); //25
console.log(teacherPT.major); //PT

// create 2 teacher prototypes methods as teach and giveHomework with empty function body

Teacher.prototype.teach = function() {
    console.log(`${this.firstname} ${this.lastname} is teaching ${this.major}.`);
}

Teacher.prototype.giveHomework = function() {
    console.log(`${this.firstname} ${this.lastname} is giving homework.`);
}

// Create 3 teacher objects

const teacher1 = new Teacher('Vollie', 'Smith', 30, 'Math');
const teacher2 = new Teacher('Iren', 'Brown', 35, 'Bussiness');
const teacher3 = new Teacher('Martha', 'Stewart', 82, 'Culinary');

// Store all ages of teachers in an array
// store all teachers first names in an array
//Find and print the information of the oldest teacher -> Martha is oldest with the age of 82.

const teachers = [teacher1, teacher2, teacher3];
const ages = teachers.map(teacher => teacher.age);
console.log(ages);

const firstNames = teachers.map(teacher => teacher.firstname);
console.log(firstNames);

// let oldest = teachers[0];
// for(const teacher of teachers) {
//     if(teacher.age > oldest.age) oldest = teacher;
// }
const oldest = teachers.reduce((acc, curr) => {
    return curr.age > acc.age ? curr : acc;
    // if(curr.age > acc.age) return curr;
    // return acc;
});

// const oldest = teachers.reduce((acc, curr) => curr.age > acc.age ? curr : acc);

console.log(oldest);
console.log(`${oldest.firstname} is oldest with the age of ${oldest.age}.`);

