let num1 = 6;
let num2 = 4;
console.log('The sum is =' (num1 + num2));
console.log('The substraction is = ' + (num1 - num2));
console.log('The multiplication is = ' + num1 * num2);
console.log('The division is = ' + num1 / num2);

// Preffered way -ES6 feature
console.log(`The sum is = ${num1 + num2}`);


// Find AREA AND PERIMETER of RECTANGLE

/*
Assume that you are given a rectangle with width = 5  and heigth = 8 

Calculate the area and perimeter of the rectangle

area = width * heigth
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/
let width = 5;
let height = 8;
console.log('The area = ' + width * height);
console.log('The perimeter = ' + 2*(width + height));



/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week  26 payments
*/

let salary = 120000;
console.log(`The monthly salary is = $${salary}`);
console.log(`The monthly salary is = $${salary / 12}`);
console.log(`The weekly salary is = $${salary/52}`);
console.log(`The bi-weekly salary is = $${salary/26}`);


/*
Find the sum, subtraction, multiplication, division and remainder of these 2 numbers.
*/

let num1 = 6;
let num2 = 4;


console.log('The sum is = ' + (num1 + num2)); //  The sum is = 10
console.log('The subtraction is = ' + (num1 - num2)); // The subtraction is = 2
console.log('The multiplication is = ' + num1 * num2); // The multiplication is = 24
console.log('The division is = ' + num1 / num2); // The division is = 1.5
console.log('The remainder is = ' + num1 % num2);

// Preferred way - ES6 feature
console.log(`The sum is = ${num1 + num2}`); 
console.log(`The subtraction is = ${num1 - num2}`); 
console.log(`The multiplication is = ${num1 * num2}`); 
console.log(`The division is = ${num1 / num2}`); 
console.log(`The remainder is = ${num1 % num2}`); 


/*
Assume that you are given a rectangle with width = 5  and heigth = 8 

Calculate the area and perimeter of the rectangle

area = width * heigth
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/

let width = 5, height = 8;

console.log('The area = ' + width * height);
console.log('The perimeter = ' + 2 * (width + height));


console.log(`The area = ${width * height}`);
console.log(`The perimeter = ${2 * (width + height)}`);

/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week  26 payments
*/

let salary = 120000;

console.log(`Annual average salary = $${salary}`);
console.log(`Monthly salary = $${salary / 12}`);
console.log(`Bi-weekly salary = $${salary / 26}`);
console.log(`Weekly salary = $${salary / 52}`);


//Task-1
let r1 = Math.floor(Math.random() * (50-0+1)) + 0;
console.log(r1);
console.log(`The random number * 5 = ${r1 * 5}`);

//Task-2

let r1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let r2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(r1,r2);
console.log(Math.min(r1, r2));
console.log(Math.max(r1, r2));
console.log (Math.abs(r1 - r2));


console.log(`Min number =${(Math.min(r1, r2))}`) ;
console.log(`Max number = ${(Math.max(r1, r2))}` );
console.log(`Difference number = ${(Math.abs(r1, r2))}`);

//Task - 3

let r1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(`The random number % 10 = ${r1 % 10}`)

//Task - 4
let r1 = Math.floor(Math.random() * (50-0+1)) + 0;
let r2= Math.floor(Math.random() * (50-0+1)) + 0;
let r3 = Math.floor(Math.random() * (50-0+1)) + 0;
let r4 = Math.floor(Math.random() * (50-0+1)) + 0;
let r5 = Math.floor(Math.random() * (50-0+1)) + 0;

console.log (r1, r2, r3, r4, r5);
console.log (r1 * 5, r2 * 4, r3 * 3, r4 * 2, r5 * 1);


// Task - 5

let r1 = Math.floor(Math.random() * (25-1+1)) + 1;
let r2 = Math.floor(Math.random() * (50-26+1)) + 26;
let r3 = Math.floor(Math.random() * (75-51+1)) + 51;
let r4 = Math.floor(Math.random() * (100-76+1)) + 76;

console.log(r1,r2,r3,r4); // Test data


let rMax = (Math.max(r1,r2,r3,r4));
let rMin = (Math.min(r1,r2,r3,r4));
let rDiff = (Math.abs(rMax - rMin));
let rDiff23 = (Math.abs(r2 - r3));

let avg = (r1 + r2 + r3 + r4 / 4); 

console.log(`Difference of max and min = ` + rDiff);
console.log(`Difference of second and third = ` + rDiff23);
console.log(`Average of all = ` + avg);