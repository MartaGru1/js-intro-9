// Task-1
/* Requirement:
Write a function named repeatingX() which takes a string argument and returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
Examples:
repeatingX("xTechxGlobalx") 	-> false
repeatingX("Hello Xx World") 	-> true
repeatingX("x x") 		-> false
repeatingX("") 		-> false
repeatingX("xxxxx") 		-> true
*/
console.log('\n---------Task-1-------\n');

const repeatingX = (str) => str.toLowerCase().includes('xx')

console.log(repeatingX("xTechxGlobalx")); //false
console.log(repeatingX("Hello Xx World")); //true
console.log(repeatingX("x x")); //false
console.log(repeatingX("")); //false
console.log(repeatingX("xxxxx")); //true


// Task-2 
/*Requirement:
Write a function named isPerfectSquare() which takes a number as an argument and checks if it is a perfect square. It returns true if the number is a perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an integer by itself or as the second exponent of an integer. For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. However, 21 is not a perfect square number because it cannot be expressed as the product of two same integers.
Examples:
isPerfectSquare(25) 	-> true
isPerfectSquare(24) 	-> false
isPerfectSquare(0) 	-> true
isPerfectSquare(1) 	-> true
isPerfectSquare(-1) 	-> false
isPerfectSquare(144) 	-> true
 */
console.log('\n---------Task-2-------\n');

const isPerfectSquare = (num) => Math.sqrt(num) % 1 === 0

console.log(isPerfectSquare(25)); //true
console.log(isPerfectSquare(24)); //false
console.log(isPerfectSquare(0)); //true
console.log(isPerfectSquare(1)); //true
console.log(isPerfectSquare(-1)); //false
console.log(isPerfectSquare(144)); //true


// Task -3
/* Requirement:
Write a function named convertTemperature() which takes a number and a string arguments to be considered as a temperature value and a unit (either Celsius or Fahrenheit) as arguments and converts the temperature to the other unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
Examples:
convertTemperature(100, 'Celsius’) 		-> 212
convertTemperature(32, 'Fahrenheit’) 	-> 0
convertTemperature(0, 'Celsius’) 		-> 32
convertTemperature(212, 'Fahrenheit’) 	-> 100
convertTemperature(-40, 'Celsius’) 		-> -40
convertTemperature(-40, 'Fahrenheit’) 	-> -40
*/
console.log('\n---------Task-3-------\n');

const convertTemperature = (temp, str) => str.toLowerCase() === 'celsius' ? (temp * 9/5) + 32 : (temp - 32) * 5/9

console.log(convertTemperature(100, 'Celsius')); //212
console.log(convertTemperature(32, 'Fahrenheit')); //0
console.log(convertTemperature(0, 'Celsius')); //32
console.log(convertTemperature(212, 'Fahrenheit')); //100
console.log(convertTemperature(-40, 'Celsius')); //-40
console.log(convertTemperature(-40, 'Fahrenheit')); //-40


// Task -4
/* Requirement:
Write a function named sumOfEvenNumbers() which takes an array as an argument and returns the sum of all the even numbers in an array.
Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) 		-> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) 	-> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) 	-> 0
sumOfEvenNumbers( [ ] ) 			-> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) 			-> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) 		-> 150
*/
console.log('\n---------Task-4-------\n');

const sumOfEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0)

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //30
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])); //110
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])); //0
console.log(sumOfEvenNumbers([])); //0
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5])); //6
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50])); //150


// Task-5
 /* Requirement:
Write a function named capsOdds() which takes an array argument and returns the array with all the odd index elements capitalized (converted to uppercase).
Examples:
capsOdds(["Hello", "World"]) 			-> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"]) 		-> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]) 	-> ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
capsOdds([ ]) 				-> [ ]
capsOdds(["John !@#$%", "^&*() Doe"]) 		-> ["John !@#$%", "^&*() DOE"]
 */

console.log('\n---------Task-5-------\n');

const capsOdds = (arr) => arr.map((str, index) => index % 2 !== 0 ? str.toUpperCase() : str)

console.log(capsOdds(["Hello", "World"])); //["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"])); //["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); //["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
console.log(capsOdds([])); //[]
console.log(capsOdds(["John !@#$%", "^&*() Doe"])); //["John !@#$%", "^&*() DOE"]








