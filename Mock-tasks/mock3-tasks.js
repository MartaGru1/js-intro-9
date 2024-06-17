// Task -1

/* Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
 */

console.log('\n---------Swap First and Last Characters-------\n');

const replaceFirstLast = word => { 
    // Checking if the length of the word is less than 2
    if (word.length < 2) {
        return "";
    } else {
        //  then we use slice() method to extract the first and last characters and concatenate them accordingly
        return word.slice (-1) + word.slice(1, -1) + word.slice(0, 1);
    }
}

console.log(replaceFirstLast("")); // ""
console.log(replaceFirstLast("Hello")); // "oellH"
console.log(replaceFirstLast("Tech Global")); // "lech GlobaT"
console.log(replaceFirstLast("A")); // ""
console.log(replaceFirstLast(" A ")); // ""


// Task -2

/* Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World") -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord(" ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""
*/

console.log('\n---------Swap First and Last Words-------\n');

const swapFirstLastWord = (str) => {
    // trim the string to remove any extra spaces before and after the string
        let words = str.trim().split(' ');
    // return empty string if the word length is less than 2
        if(words.length < 2) return "";
    // Swap the first and last words
        return words[words.length - 1] + " " + words.slice(1, -1).join(' ') + " " + words[0];
    }

console.log(swapFirstLastWord("Hello World")); // "World Hello"
console.log(swapFirstLastWord("I like JavaScript")); // "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar")); // "bar bar foo foo"
console.log(swapFirstLastWord("")); // ""
console.log(swapFirstLastWord(" ")); // ""
console.log(swapFirstLastWord("Hello")); // ""
console.log(swapFirstLastWord("Hello ")); // ""


// Task -3

/*Factorial
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
 */

console.log('\n---------Factorial-------\n');

function factorial(num){
    // Initialize the result to 1
    let result = 1;
    // Multiply the result by each number from 2 to the given number
    for (let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}

// Using recursion
const factorial = (n) => n === 0 || n === 1? 1: n * factorial(n-1)


console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1


// Task -4

/* Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""*/

console.log('\n---------Remove Extra Spaces-------\n');

// filter the string to get only words with 3 characters or less and return the length of the filtered array
const removeExtraSpaces = (str) => str.trim().split(' ').filter(s => s.length > 0).join(' ');

//WAY 2:  
    //let result = ''
    // for(s of strAsArr){
    //     if(s !== '') result += `${s} `
    // }
    // return result.slice(0,-1)


console.log(removeExtraSpaces("Hello")); // "Hello"
console.log(removeExtraSpaces(" Hello World ")); // "Hello World"
console.log(removeExtraSpaces(" JavaScript is fun")); // "JavaScript is fun"
console.log(removeExtraSpaces("")); // ""


// Task -5

/*First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1
*/

console.log('\n---------First Duplicate Element-------\n');

function firstDuplicate(arr) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Inner loop starts from i + 1 to avoid comparing an element with itself and to avoid redundant comparisons
        for (let j = i + 1; j < arr.length; j++) {
            // Check if the current element equals any other element in the array
            if (arr[i] === arr[j]) {
                // If yes, return the duplicate element
                return arr[i];
            }
        }
    }
    // If no duplicates found, return -1
    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // 5
console.log(firstDuplicate([5, '5', 3, 7, 4])); // -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // 'abc'
console.log(firstDuplicate([1, 2, 3])); // -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); // -1


// Task -6

/*Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ] */

console.log('\n---------Find All Duplicate Elements-------\n');


function getDuplicates(arr){// [ 3, 7, 10, 0, 3, 10 ] -> 3,10

    // const duplicates = [];
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         if (array[i] === array[j] && !duplicates.includes(array[i])) duplicates.push(array[i]);
    //     }
    // }
////////////////////////////////////////////////////////////////////////////
    ////
    //let duplicates = [];
    //for (let i = 0; i < arr.length; i++) { // 
    //    for (let j = i + 1; j < arr.length; j++) {
    //        if (arr[i] === arr[j]) {
    //            if (!duplicates.includes(arr[i])) {
    //                duplicates.push(arr[i]);
    //            }
    //        }
    //    }
    //    return duplicates; 
    //}

    let container = [];//This array will store unique elements from the input array
    let allDuplicates = [];// This array will store elements that appear more than once

    for(let obj of arr){ //Check if the element is already in the container array and not already in the allDuplicates array
        if(container.includes(obj) && !allDuplicates.includes(obj)) allDuplicates.push(obj)  // If both conditions are true, it means the element is a duplicate
        else container.push(obj) // // If the element is not in the container array, add it to the container
    }
    return allDuplicates;   // Return the array of duplicate elements
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); // [ 0, -7 ]
console.log(getDuplicates([1, 2, 5, 0, 7])); // [ ]
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo'])); // [ 'foo', 'a' ]
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a'])); // [ ]


