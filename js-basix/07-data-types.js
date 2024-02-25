// 1. string
let favCoffe = 'Mocha'; // "Mocha" or `Mocha`
let itemName = 'Mouse';

console.log(favCoffe); // Mocha
console.log(itemName); // Mouse

//if number in wrinten in quotes - it becomes a string '123456'

// 2. number
let favCoffePrice = 4.00;
let itemPrice = 16.99;
let age = 25;
let itemQuantity = 5;

// 3. boolean - yes/no; true/false; or eny expression that result in true or false
let b1 = true;
let b2 = false;
let isThereMocha = true;
3 < 5      -> true
5 >= 5     -> true

2*2 ==4 && 'abc' != 'abc'   -> false



// 4. undefined - a variable declared but not assigned with any value;
let favBook;
console.log(favBook); //undefined


// 5. null
let middleName = null;
console.log(midddleName);

// 6. bigint // 9007199254740991
let num1 = 9007199254740992n;
let num2 = BigInt(90071992547409927236453745n)
console.log(num1);


// 7. symbol
let star = Symbol('*')
console.log(star);


// typeof operator
console.log(typeof 5); //number
console.log(typeof 5n); // bigint
console.log(typeof true); // boolean
console.log(typeof (3 == 3 && 5 != 5)); //boolean
console.log(typeof '123'); //string
console.log(typeof '');  //string
console.log(typeof null)  //null - object
console.log(typeof undefined); //undefined