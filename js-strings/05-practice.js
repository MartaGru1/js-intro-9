let p1 = 'Hello'.toUpperCase().concat('World').includes('o World');

console.log(p1); //false


let p2 = Math.pow(Math.abs(Math.max(5, 3)- Math.min(10, 5)), 3);

console.log(p2);

let p3 = 'TechGlobal'.slice(3, 7).toUpperCase().includes('hG', 3);
console.log(p3); //false


let p4 = 'JavaScript'.startsWith('Java').endsWith('Script'); // Error

let p5 = 'Apple'.replaceAll('p', '$').indexOf('$$') >= 0;


console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false)); // false
console.log((!true && !false) || 5 * 2 === true * 10 ); // true
console.log("3" * "5" >= 15 && true == 1 && "   " == false && "" === 0);    // false
console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5));   // false
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1");   // true 
console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange"));   // fasle
console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false));   // true
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false));   // true
console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat"));   // true
console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true));   // false
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10));   // false
console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true));   // false
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true)) ;   // true
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0));   // true
console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1));   // true
 

let n1 = Math.floor(Math.random()*10);
let n2 = Math.floor(Math.random()*10);
let sum = n1 + n2;
console.log(sum);


let num1 = Math.floor(Math.random()*10);
let num2 = Math.floor(Math.random()*10);
let absDiff = Math.abs(num1 - num2);
console.log( `${absDiff}`);


let nu1 = Math.floor(Math.random()*10);
let nu2 = Math.floor(Math.random()*10);
let prod = nu1 * nu2;
console.log( `${prod}`);


let numb = Math.floor(Math.random()*10);
let squareOfNumber = numb **2;
console.log(`${squareOfNumber}`)


let numb1 = Math.floor(Math.random()*10);