// Task -7

/* Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string.
Examples:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""
*/

console.log('\n---------Reverse String Words-------\n');

function reverseStringWords(str){
    // Split the string into an array of words and reverse each word and join them back
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Using arrow function - Split the string into an array of words and reverse each word and join them back
const reverseStringWords = (str) => str.split(' ').map(word => word.split('').reverse().join('')).join(' ')

console.log(reverseStringWords("Hello World")); // "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // "olleH"
console.log(reverseStringWords("")); // ""
console.log(reverseStringWords(" ")); // ""


// Task -8

/* Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [0, 0, 0, 0] */

console.log('\n---------Add Two Arrays-------\n');

/* if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    for(let i = 0; i < arr2.length; i++){
        arr1[i] += arr2[i];
    }
    return arr1;

// */

const add = (arr1, arr2) => { // Check if the second array is longer than the first and swap them if necessary
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
// Iterate through the first array and add the corresponding elements from the second array
    return arr1.map((value, i) => value + (arr2[i] || 0))
// If the second array is shorter, use 0 as the default value
}


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]


// Task -9

/* Fizz Buzz
Write a function named fizzBuzz() which takes a number argument and returns an array 
consisting of numbers starting from 1 to given number. However, it will return "Fizz" for the 
numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers 
divided both by 3 and 5.
Examples:
fizzBuzz(3) -> [ 1, 2, 'Fizz' ]
fizzBuzz(5) -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz(10) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
fizzBuzz(15) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14, 'FizzBuzz' ]
fizzBuzz(2) -> [ 1, 2 ]
*/

console.log('\n---------Fizz Buzz-------\n');

/*const fizzBuzz = (num) => {
    // Create an array of numbers from 1 to the given number
    const result = Array.from({length: num}, (_, i) => i + 1);
    // Iterate through the array and replace the numbers with 'Fizz', 'Buzz', or 'FizzBuzz' accordingly
    return result.map(i => i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i);
}*/
function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}
console.log(fizzBuzz(3)); // [ 1, 2, 'Fizz' ]
console.log(fizzBuzz(5)); // [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz(10)); // [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
console.log(fizzBuzz(15)); // [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ]
console.log(fizzBuzz(2)); // [ 1, 2 ]


// Task -10

/* Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("civic") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true */

console.log('\n---------Palindrome-------\n');

// Check if the word is the same when reversed and return true or false accordingly
const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Kayak")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); // true



// Task -11

/* Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"] 
*/
// Filter() keeps only those elements for which condition is true, and indexOf() returns the first index of the element in the array
const removeDuplicates = (arr) => arr.filter((num, index) => arr.indexOf(num) === index);


const removeDuplicates1 = arr => arr.reduce((result, el) => !result.includes(el) ? result.concat(el) : result, []);


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // ["1", "2", "3"]


// Task -12

/*Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false */

console.log('\n---------Prime Number-------\n');

const isPrime = (num) => {
    // Check if the number is less than 2 and return false
        if(num < 2) return false;
    // Check if the number is 2 or 3 and return true
        if(num === 2 || num === 3) return true;
    // Check if the number is even or divisible by 3 and return false
        if(num % 2 === 0 || num % 3 === 0) return false;
    // Iterate through the range of numbers from 5 to the square root of the number
    
        let i = 5;
        while(i < num){
        // Check if the number is divisible by the current number and return false
            if(num % i === 0) return false;
            i+=2;
        }
        return true;
    }
    
    
    const isPrime = (num) => {
    // Check if the number is less than 2 and return false
        if(num < 2) return false;
    // Check if the number is 2 or 3 and return true
        for(let i = 2; i < num; i++){
    // Check if the number is even or divisible by 3 and return false
            if(num % i === 0) return false;
        }
        return true;
    }


