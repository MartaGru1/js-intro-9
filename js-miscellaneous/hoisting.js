
//Before ES6, JavaScript did not have block scope.
console.log(address); // undefined
var address; // variable declaration is hoisted to the top of the function only with the var keyword

var address = 'Chicago, IL';

/* 
JS assumes the above code as below:
var address;

console.log(address); // undefined

address = 'Chicago, IL';
*/


// Function hoisting

console.log(sum(1, 2)); // 3

function sum(n1, n2){
    return n1 + n2;
}

console.log(sum(3, 2)); // 5


// Function expression hoisting

console.log(add(1, 2)); // ReferenceError: Cannot access 'add' before initialization

const add = function(n1, n2){
    return n1+n2;
}


// Function expression hoisting with var keyword
console.log(add(1, 2)); // TypeError: add is not a function

var add = function(n1, n2){ 
    return n1+n2;
}  // Return type error: add is not a function


// var is hoisted but not the function expression. So, the variable add is hoisted but the function expression is not hoisted.
// So, the variable add is hoisted to the top of the function and it is initialized with undefined.
// let and const are not hoisted. So, the variable add is not hoisted to the top of the function. So, it throws a reference error.

// BEFORE ES6
console.log(address);

var address = 'Chicago, IL';

/*
JS assumes the above code is written as below

var address;

console.log(address); // undefined

address = 'Chicago, IL';
*/


// Function declaration are hoisted
console.log(sum(1, 2)); // 3

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(3, 2)); // 5


// Function expression or arrow functions 
// var is hoisted, let and const are not hoisted
// You will get ReferenceError for let or const and TypeError for var 

console.log(add(1, 2)); // ReferenceError (let or const) or TypeError (var)

const add = (n1, n2) => {
    return n1 + n2;
}





