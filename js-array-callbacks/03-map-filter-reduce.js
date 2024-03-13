/*
Assume you are given an array

const arr = [el1, el2, el3, el4, el5, el6];


count, sum, average, min, max, shortest, longest, most expensive simply result being one simple result -> reduce method
returning some of the elements (subarray of the original) -> filter method
returning a same size new array with modified original array elements -> map
*/

const numbers = [-2, -5, 3, 0, 5, 8, 10]; 

const positiveNumbers = numbers.filter(number => number > 0);

console.log(positiveNumbers);


// ['even', 'odd', 'odd', 'even', 'odd', 'even', 'even']

const evenOdd = numbers.map(number => number % 2 === 0 ? 'even' : 'odd');

console.log(evenOdd);


console.log(numbers.reduce((sum, curr) => sum + curr), 0);


/*Object: it is a reference data type and stores data in key-value pairs.
*** keys must unique (should not be duplicated)
*** values can be null, undefined or duplicates
*** keys are string by default while values can be of any type 

We create objects using {} or new Object() constructor. */

const obj1 = {}; // empty objects
const obj2 = new Object(); // empty objects*

// Create a phone object with some properties (key-value pairs or entries)
const phone = {
    brand: 'Samsung',
    price: 10.99,
    delivery: ['shipping', 'pick-up'],
    quantity: 96,
    reviews: 4.6
};

console.log(phone);

phone.brand; // 'Samsung' 
phone['brand']; // 'Samsung'

// Update property values
phone.price = 15.99;
console.log(phone.price); // 15.99

// Add more properties 
phone.colors = ['Black', 'Green', 'Yello'];
phone['colors'] = ['Black', 'Green', 'Yello'];


// Remove some properties 
delete phone.reviews;
delete phone.colors;


/*
Higher order function: that is a function takes another function as an argument 
Callback functionL that is a function used as an argument in a higher order function 

functionA(functionB)

functionA: higher order function 
functionB: callback function
*/

