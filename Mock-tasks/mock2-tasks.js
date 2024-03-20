// Task - Double or Triple the Word 
/* Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns the given word back tripled
 if the string length is even or doubled if the string length is odd when invoked. */

console.log('\n------------------- Double or Triple the Word -------------------\n');

function doubleOrTripleWord(word) {
    // Check if the length of the word is even
    if (word.length % 2 === 0) { 
     // If even, return the word tripled
        return word.repeat(3);
    } else {   // If odd, return the word doubled
        return word.repeat(2);
    }
}   
console.log(doubleOrTripleWord("Tech")); // "TechTechTech"
console.log(doubleOrTripleWord("Apple")); // "AppleApple"
console.log(doubleOrTripleWord("")); // ""
console.log(doubleOrTripleWord(" ")); // " "


// Task - 2 - First and Last Word
/*Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words 
from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word.  */

console.log('\n------------------- First and Last Word -------------------\n');

function firstlastWord(word) {
    if (word === "") { // It first checks if the word is an empty string. If so, it returns an empty string immediately.
        return "";
    } else { //It then concatenates the first word in the array (word.split(" ")[0]) with the last word in the array (word.split(" ")[word.split(" ").length - 1]).
        return word.split(" ")[0] + word.split(" ")[word.split(" ").length - 1];
    }
}
    console.log(firstlastWord("Hello World")); // "HelloWorld"
    console.log(firstlastWord("I like JavaScript")); // "IJavaScript"
    console.log(firstlastWord("Hello")); // "HelloH"
    console.log(firstlastWord("")); // ""
    console.log(firstlastWord(" ")); // ""


// Task - 3  Has Vowel 
/*Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string 
doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases.  */ 

console.log('\n------------------- Has Vowel -------------------\n');

function hasVowel(word) {
     // Define an string containing vowels
    let vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            return true; // Return true if a vowel is found
        }
    }
    return false; // Return false if no vowel is found
}

function hasVowel(str) {
    // Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();   
    // Define an array containing vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Loop through the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            return true; // Return true if a vowel is found
        }
    }
    return false; // Return false if no vowel is found
}

console.log(hasVowel("")); // false
console.log(hasVowel("Javascript")); // true
console.log(hasVowel("Tech Global")); // true
console.log(hasVowel("1234")); // false
console.log(hasVowel("ABC")); // true


// Task - 4  Start Vowel
/* Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, 
and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U  */

function startVowel(word) {
    let firstChar = word.toLowerCase()[0];
    return ['a','e','i','o','u'].includes(firstChar);
}

function startVowel(str){
    return 'aeiouAEIOU'.includes(str[0])
    
}


function startVowel(word) {
    // Check if the word is empty or whitespace
    if (word.trim() === '') {
        return false;
    }
    // Get the first character of the word (ignoring case)
    const firstChar = word.charAt(0).toLowerCase();
    // Check if the first character is a vowel
    return ['a', 'e', 'i', 'o', 'u'].includes(firstChar);
}

console.log(startVowel("Hello")); // false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange")); // true
console.log(startVowel("")); // false
console.log(startVowel(" ")); // false
console.log(startVowel("123")); // false


//Task - 5 - Average of Edges 

/* Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers.  */

console.log('\n------------------- Average of Edges -------------------\n');

function averageOfEdges(num1, num2, num3) {
// Find the minimum and maximum of the three numbers
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
  // Calculate the average of the minimum and maximum
    return (min + max) / 2;
}

console.log(averageOfEdges(0, 0, 0)); // 0
console.log(averageOfEdges(0, 0, 6)); // 3
console.log(averageOfEdges(-2, -2, 10)); // 4
console.log(averageOfEdges(-3, 15, -3)); // 6
console.log(averageOfEdges(10, 13, 20)); // 15


// Task - 6 - Swap First and Last Characters 
/*Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. */

console.log('\n------------------- Swap First and Last Characters -------------------\n');

