// Task - 1
/* Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).*/
console.log('\n ------------ TASK-1--------------------\n');

for(let i = 1; i<=100; i++){
    if (i % 7 === 0) console.log(i);
}

// Task-2
/* Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive). */
console.log('\n ------------ TASK-2--------------------\n');


for(let i = 1; i<=50; i++){
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

// Task-3
/* Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive). */
console.log('\n ------------ TASK-3--------------------\n');


for(let i = 100; i >= 50; i--){
    if (i % 5 === 0) console.log(i);
}

// Task-4
/* Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive). */
console.log('\n ------------ TASK-4--------------------\n');


 for (let i = 0; i <= 7; i++) {
    square = i * i;
    console.log('The square of ' + i + ' is = ' + square);
}


// Task-5
/* Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10 */
console.log('\n ------------ TASK-5--------------------\n');

let sum = 0;
for ( let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum)


// Task-6
/* Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1. */
console.log('\n ------------ TASK-6--------------------\n');

let rNum = Math.floor(Math.random() * 10) + 1;
    
let result = 1;

for (let i = 1; i<= rNum; i++){
    result *= i;
}

console.log(result);

// Bilal resolution
let randomNum = Math.floor((Math.random() * 10) + 1);
let factorial = randomNum;


for (let i = randomNum - 1; i > 1; i--) {
    factorial *= (i);
}
if(factorial === 0) factorial = 1;
console.log(factorial);


// Task-7
/* Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.

Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s to generate it. */
console.log('\n ------------ TASK-7--------------------\n');


let num1;
let attempts = 1;

do { num1 = Math.floor(Math.random() * 100) + 1;
    attempts++;
} while (num1 % 5 !== 0);

console.log(`The random number is ${num1} and it took ${attempts} attempt/s to generate it.`)

// Bilal resolution

let randomNumber1= Math.floor((Math.random() * 100) + 1);
let attempts = 0;

//you can also use Do-While
while (randomNumber1 % 5 !== 0) {
    randomNumber1 = Math.floor((Math.random() * 100) + 1);
    attempts++;
}

console.log(`The random number is ${randomNumber1} and it took ${attempts}
attempt/s to generate it.`);



// Task-8
/* -Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
 */
console.log('\n ------------ TASK-8--------------------\n');

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(countries);
console.log(countries.sort());


// Task-9
/* -Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true */
console.log('\n ------------ TASK-9--------------------\n');

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(cartoonDogs);

console.log(cartoonDogs.includes('Pluto'));

// Task-10
/* -Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false */
console.log('\n ------------ TASK-10--------------------\n');

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

const sortedCartoonCats = cartoonCats.sort();
console.log(sortedCartoonCats);

const hasBothCats = sortedCartoonCats.includes('Garfield') && sortedCartoonCats.includes('Felix');
console.log(hasBothCats);


// Task-11
/* -Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/
console.log('\n ------------ TASK-11--------------------\n');

const numArray = [10.5, 20.75, 70, 80, 15.75];
console.log(numArray);

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}

//Bilal resolution

const numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);

console.log("\n--------------ForI---------------\n");

for (let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}

console.log("\n--------------ForOf---------------\n");

for(let number of numbers){
    console.log(number);
}

console.log("\n--------------ForEach---------------\n");

numbers.forEach((number) => console.log(number))


// Task - 12 
/* -Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 */
console.log('\n ------------ TASK-12--------------------\n');

const arrObject = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(arrObject);

let startsWithBP = 0;
let containsBookPen = 0;

for (let i = 0; i < arrObject.length; i++) {
    let obj = arrObject[i].toLowerCase();
    if (obj.startsWith('b') || obj.startsWith('p') ) {
        startsWithBP++;
    }
    if (obj.toLowerCase().includes('book') || obj.toLowerCase().includes('pen')) {
        containsBookPen++;
    }
}

console.log("Elements starting with 'B' or 'P' =", startsWithBP);
console.log("Elements having 'book' or 'pen' =", containsBookPen);

// Bilal resolution

const objs = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let countBorP = 0;
let countBookorPen = 0;

for (let obj of objs) {
    obj = obj.toLowerCase();
    if (obj.startsWith('b') || obj.startsWith('p')) countBorP++;
    if (obj.includes('book') || obj.includes('pen')) countBookorPen++;
}

console.log(objs);
console.log(`Elements starting with B or P = ${countBorP}`);
console.log(`Elements starting with book or pen = ${countBookorPen}`);



// Task - 13
/* Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2 */
console.log('\n ------------ TASK-13--------------------\n');

const arrNum = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(arrNum);

let moreThan10 = 0;
let lessThan10 = 0;
let equalTo10 = 0;

for (let num of arrNum) {
    if (num > 10) {
        moreThan10++;
    } else if (num < 10) {
        lessThan10++;
    } else {
        equalTo10++;
    }
}

console.log("Elements that are more than 10 =", moreThan10);
console.log("Elements that are less than 10 =", lessThan10);
console.log("Elements that are 10 =", equalTo10);

// Task -14
/* Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ] */
console.log('\n ------------ TASK-14--------------------\n');

let firstArray = [5, 8, 13, 1, 2];
let secondArray = [9, 3, 67, 1, 0];
let thirdArray = [];

for (let i = 0; i < firstArray.length; i++) {
    thirdArray.push(Math.max(firstArray[i], secondArray[i]));
}

console.log("1st array is =", firstArray);
console.log("2nd array is =", secondArray);
console.log("3rd array is =", thirdArray);



// Task - 15 
/* Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1 */
console.log('\n ------------ TASK-15--------------------\n');

function firstDuplicate(arr) {
    for (const num of arr) {
        if (arr.indexOf(num) !== arr.lastIndexOf(num)) {
            return num;
        }
    }
    return -1;
}

// Bilal resolution
/*function firstDuplicate(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return array[i];
        }
    }
    return -1;
};
*/

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])) ;       // 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));        // 7
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));          // -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));  // 'abc'
console.log(firstDuplicate([ 1, 2, 3]));                    // -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]));  // -1 