console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(29)); // true
console.log(isPrime(-5)); // false
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false


// Task -13

/* Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> [] */

console.log('\n---------Array Factorial-------\n');

const arrFactorial1 = arr => {
    for(let i = 0; i < arr.length; i++){
        let fac = 1; // Initialize fac to 1 for each element
        for(let j = 2; j <= arr[i]; j++){ // Calculate the factorial by multiplying fac by each number from 2 to arr[i]
            fac *= j;
        }

        arr[i] = fac // Replace the original element with its factorial
        }
        return arr; // Return the modified array
}

function arrFactorial(arr) {
    return arr.map(num => {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    });
}


//way 3 (recursion)
const factorial = (num) =>{
   if(num === 0 || num === 1) return 1
   else return num * factorial(num - 1)
}

const arrFactorial3 = (arr) => arr.map(num => factorial(num));


console.log(arrFactorial([1, 2, 3 ,4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1,120]
console.log(arrFactorial([5 , 0, 6])); // [120, 1, 720]
console.log(arrFactorial([])); // []



// Task -14

/* Find Biggest Number
Write a function named findBiggestNumber() which takes a string argument and returns the 
biggest number appears in the string.
Examples:
findBiggestNumber("abc$") -> 0
findBiggestNumber("a1b4c 6#") -> 6
findBiggestNumber("ab110c045d") -> 110
findBiggestNumber("525") -> 525
findBiggestNumber("3 for 10 dollars") -> 10 */

console.log('\n---------Find Biggest Number-------\n');

const findBiggestNumber = (str) => {
    let num = "";
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a digit
        if (!isNaN(str[i])) {
            num += str[i]; // Append digit to num 
        } else {
            // If num is not empty, check if it's the largest number found so far
            if (num !== "") {
                if (parseInt(num) > max) {
                    max = parseInt(num); // Update max if current num is larger
                }
                num = ""; // Reset num for the next number
            }
        }
    } // Final check after loop ends to account for a number at the end of the string
    if (num !== "") {
        if (parseInt(num) > max) {
            max = parseInt(num);
        }
    }
    return max;
}


console.log(findBiggestNumber("abc$")); // 0
console.log(findBiggestNumber("a1b4c 6#")); // 6
console.log(findBiggestNumber("ab110c045d")); // 110
console.log(findBiggestNumber("525")); // 525
console.log(findBiggestNumber("3 for 10 dollars")); // 10


// Task -15

/* Find Sum Numbers
Write a function named findSumNumbers() which takes a string argument and returns sum of 
the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c 6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13 
*/

console.log('\n---------Find Sum Numbers-------\n');

const findSumNumbers = (str) =>  str.split(/\D+/).reduce((sum, numStr) => numStr? sum + Number(numStr): sum, 0);

//WAY 2:
    // let total = 0;
    // let number = '';
    
    // for(char of str){
    //     if(char >= '0' && char <= '9'){
    //         number += char;
    //     } 
    //     else {
    //         total += Number(number)
    //         number = ''
    //     }
    // }

    // if(number) total += Number(number)
    // return total


console.log(findSumNumbers("abc$")); // 0
console.log(findSumNumbers("a1b4c 6#")); // 11
console.log(findSumNumbers("ab110c045d")); // 155
console.log(findSumNumbers("525")); // 525
console.log(findSumNumbers("3 for 10 dollars")); // 13



// Task -16

/* Is Power Of 3
Write a function named isPowerOf3() which takes a number argument and returns true if given 
number is equal to 3 power of the X. Otherwise, return false.
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1) -> true
isPowerOf3(2) -> false
isPowerOf3(3) -> true
isPowerOf3(27) -> true
isPowerOf3(100) -> false
isPowerOf3(81) -> true
isPowerOf3(9) -> true */

console.log('\n---------Is Power Of 3-------\n');

const isPowerOf3 = (num) => {
    for(let i = 0; i < num; i++){
        if(Math.pow(3, i) === num){
            return true;
        }
    }
    return false;
}
// Recursion resolution

const isPowerOf3 = (num) => {
    if(num === 1) return true;
    if(num < 3) return false;
    return isPowerOf3(num / 3);
}

// Bilal resolution

const isPowerOf3 = (num) => {
    for(let i = 0; i > 0; i/= 3){
        if(num === i) return true;
    }
    return false;
}

console.log(isPowerOf3(1)); // true
console.log(isPowerOf3(2)); // false
console.log(isPowerOf3(3)); // true
console.log(isPowerOf3(27)); // true
console.log(isPowerOf3(100)); // false
console.log(isPowerOf3(81)); // true


// Task -17

/* Fibonacci Series 1
Write a function named fibonacciSeries1() which takes a number n argument and returns the 
n series of Fibonacci numbers as an array. 
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3) -> [0, 1, 1]
fibonacciSeries1(5) -> [0, 1, 1, 2, 3]
fibonacciSeries1(7) -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) -> [0]
fibonacciSeries1(2) -> [0, 1] */

console.log('\n---------Fibonacci Series 1-------\n');

const fibonacciSeries1 = (num) =>  {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let result = [0, 1];

    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}

console.log(fibonacciSeries1(3)); // [0, 1, 1]
console.log(fibonacciSeries1(5)); // [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // [0]
console.log(fibonacciSeries1(2)); // [0, 1]


// Task -18

/*Fibonacci Series 2
Write a function named fibonacciSeries2() which takes a number n argument and returns the 
nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2) -> 1
fibonacciSeries2(4) -> 2
fibonacciSeries2(8) -> 13
fibonacciSeries2(9) -> 21
fibonacciSeries2(1) -> 0 */

console.log('\n---------Fibonacci Series 2-------\n');

const fibonacciSeries2 = (num) =>  {
    if (num === 1) return 0;
    if (num === 2) return 1;

    let result = [0, 1];

    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result[result.length-1];
}
//recursive way
// const fibonacciSeries2 = (num) =>  {
//     if(num === 1) return 0;
//     if(num === 2 || num === 3) return 1;
//     else return fibonacciSeries2(num-1) + fibonacciSeries2(num-2)
//     }



console.log(fibonacciSeries2(2)); // 1
console.log(fibonacciSeries2(4)); // 2
console.log(fibonacciSeries2(8)); // 13
console.log(fibonacciSeries2(9)); // 21
console.log(fibonacciSeries2(1)); // 0


// Task -19

/*Find Uniques
Write a function named findUniques() which takes two array of number arguments and returns 
the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.
NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
findUniques([], []) -> []
findUniques([], [1, 2, 3, 2]) -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) -> []
findUniques([-1, -2], [1, 2]) -> [-1, -2, 1, 2] */

console.log('\n---------Find Uniques-------\n');

const findUniques = (arr1, arr2) => {

    return [...new Set([arr1.concat(arr2).filter(i => !(arr1.includes(i) && arr2.includes(i)))])];
}

console.log(findUniques([], [])); // []
console.log(findUniques([], [1, 2, 3, 2])); // [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); // [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); // []
console.log(findUniques([-1, -2], [1, 2])); // [-1, -2, 1, 2]



// Task -20

/* Reverse Number
Write a function named reverseNumber() which takes a number argument and returns it back 
reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371) -> 173
reverseNumber(123) -> 321
reverseNumber(12) -> 21
reverseNumber(0) -> 0
reverseNumber(111) -> 111 */

console.log('\n---------Reverse Number-------\n');

const reverseNumber = num => {
    let reversed = 0;
    for(let i = num; i > 0;  i = Math.floor(i / 10)){
        reversed = (reversed * 10) + (i % 10);
    }
    return reversed;
}


console.log(reverseNumber(371)); // 173
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(12)); // 21
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(111)); // 111