function replaceFirstLast(word) {
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
console.log(replaceFirstLast("A")); // "A"
console.log(replaceFirstLast("    A    ")); // ""


// Task - 7 - Swap First and Last Four Characters 
/* Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and
 last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters.  */

console.log('\n------------------- Swap First and Last Four Characters -------------------\n');

function swap4(str){
 // Return empty string if the word length is less than 8
    if(str.length < 8) return "";
// Find the first 4 characters, middle and last 4 characters of the word
    let first4 = str.slice(0, 4);
    let middle = str.slice(4 , -4);
    let last4 = str.slice(-4); 
  // Swap the first and last 4 characters
    return last4 + middle + first4
}

console.log(swap4("abc")); // ""
console.log(swap4("JavaScript")); // "riptScJava"
console.log(swap4("TechGlobal")); // "obalGlTech"
console.log(swap4("")); // ""
console.log(swap4("    ")); // ""
console.log(swap4("Apple")); // ""


// Task 8 - Swap First and Last Words

/* Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. */

console.log('\n------------------- Swap First and Last Words -------------------\n');

const swapFirstLastWord = (str) => {
// trim the string to remove any extra spaces before and after the string
    let words = str.trim().split(' ');
// return empty string if the word length is less than 2
    if(words.length < 2) return "";
// Swap the first and last words
    return words[words.length - 1] + " " + words.slice(1, -1).join(' ') + " " + words[0];
}

/*const swapFirstLastWord = (str) => {
    // trim the string to remove any extra spaces before and after the string
        str = str.trim();
    
        if(str.includes(' ')){
            let firstWord = str.slice(0, str.indexOf(' '));
            let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
            let lastWord = str.slice(str.lastIndexOf(' ') + 1);
    
            return lastWord + middle + firstWord
        }
    
        return "";
    
    } */
    

console.log(swapFirstLastWord("Hello World")); // "World Hello"
console.log(swapFirstLastWord("I like JavaScript")); // "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar")); // "bar bar foo foo"
console.log(swapFirstLastWord("")); // ""
console.log(swapFirstLastWord(" ")); // ""
console.log(swapFirstLastWord("Hello")); // ""
console.log(swapFirstLastWord("Hello   ")); // ""


// Task 9 - Count Positive Numbers

/*Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive when invoked. */

console.log('\n------------------- Count Positive Numbers -------------------\n');

function countPos(arr){
    let count = 0;
    for (num of arr){
        if (num > 0) count++;
    }
    return count;    
}
//
function countPos(arr){
// filter the array to get only positive numbers and return the length of the filtered array
    return arr.filter(num => num > 0).length
}
//
const countPos = (arr) =>  arr.filter(num => num > 0).length

console.log(countPos([-45, 0, 0, 34, 5, 67])); // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4
console.log(countPos([0, -1, -2, -3])); // 0


// Task - 10 - Find Even Numbers
/*Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. */

console.log('\n------------------- Find Even Numbers -------------------\n');

function getEvens(num1, num2) {
    let result = [];
    let greaterNumber = Math.max(num1, num2);
    let smallerNumber = Math.min(num1, num2);
    for(let i = smallerNumber; i <= greaterNumber; i++){
     // Check if the current number is even
        if(i % 2 === 0){ // If even, push it to the evens array
            result.push(i);
        }
    }
    return result;
}

console.log(getEvens(2, 7)); // [ 2, 4, 6 ]
console.log(getEvens(17, 5)); // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4)); // [ 4 ]
console.log(getEvens(3, 3)); // []


// Task - 11 - Find Numbers Divisible By 5

/* Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.  */

console.log('\n------------------- Find Numbers Divisible By 5 -------------------\n');

function getMultipleOf5(num1, num2) {
    let result = [];
// Find the minimum and maximum of the two numbers
    let greaterNumber = Math.max(num1, num2);
    let smallerNumber = Math.min(num1, num2);
// Iterate through the range of numbers from min to max (inclusive)
    for (let i = greaterNumber; i >= smallerNumber; i--) {
// Check if the current number is divisible by 5
        if (i % 5 === 0) {
// If divisible by 5, push it to the result array
            result.push(i);
        }
    }
    return result;
}
//
function getMultipleOf5(num1, num2) {

    let divisibleBy5 = [];
// Find the minimum and maximum of the two numbers and iterate through the range of numbers from min to max (inclusive)
    for(i = Math.max(num1, num2); i >= Math.min(num1, num2); i--){
    // Check if the current number is divisible by 5 and push it to the array
        if(i % 5 === 0) divisibleBy5.push(i);
    };

    return divisibleBy5;
};

console.log(getMultipleOf5(3, 17)); // [ 5, 10, 15]
console.log(getMultipleOf5(23, 5)); // [ 20, 15, 10, 5]
console.log(getMultipleOf5(5, 5)); // [ 5]
console.log(getMultipleOf5(2, 4)); // []


// Task - 12 - Count Negative Numbers 
/*Write a function named countNeg() which takes an array of numbers as an argument and returns how many elements are negative when invoked.*/

console.log('\n------------------- Count Negative Numbers -------------------\n');

function countNeg(arr) {
    // Initialize a variable to store the count of negative numbers
    let count = 0;
    // Iterate through the array and increment the count for each negative number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
//
function countNeg(arr){
// filter the array to get only negative numbers and return the length of the filtered array
    return arr.filter(num => num < 0).length
}

console.log(countNeg([-45, 0, 0, 34, 5, 67])); // 1
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); // 2
console.log(countNeg([0, -1, -2, -3])); // 3


// Task - 13 - Count A
/* Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  */

console.log('\n------------------- Count A -------------------\n');

function countA(str){
 // Initialize a variable to store the count of 'a's
    let count = 0;
    for (let charA of str) {
     // Iterate through the characters of the string and increment the count if 'a' is found
        if (charA.toLowerCase() === 'a'){
            count++;
        }
    }
    return count;
}
// filter the string to get only 'a's and return the length of the filtered array
const countA = (str) => str.split('').filter(letter => letter.toLowerCase() === 'a').length


console.log(countA("TechGlobal is a QA bootcamp")); // 4
console.log(countA("QA stands for Quality Assurance")); // 5
console.log(countA("Cypress")); // 0


// Task - 14 - Count Words
/* Write a function named countWords() which takes a string argument and returns the totalcount of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. */

console.log('\n------------------- Count Words -------------------\n');

function countWords(str){
    // trim the string to remove any extra spaces before and after the string
    return str.trim().split(' ').length;
}

const countWords2 = (str) => str.trim().split(' ').length

console.log(countWords("     Javascript is fun     ")); // 3
console.log(countWords("Cypress is an UI automation tool.    ")); // 6
console.log(countWords("1 2 3 4")); // 4



// Task - 15 - Factorial

/*Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. */
console.log('\n------------------- Factorial -------------------\n');

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


// Task - 16 - Count 3 or Less

/* Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked */
console.log('\n------------------- Count 3 or Less -------------------\n');

function count3OrLess(word){
    // Return 0 if the word is an empty string
    if (word === '') return 0;
    // Split the string into an array of words and filter the words that have 3 characters or less
    else return word.split(' ').filter(word => word.length <= 3).length;
}

// filter the string to get only words with 3 characters or less and return the length of the filtered array
const count3OrLess = (str) => str.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length

consoleconsole.log(count3OrLess("Hello")); // 1      
consoleconsole.log(count3OrLess("Hi John") ); // 1      
consoleconsole.log(count3OrLess("JavaScript is fun")) // 3     
consoleconsole.log(count3OrLess("My name is John Doe")) // 3    
consoleconsole.log(count3OrLess("")) // 0


// Task - 17 - Remove Extra Spaces

/* Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. */
console.log('\n------------------- Remove Extra Spaces -------------------\n');

function removeExtraSpaces(word){
    // Split the string into an array of words and filter the words that have 3 characters or less
    return word.split(' ').filter(word => word.length > 0).join(' ');
}

// filter the string to get only words with 3 characters or less and return the length of the filtered array
const removeExtraSpaces = (str) => str.split(' ').filter(word => word.length > 0).join(' ')

console.log(emoveExtraSpaces("Hello")); // "Hello"
console.log(removeExtraSpaces("   Hello    World  ")  ); // "Hello World"
console.log(removeExtraSpaces("     JavaScript is     fun   ") ); //    "JavaScript is fun"
console.log("")


// Task - 18 - Middle Number 
 /*Write a function named middleInt() which takes three number arguments and return the middle number.*/

console.log('\n------------------- Middle Number -------------------\n');

function middleInt(num1, num2, num3){
     // Check if num1 is the middle number
    if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3){
        return num1;
    // Check if num2 is the middle number
    } else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3){
        return num2;
    // Otherwise, num3 is the middle number
    } else {
        return num3;
    }
}