// Task - 16

/* Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ] */
console.log('\n ------------ TASK-16--------------------\n');

function getDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}   


// Bilal resolution

const container = [];
const duplicates = [];

for(let obj of array){
    if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
    else container.push(obj)
}
return duplicates;

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));  // [ 0, -7 ]   
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));                // [ ]
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));  // [ 'foo', 'a' ]    
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));  // [ ]


// Task - 17 
/* Requirement:
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> "" */
console.log('\n ------------ TASK-17--------------------\n');

function reverseStringWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

console.log(reverseStringWords("Hello World"));        // "olleH dlroW"
console.log(reverseStringWords("I like JavaScript"));  // "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello"));             // "olleH"
console.log(reverseStringWords(""));                  // ""
console.log(reverseStringWords("    "));              // ""



// Bilal resolution

function reverseStringWords(str) {

    let strAsArr = str.trim().split(" ");

    for(let i = 0; i < strAsArr.length; i++) {
        strAsArr[i] = strAsArr[i].split("").reverse().join("");
    }

    return strAsArr.join(" ");
}

console.log(reverseStringWords("Hello World"));


// Task - 18 
/*Requirement:
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ] */
console.log('\n ------------ TASK-18--------------------\n');

function getEvens(num1, num2) {
    if(num1 > num2) { [num1, num2] = [num2, num1];
    }
    let evens = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }
    return evens;
}

// Bilal resolution

function getEvens(num1, num2){

    let evens = [];
    let greaterNumber = Math.min(num1, num2);
    let smallerNumber = Math.max(num1, num2)

    for(let i = smallerNumber; i <= greaterNumber; i++){
        if(i % 2 === 0) evens.push(i);
    };

    return evens;
};


console.log(getEvens(2, 7));    // [ 2, 4, 6 ]
console.log(getEvens(17, 5));   // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4));    // [ 4 ]
console.log(getEvens(3, 3));    // [ ] 


// Task - 19 
/*Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ] */
console.log('\n ------------ TASK-19--------------------\n');

function getMultipleOf5(num1, num2) {
    if(num1 < num2) { [num1, num2] = [num2, num1];
    }
    let multiplesOf5 = [];
    for (let i = num1; i >= num2; i--) {
        if (i % 5 === 0) {
            multiplesOf5.push(i);
        }
    }
    return multiplesOf5;
}

//Bilal resolution

function getMultipleOf5(num1, num2) {

    let divisibleBy5 = [];

    for(i = Math.max(num1, num2); i >= Math.min(num1, num2); i--){
        if(i % 5 === 0) divisibleBy5.push(i);
    };

    return divisibleBy5;
};


console.log(getMultipleOf5(3, 17));    // [5, 10, 15]
console.log(getMultipleOf5(23, 5));    // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5));     // [ 5 ]
console.log(getMultipleOf5(2, 4));     // [ ]



// Task - 20 
/* Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz" */
console.log('\n ------------ TASK-20--------------------\n');

function fizzBuzz(num1, num2) {
    if(num1 > num2) { [num1, num2] = [num2, num1];
    }
    let result = '';
    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz ';
        } else if (i % 3 === 0) {
            result += 'Fizz ';
        } else if (i % 5 === 0) {
            result += 'Buzz ';
        } else if (i === num2) {
            result += i;
        }
        else {
            result += i + ' | ';
        }
    }
    return result;
}



// Bilal resolution correct

function fizzBuzz(num1, num2) {

    let arr = [];

    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 5 === 0 && i % 3 === 0) arr.push('FizzBuzz');
        else if(i % 5 === 0) arr.push('Buzz');
        else if(i % 3 === 0) arr.push('Fizz');
        else arr.push(i);
    };

    return arr.join(" | ");
};


console.log(fizzBuzz(13, 18));    // "13 | 14 | FizzBuzz | 16 | 17 | Fizz"  
console.log(fizzBuzz(12, 5));     // "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5));      // "Buzz" 
console.log(fizzBuzz(9, 6));      // "Fizz | 7 | 8 | Fizz" 