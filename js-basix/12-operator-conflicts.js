 // +
 // concatination(adding to the string)  and addition (math operation)

console.log('Hello ' + 1 + 1);     // 'Hello 11'
console.log('Hello ' + (1 + 1));   // 'Hello 2'


console.log('abc' - 1 + 1);    // NaN (Not a Number)
console.log('abc' - (1 + 1));  // NaN (Not a Number)

console.log('1' - 1 + 1);      // 1 
console.log('100' - 1 + 1);    // 100
console.log('a100' - 1 + 1);   // NaN (Not a Number)

console.log(3 + 5 +'a' + 3 + 5);   // '8a35'     -> 3+5 -> addition; 'a' -> string and averything after string is concatination (addition to string as text, not math operation)
console.log('35' / '7' % 2);   //1


console.log('Hello ' + 1 + 1); // 'Hello 11'
console.log('Hello ' + (1 + 1)); // 'Hello 2'


console.log('abc' - 1 + 1); // NaN
console.log('abc' - (1 + 1)); // NaN

console.log('A' - 1 + 1); // NaN

console.log()

let var1 = 'Hello', var2 = 5, var3 = 10;

console.log(var1 + var2 + var3); // 'Hello 510'

console.log(3 + 5 + 'a' + 3 + 5); // '8a35'

console.log(3 * '3'); // 9
console.log(3 * '$'); // NaN
console.log(3 * ' '); // NaN

console.log('35' / '7' % 2); // 1

/*
5, 2

The difference is = 3
*/

console.log('The difference is ' + (5 - 2)); // 'The difference is = 3'