// Using sort method - sort the numbers in ascending order and return the middle number
const middleInt = (a, b, c) => [a, b, c].sort((a, b) => a - b)[1]


console.log(middleInt(1, 2, 2)); // 2
console.log(middleInt(5, 5, 8)); // 5
console.log(middleInt(5, 3, 5)); // 5
console.log(middleInt(1, 1, 1)); // 1
console.log(middleInt(-1, 25, 10)); // 10


// Task - 19 - First Duplicate Element

/* Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array.
For two elements to be considered as duplicated, value and data types of the elements must be same. */

console.log('\n------------------- First Duplicate Element -------------------\n');

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

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); // 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); // 5
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ])); // -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])); // 'abc'
console.log(firstDuplicate([ 1, 2, 3])); // -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ])); // -1


// Task - 20 - Find All Duplicate Elements
/* Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.*/

console.log('\n------------------- Find All Duplicate Elements -------------------\n');
/* This JavaScript function, `getDuplicates`, takes an array `arr` as input and returns an array containing all the duplicate elements found in the input array.

Here's how it works:

1. It initializes an empty array called `duplicates` to store the duplicate elements.
2. It iterates through each element of the input array using a nested loop.
   - The outer loop runs from the first element (`i = 0`) to the second last element of the array (`i < arr.length`).
   - The inner loop starts from the element next to the current element of the outer loop (`j = i + 1`) and runs until the last element of the array (`j < arr.length`).
3. Inside the nested loops, it checks if the current element at index `i` is equal to any subsequent element at index `j`.
4. If a duplicate is found (i.e., `arr[i] === arr[j]`), it checks whether the duplicate element is already present in the `duplicates` array using the `includes` method.
5. If the duplicate element is not already in the `duplicates` array, it adds it to the array using the `push` method.
6. Finally, it returns the `duplicates` array containing all the duplicate elements found in the input array.

This function efficiently identifies and collects duplicate elements in the input array, ensuring that each duplicate is added only once to the output array.*/
function getDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    return duplicates;
}  

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); // [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])); // [ ]
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])); // [ 'foo', 'a' ]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])); // [ ]


