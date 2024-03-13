const numbers = [4, 10, 3, 0, -2, -5, 1];

// find even numbers

const findEvens = numbers.reduce((count, number) => {
    if (number % 2 === 0) count+=1;
    return count;
}, 0);

console.log(findEvens); // 4


// loop through the array

let count = 0;

for (const number of numbers) {
    if (number % 2 === 0) count++;
    else count;
    }
console.log(count); // 4


const evenCounter = numbers.reduce((count, number) => number % 2 === 0 ? count + 1 : count, 0);
console.log(evenCounter); // 4


// find the sum of the numbers

const sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);
console.log(sumOfNumbers); // 11


// Task 

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

console.log(fruits.reduce((count, fruit) => fruit.toLowerCase() === 'apple' ? count + 1 : count, 0)); // 2
console.log(fruits.reduce((count, fruit) => fruit.toLowerCase().includes('i') ? count + 1 : count, 0)); // 2
console.log(fruits.reduce((count, fruit) => fruit.endsWith('e') ? count + 1 : count, 0)); // 3

const findApple = fruits.reduce(( count, fruit) =>{
    if(fruit.toLowerCase().indexOf('apple') >= 0) count+=1;
    return count;
}, 0)

console.log(findApple); // 2

const hasI = fruits.reduce(( count, fruit) =>{
    if(fruit.toLowerCase().includes('i')) count+=1;
    return count;
}, 0)

console.log(hasI); // 2

const endsE = fruits.reduce(( count, fruit) =>{
    if(fruit.endsWith('e')) count+=1;
    return count;
}, 0)

console.log(endsE); // 3


// Task
/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the 
biggest element when invoked.
 
Examples:
max([0, 3, -9,  5, 8])      -> -9
max([-2, 0, -7, 10, -5])    -> -7
max([1, 2, 3, -2])          -> -2
max([-5, -2])               -> -5
*/
function max(arr) {
    if(arr.length === 0) throw Error('This array is empty');
    // max = arr[0] since we did not have initial value;
    return arr.reduce((max, num) => {
        if(num > max) return num;
        else return max
    });
}

console.log(max([0,3,-9, 5, 8]));
console.log(max([-2, 0, -7, 10, -5]));


// Task
/*
Requirement:
Write a function named as min() which takes an array as an argument and returns the 
smallest element when invoked.
 
Examples:
min([0, 3, -9,  5, 8])      -> -9
min([-2, 0, -7, 10, -5])    -> -7
min([1, 2, 3, -2])          -> -2
min([-5, -2])               -> -5
*/
function min(arr) {
    if(arr.length === 0) throw Error('This array is empty');
    return arr.reduce((min, num) => {
        if(num < min) return num;
        else return min;
    });
}

console.log(min([0,3,-9, 5, 8]));
console.log(min([-2, 0, -7, 10, -5]));


