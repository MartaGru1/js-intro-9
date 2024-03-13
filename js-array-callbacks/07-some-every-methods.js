const numbers = [-5, 0, 5, 10, 23, -10];

// find if some of these numbers are divisible by 5 -> true
// check if every number is positive -> false
// check if some numbers are negative -> true

console.log(numbers.some(number => number % 5 === 0)); // true
console.log(numbers.filter(numers.filter(number => number % 5 === 0).length > 0));


console.log(numbers.every(number => number > 0)); // false
console.log(numbers.filter(number => number > 0).length === numbers.length);


console.log(numbers.some(number => number < 0)); // true
console.log(numbers.filter(number => number < 0).length > 0);