// Task -21 

/*Is Armstrong
Write a function named isArmstrong() which takes a number argument and returns true if 
given number is armstrong, return false otherwise.
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the 
power of the number of digits. In other words, an n-digit number is an Armstrong number if the 
sum of its digits, each raised to the nth power, is equal to the number itself.
• Let's take an example to understand it better. Consider the number 153.
• To determine if 153 is an armstrong number, we need to check if the sum of its 
digits, each raised to the power of the number of digits, equals the original 
number.
• 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
• In this case, the sum of the individual digits raised to the power of 3 (the number 
of digits in 153) is equal to the original number, which means 153 is an armstrong 
number.
Examples:
isArmstrong(153) -> true
isArmstrong(123) -> false
isArmstrong(1634) -> true
isArmstrong(153) -> true
isArmstrong(1111) -> false */

console.log('\n---------Is Armstrong-------\n');

const isArmstrong = num => num.toFixed().split('').reduce((total, i) => total + Math.pow(i,num.toFixed().length), 0) === num

////

const isArmstrong = num => {//153
    const numAsSTR = num.toFixed()//"153"
    const lengthOfNum = numAsSTR.length//3

    let armstring = numAsSTR.split('').reduce((total, i) => total += i ** lengthOfNum ,0)

    return armstring === num
}