// Task - 21 - Count Vowels
/* Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i */

console.log('\n------------------- Count Vowels -------------------\n');

const countVowels = (word) => {
    // Initialize a counter for vowels
    let vowelCounter = 0;
     // Define an array containing vowel letters
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
// iterate through the word and increment the counter for each vowel
    for(letter of word){ // Check if the current character is a vowel and increment the counter 
        if(vowels.includes(letter)) vowelCounter++;
    }
    return vowelCounter;
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels("")); // 0



// Task - 22 - Reverse String Words
/*Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string. */

console.log('\n------------------- Reverse String Words -------------------\n');

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


// Task - 23 - Count Consonants
/* Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter. */

console.log('\n------------------- Count Consonants -------------------\n');

const countConsonants = (word) => {
    // Initialize a counter for consonants
    let counter = 0;
    // Define an array containing vowel letters
    const vowels = ['a', 'e', 'i', 'o', 'u']
// iterate through the word and increment the counter for each consonant
    for(letter of word){ 
        letter = letter.toLowerCase()
        if(!(vowels.includes(letter))) counter++;
    }
    return counter;
}

console.log(countConsonants("Hello")); // 3
console.log(countConsonants("Hello World")); // 8
console.log(countConsonants("JavaScript is fun")); // 12
console.log(countConsonants("")); // 0


// Task - 24 - Count Multiple Words

/* Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element. */

console.log('\n------------------- Count Multiple Words -------------------\n');

function countMultipleWords(arr){ 
    // filter the array to get only elements with multiple words and return the length of the filtered array
    return arr.filter(word => word.trim().split(' ').length > 1).length;
}

//const countMultipleWords = (arr) => arr.filter(word => word.trim().split(' ').length > 1).length;

console.log(countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])); // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", " foobar " ])); // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ])); // 4
console.log(countMultipleWords([ ])); // 0


// Task - 25 - FizzBuzz
/* Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers. */

console.log('\n------------------- FizzBuzz -------------------\n');

function fizzBuzz(num1, num2) {
    let arr = [];
// Iterate through the range of numbers from min to max (inclusive)
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
    // Check if the current number is divisible by 3 and 5 and push the corresponding value to the array
        if(i % 5 === 0 && i % 3 === 0) arr.push('FizzBuzz');
    // Check if the current number is divisible by 5 and push the corresponding value to the array
        else if(i % 5 === 0) arr.push('Buzz');
    // Check if the current number is divisible by 3 and push the corresponding value to the array
        else if(i % 3 === 0) arr.push('Fizz');
    // Otherwise, push the number to the array
        else arr.push(i);
    };

    return arr.join(" | ");
};

console.log(fizzBuzz(13, 18)); // "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)); // "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5)); // "Buzz"
console.log(fizzBuzz(9, 6)); // "Fizz | 7 | 8 | Fizz"


// Task - 26 -  Palindrome
/* Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity */

console.log('\n------------------- Palindrome -------------------\n');

