// Task -1
/* Requirement:
Write a function named countPos() which takes an array of numbers as an argument 
and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
 */

console.log('\n---------------Task-1--------------\n');

function countPos(num){
    let count = 0;
    for (let i = 0; i < num.length; i++){
        if (num[i] > 0){
            count++;
        }
    }
    return count;    
}
console.log(countPos([-45, 0, 0, 34, 5, 67])); // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4
console.log(countPos([0, -1, -2, -3])); // 0


//Task -2
/* Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there 
are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/

console.log('\n---------------Task-2--------------\n');

function countA(str){
    let count = 0;
    for (let charA of str){
        if (charA.toLowerCase() === 'a'){
            count++;
        }
    }
    return count;
}
console.log(countA("TechGlobal is a QA bootcamp")); // 4
console.log(countA("QA stands for Quality Assurance")); // 5    
console.log(countA("Cypress")); // 0


//Task -3
/*Requirement: 
Write a function named as countVowels() which takes a string word as an argument 
and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
  */
 console.log('\n---------------Task-3--------------\n');

 function countVowels(word){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLowerCase();
    let countVowels = 0;
    for (let vowelChar of word){
        if (vowels.includes(vowelChar)) {
            countVowels++;
        }
    }
    return countVowels;
 }


console.log(countVowels("Hello")); // 2
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript is fun")); // 5


//Task - 4  
/* Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/
console.log('\n---------------Task-4--------------\n');

function countConsonants(word){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLowerCase();
    let countConsonants = 0;
    for (let consonant of word){
        if (!vowels.includes(consonant)){
            countConsonants++;
        }
    }
    return countConsonants;
}

console.log(countConsonants("Hello")); 		// 3
console.log(countConsonants("Hello World")); 		// 8
console.log(countConsonants("JavaScript is fun")); 		// 12
console.log(countConsonants("")); 			// 0


//Task - 5
/*  Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 	-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 countWords("1 2 3 4") 		-> 4
*/
console.log('\n---------------Task-5--------------\n');

function countWords(str) {
    return str.trim().split(' ').length;
}
console.log(countWords("     Javascript is fun       ")); // 3
console.log(countWords("Cypress is an UI automation tool.    ")); // 6
console.log(countWords("1 2 3 4")); // 4


//Task - 6
/* Requirement:
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1*/

console.log('\n---------------Task-6--------------\n');

function factorial(num){
    let result = 1;
    for (let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1


//Task - 7
/* Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true */

console.log('\n---------------Task-7--------------\n');


function isPalindrome(word){
    word = word.toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Kayak")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab  a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); // true


//Task - 8
/* Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements 
that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0  */

console.log('\n---------------Task-8--------------\n');

function countMultipleWords(arr){
    let count = 0;
    for (let element of arr){
        if (element.trim().includes(' ')){
            count++;
        }
    }
    return count;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); // 4
console.log(countMultipleWords([ ])); // 0


//Task - 9
/* Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of 
the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0  */

console.log('\n---------------Task-9--------------\n'); 

function count3OrLess(word){
    if (word === '') return 0;
    else return word.split(' ').filter(word => word.length <= 3).length;
}

console.log(count3OrLess("Hello")); // 0
console.log(count3OrLess("Hi John")); // 1
console.log(count3OrLess("JavaScript is fun")); // 2
console.log(count3OrLess("My name is John Doe")); // 3
console.log(count3OrLess("")); // 0


//Task - 10
/* Requirement:
Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number.
The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 		-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false */

console.log('\n---------------Task-10--------------\n');

function isPrime(num){
    if (num <= 1) return false;
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(29)); // true
console.log(isPrime(-5)); // false
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false



//Task - 11
/* Requirement:
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]*/

console.log('\n---------------Task-11--------------\n');

const add = (arr1, arr2) => {
    const maxLength = Math.max(arr1.length, arr2.length);
    const newArr1 = [...arr1, ...Array(maxLength - arr1.length).fill(0)];
    const newArr2 = [...arr2, ...Array(maxLength - arr2.length).fill(0)];
    return newArr1.map((num1, i) => num1 + newArr2[i]);
};

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9,  3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]


//Task - 12
/* Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed 
when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" */

console.log('\n---------------Task-12--------------\n');

function removeExtraSpaces(word){
    return word.trim().split(' ').filter(x => x !== '').join(' ');
}

console.log(removeExtraSpaces("Hello")); // "Hello"
console.log(removeExtraSpaces("      Hello    World     ")); // "Hello World"
console.log(removeExtraSpaces("     JavaScript is          fun")); // "JavaScript is fun"
console.log(removeExtraSpaces("")); // ""


//Task - 13
/*Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0*/

console.log('\n---------------Task-13--------------\n');

function findClosestTo10(numbers) {
    const sortedNumbers = numbers.filter(number => number !== 10).sort((a, b) => Math.abs(a - 10) - Math.abs(b - 10) || a - b);
    return sortedNumbers[0];
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); // 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); // 8
console.log(findClosestTo10([0, -1, -2])); // 0


//Task - 14
/* Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true */

console.log('\n---------------Task-14--------------\n');

function isEmailValid(email){
    if (email.includes(' ')) return false;
    if (email.split('@').length !== 2) return false;
    if (email.split('@')[0].length < 2) return false;
    if (email.split('@')[1].split('.').length !== 2) return false;
    if (email.split('@')[1].split('.')[0].length < 2) return false;
    if (email.split('@')[1].split('.')[1].length < 2) return false;
    return true;
}

console.log(isEmailValid("")); // false
console.log(isEmailValid("@gmail.com")); // false
console.log(isEmailValid("johndoe@yahoo")); // false
console.log(isEmailValid("johndoe@.com")); // false
console.log(isEmailValid("a@outlook.com")); // false
console.log(isEmailValid("johndoe@a.com")); // false
console.log(isEmailValid("johndoe@@gmail.com")); // false
console.log(isEmailValid("johndoe@gmail.com")); // true



//Task - 15
/* Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true
if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
 */

console.log('\n---------------Task-15--------------\n');

function isPasswordValid(password) {
    if (password.length < 8 || password.length > 16) {
        return false;
    } 

    for (let char of password) {
        const charAscii = char.charCodeAt(0);
        if (charAscii >= 48 && charAscii <= 57) return hasDigit = true;
        else if (charAscii >= 65 && charAscii <= 90) return hasUppercase = true;
        else if (charAscii >= 97 && charAscii <= 122) return hasLowercase = true;
        else if ("!@#$%^&*()-+_={}[]:;\",.<>?/\\|'".includes(char)) return hasSpecialChar = true;
        //else if ((charCode >= 32 && charCode <= 47) || (charCode >= 58 && charCode <= 64) || (charCode >= 91 && charCode <= 96) || (charCode >= 123 && charCode <= 126))
    }
    return hasDigit && hasUppercase && hasLowercase && hasSpecialChar;
}

console.log(isPasswordValid("")); // false
console.log(isPasswordValid("abcd")); // false
console.log(isPasswordValid("abcd1234")) // true
console.log(isPasswordValid("Abcd1234")); // true
console.log(isPasswordValid("Chicago12345US!#$%")); // false
console.log(isPasswordValid("Abcd1234$")); // true
console.log(isPasswordValid("Chicago123$")); // true
console.log(isPasswordValid("Test1234#")); // true