console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false
console.log(isArmstrong(1634)); // true
console.log(isArmstrong(153)); // true
console.log(isArmstrong(1111)); // false


// Task -22

/* Is Anagram
Write a function named isAnagram() which takes two string arguments and returns true if the 
given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of 
those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach") -> false
isAnagram("listen", "silent") -> true
isAnagram("astronomer", "moon starer") -> true
isAnagram("CINEMA", "iceman") -> true
isAnagram("123", "1234") - > false */

console.log('\n---------Is Anagram-------\n');

const isAnagram = (str1, str2) => {
    let modifiedStr1 = str1.toLowerCase().replaceAll(' ','').split('').sort().join('')
    let modifiedStr2 = str2.toLowerCase().replaceAll(' ','').split('').sort().join('')

    return modifiedStr1 === modifiedStr2 && str1 !== str2
}

console.log(isAnagram("Apple", "Peach")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("astronomer", "moon starer")); // true
console.log(isAnagram("CINEMA", "iceman")); // true
console.log(isAnagram("123", "1234")); // false


// Task -23

/* Count Palindrome
Write a function named countPalindrome() which takes a string and returns the number 
of palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: 
level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad") -> 2
countPalindrome("See you at noon") -> 1
countPalindrome("Kayak races attracts racecar drivers") -> 2
countPalindrome("") -> 0
countPalindrome("No palindrome here") -> 0 */

console.log('\n---------Count Palindrome-------\n');


const countPalindrome = str => str.toLowerCase().split(' ').reduce((count, i)=>(i && i === i.split('').reverse().join('')) ? count + 1 : count, 0)


console.log(countPalindrome("Mom and Dad")); // 2
console.log(countPalindrome("See you at noon")); // 1
console.log(countPalindrome("Kayak races attracts rececar drivers")); // 2
console.log(countPalindrome("")); // 0
console.log(countPalindrome("No palindrome here")); // 0


// Task -24

/*Can Form String
Write a function named canFormString() which takes two string arguments and returns true if 
the second string can be formed by rearranging the characters of first string. Return false 
otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi") -> false
canFormString("programming", "gaming") -> true
canFormString("halogen", "hello") -> false
canFormString("CONVERSATION", "voices rant on") -> true
canFormString("12", "123") -> false */

console.log('\n---------Can Form String-------\n');


const canFormString = (str1, str2) => {
    let arr1 = str1.toLowerCase().split('')
    let arr2 = str2.toLowerCase().split('').filter(x => x != ' ')

    for(let i = 0; i < arr2.length; i++){
        if(arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]),1)
        else return false;
    }
    return true
}

console.log(canFormString("Hello", "Hi")); // false
console.log(canFormString("programming", "gaming")); // true
console.log(canFormString("halogen", "hello")); // false
console.log(canFormString("CONVERSATION", "voices rant on")); // true
console.log(canFormString("12", "123")); // false


// Task -25

/* Count Occurrence
Write a function named countOccurrence() which takes two string arguments and returns how 
many times that the first string can form the second string.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
countOccurrence("Javascript", "Java") -> 1
countOccurrence("Hello", "World") -> 0
countOccurrence("Can I can a can", "anc") -> 3
countOccurrence("Hello", "l") -> 2
countOccurrence("IT conversations", "IT") -> 2 */

console.log('\n---------Count Occurrence-------\n');

const countOccurrence = (str1, str2) => {
    let arrOfOccurrences = []
  
    for(char of str2){
      arrOfOccurrences.push(str1.split('').filter(c => c.toLowerCase() === char.toLowerCase()).length)
    }
    return arrOfOccurrences.sort()[0]
  }