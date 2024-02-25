/* Task-1
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25
NOTE: expected results should exactly match!!!
*/

let str1 = '5'; str2 = '2';
let sum = Number(str1) + Number(str2);
let product = Number(str1) * Number(str2);
let sub = Number(str1) - Number(str2);
let div = Number(str1) / Number(str2);
let remainder = Number(str1) % Number(str2);
let exponentiation = Number(str1) ** Number(str2);

console.log(`The sum of ${Number(str1)} and ${Number(str2)} is = ${sum}`);
console.log(`The product of ${Number(str1)} and ${Number(str2)} is = ${product}`);
console.log(`The division of ${Number(str1)} and ${Number(str2)} is = ${div}`);
console.log(`The substraction of ${Number(str1)} and ${Number(str2)} is = ${sub}`);
console.log(`The remainder of ${Number(str1)} and ${Number(str2)} is = ${remainder}`);
console.log(`The exponentiation of ${Number(str1)} and ${Number(str2)} is = ${exponentiation}`);


/* Task-2
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values 
and find the average and absolute difference of them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250
NOTE: expected results should exactly 
match!!!
*/
let s1 = "200", s2 = "-50";
let average = ((Number(s1) + Number(s2)) / 2);
let absDifference = Math.abs(s1 - s2);

console.log(`The greatest value is = ${Math.max(s1, s2)}`);
console.log(`The smallest value is = ${Math.min(s1, s2)}`);
console.log(`The average is = ${average}`);
console.log(`The absolute difference is = ${absDifference}`)


/* Task-3
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). 
Then, find the absolute difference of these numbers.
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/

let randomNum1 = Math.ceil(Math.random() * 50);
let randomNum2 = Math.ceil(Math.random() * 50);

let absDiff = Math.abs(randomNum1 - randomNum2);

console.log(`The absolute difference between numbers is = ${absDiff}`);

/* Test data : 45, 32;
The absolute diffrence between number is = 13


/* Task-4
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). 
Then, find the max and min of these numbers.
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
let rNum1 = Math.ceil(Math.random() * 50);
let rNum2 = Math.ceil(Math.random() * 50);
let rNum3 = Math.ceil(Math.random() * 50);
let rNum4 = Math.ceil(Math.random() * 50);
let rNum5 = Math.ceil(Math.random() * 50);

let maxValue = Math.max(rNum1, rNum2, rNum3, rNum4, rNum5);
let minValue = Math.min(rNum1, rNum2, rNum3, rNum4, rNum5);

console.log(`The max value = ${maxValue}`);
console.log(`The min value = ${minValue}`)


/* Task-5
Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/

let ranNumber1 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let ranNumber2 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let ranNumber3 = Math.floor(Math.random() * (100 - 50 + 1) + 50);

console.log(`The number 1 = ${ranNumber1}`);
console.log(`The number 2 = ${ranNumber2}`);
console.log(`The number 3 = ${ranNumber3}`);
console.log(`The sum of the numbers is = ${ranNumber1 + ranNumber2 + ranNumber3}`)


/* Task-6
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
*/

let rNumb1 = Math.ceil(Math.random() * 100);
let rNumb2 = Math.ceil(Math.random() * 100);
let rNumb3 = Math.ceil(Math.random() * 100);

console.log(rNumb1 , rNumb2 , rNumb3); //Test data: 42, 85, 39

console.log(rNumb1 > 25 && rNumb2 > 25 && rNumb3 > 25); // True



/* Task-7
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print them
5. Find the last 3 characters in the name and print them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = "David";
let nameLength = name.length;
let firstThreeChar = name.slice(0, 3);
let lastThreeChar = name.slice(-3);
console.log(`The length of the name is = ${nameLength}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name[name.lenght - 1]}`);
console.log(`The first 3 characters in the name are = ${firstThreeChar}`);
console.log(`The last 3 characters in the name are = ${lastThreeChar}`)