function isPalindrome(word){
// Check if the word is the same when reversed and return true or false accordingly
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Kayak")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); // true


// Task - 27 - Prime Number
/* Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.*/

console.log('\n------------------- Prime Number -------------------\n');

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


// Task - 28 - Add Two Arrays
/* Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different. */

console.log('\n------------------- Add Two Arrays -------------------\n');

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


// Task - 29 - No Elements With A

/*Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###".  */

console.log('\n------------------- No Elements With A -------------------\n');

function noA(arr){
// Iterate through the array and replace the elements starting with 'a' or 'A' with '###'
    return arr.map(word => word[0].toLowerCase() === 'a' ? '###' : word);
}

const noA = (arr) => arr.map(word => word[0].toLowerCase() === 'a' ? '###' : word);

console.log(noA(["javascript", "hello", "123", "xyz"])); // ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); // ["###", "###", "###", "###", "###"]


// Task - 30 - No Elements Divisible By 3 and 5
/*Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101 */

console.log(`\n--------------No Elements Divisible be 3 and 5 ----------------\n`);

/* function no3and5(arr){
    return arr.map(num => {
        if(num % 3 === 0 && num % 5 === 0) return 101;
        else if(num % 3 === 0) return 100;
        else if(num % 5 === 0) return 99;
        else return num;
    });
}
*/
// Using arrow function - Iterate through the array and replace the elements based on the conditions
const no3and5 = (arr) => arr.map(num => {
    // Check if the number is divisible by 3 and 5 and replace it with 101
    if(num % 3 === 0 && num % 5 === 0) return 101;
    // Check if the number is divisible by 3 and replace it with 100
    else if(num % 3 === 0) return 100;
    // Check if the number is divisible by 5 and replace it with 99
    else if(num % 5 === 0) return 99;
    // Otherwise, return the number as is
    else return num;
});


console.log(no3and5([7, 4, 11, 23, 17])); // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); // [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); // [99, 11, 100, 13, 14, 101]


// Task - 31 - No Elements Equals 13
/* Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s.*/

console.log('\n------------------- No Elements Equals 13 -------------------\n');

/* Using arrow function - Iterate through the array and replace the elements equal to 13 with 
array map method - check if the number is 13 and replace it with 0, otherwise return the number as it is
0 and return the new array */

const no13 = (arr) => arr.map(num => num === 13 ? 0 : num);

console.log(no13([1, 2, 3 ,4])); // [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); // [0, 0, 0, 0, 0]
console.log(no13([])); // []


// Task - 32 - Remove Duplicates
/* Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed. */

console.log('\n------------------- Remove Duplicates -------------------\n');

// Filter the array to keep only the elements that appear the first time
/*The filter() method is used to create a new array with elements that pass the test implemented by the provided function.
For each element in the array, indexOf() is used to find its first occurrence in the array. If the index of the current element
is equal to the index returned by indexOf(), it means this is the first occurrence of this element in the array,
 so it is included in the filtered array.
This effectively filters out the duplicates, leaving only the first occurrence of each element in the resulting array.*/ 

const removeDuplicates = (arr) => arr.filter((num, index) => arr.indexOf(num) === index);

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // ["1", "2", "3"]


// Task - 33 - No Digits

/*Write a function named noDigit() which takes a string argument and returns a new string with 
all digits removed from the original string.*/

console.log('\n------------------- No Digits -------------------\n');

function noDigit(str) {
    // Convert the string to an array of characters, then filter out digits
    return str.split('').filter(char => isNaN(parseInt(char))).join('');
}

function noDigit(str) {
    let result = '';
    for (let char of str) {
        // Check if the character is not a digit
        if (isNaN(parseInt(char, 10))) {
            result += char; // Append non-digit characters to the result string
        }
    }
    return result;
}


const noDigit = (str) => str.split('').filter(char => isNaN(parseInt(char))).join('');

console.log(noDigit("")); // ""
console.log(noDigit("Javascript")); // "Javascript"
console.log(noDigit("123Hello")); // "Hello"
console.log(noDigit("123Hello World149")); // "Hello World"
console.log(noDigit("123Tech456Global149")); // "TechGlobal"


// Task - 34 - No Vowels

/*Write a function named noVowel() which takes a string argument and returns a new string 
with all vowels removed from the original string.
Examples:
noVowel("TechGlobal") -> "TchGlbl"
noVowel("AEOxyz") -> "xyz"
noVowel("Javascript") -> "Jvscrpt"
noVowel("") -> ""
noVowel("125$") -> "125$"  */

console.log('\n------------------- No Vowels -------------------\n');

function noVowel(str) { // Convert the string to an array of characters, then filter out vowels
    return str.split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');
}

const noVowel = (str) => str.split('').filter(char => !'aeiouAEIOU'.includes(char)).join('');

console.log(noVowel("TechGlobal")); // "TchGlbl"
console.log(noVowel("AEOxyz")); // "xyz"
console.log(noVowel("Javascript")); // "Jvscrpt"
console.log(noVowel("")); // ""
console.log(noVowel("125$")); // "125$"


// Task - 35 - Sum Of Digits
/* Write a function named sumOfDigits() which takes a string argument and returns sum of all 
digits from the original string.  */

console.log('\n------------------- Sum Of Digits -------------------\n');

function sumOfDigits(str) {
    let sum = 0;
    for (let char of str) {
        // Check if the current character is a digit
        if (!isNaN(parseInt(char))) {
            sum += parseInt(char); // Convert the digit to a number and add it to the sum
        }
    }
    return sum;
}

//const sumOfDigits = (str) => str.split('').filter(char => !isNaN(parseInt(char))).reduce((acc, num) => acc + parseInt(num), 0);

console.log(sumOfDigits("Javascript")); // 0
console.log(sumOfDigits("John’s age is 29")); // 11
console.log(sumOfDigits("$125.0")); // 8
console.log(sumOfDigits("")); // 0


// Task - 36 - Array Factorial
/* Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials.*/

console.log('\n------------------- Array Factorial -------------------\n');

function arrFactorial(arr) {
    return arr.map(num => {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    });
}

const arrFactorial = (arr) => arr.map(num => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
});


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Factorial of 0 and 1 is 1
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i; // Multiply result by each number from 2 to num
        }
        return result;
    }
}

function arrFactorial(arr) {
    return arr.map(num => factorial(num));
}


console.log(arrFactorial([1, 2, 3 ,4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1,120]
console.log(arrFactorial([5 , 0, 6])); // [120, 1, 720]
console.log(arrFactorial([])); // []
