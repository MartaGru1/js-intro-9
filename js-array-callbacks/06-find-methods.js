const numbers = [0, 10, -4, 5, 2, -3];

//Find first positive number

console.log(numbers.find(number => number > 0)); //10

/* LOOP SOLUTION

let firstP;

for(const number of numbers) {
    if(number > 0) {
        firstP = number;
        break;
    }
}

console.log(firstP); //10
*/


const cities = ['Rome','Kyiv', 'Berlin', 'Brugge', 'LA'];

// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element which has  4 letters -> Kyiv
console.log(cities.find(city => city.length === 4)); // Rome
console.log(cities.findLast(city => city.length === 6)); // Brugge
console.log(cities.indexOf('LA')); // 4
console.log(cities.find(city => city.indexOf('i') >= 0)); // Kyiv
console.log(cities.findLast(city => city.length === 4)); // Kyiv

console.log(cities.find(city => city.length === 7)); // undefined
console.log(cities.findLast(city => city.length === 7)); // undefined
console.log(cities.findIndex(city => city.length === 7)); // -1
console.log(cities.findLastIndex(city => city.length === 7)); // -1

console.log(cities.filter(city => city.length === 4).at(-1)); // Kyiv

