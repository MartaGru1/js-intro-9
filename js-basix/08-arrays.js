let name = 'John';

console.log(name);  //John
console.log(typepf name); //string


const names = ['John', 'Jane', 'Alex', "Max"];

//loggin out your array
console.log(names); //['John', 'Jane', 'Alex', "Max"]

//retrieving an individual element from an array
console.log(names[2]); //'Alex'
console.log(names[0]); // 'John'

// retrieve and update Max with Mark
names[3] = 'Mark';

console.log(names); // ['John', 'Jane', 'Alex', "Mark"]
console.log(names[3]); //'Mark'

console.log(typeof 37);             // number
console.log(typeof 3.14);           // number
console.log(typeof "");             // string
console.log(typeof "John");         // string
console.log(typeof true);           // boolean
console.log(typeof false);          // boolean
console.log(typeof Symbol("foo"));  // symbol
console.log(typeof undefined);      //underfined




const numbers = [10, -3, 25, 67, 99, 100.99];
// you can get array size uwith the length property
console.log(numbers.length); //5
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[5]);

console.log(typeof names);
console.log(typeof numbers);
console.log(typeof[]);
console.log(typeof[1,2,3]);
console.log (typeof ['John', 45, true]);
const arr = ['John', true, 25, undefined, null, 45];
console.log(arr.length); // 6
console.log(arr[0]); // 'John'
console.log(arr[5]); // 45
console.log(arr[-1]); // undefined
console.log(arr[6]); // undefined
console.log(arr[7]); // undefined
console.log(arr[1000]); // undefined