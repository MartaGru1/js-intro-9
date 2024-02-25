const {generateRandomNumber} = require('../utils/MathHelper.js');

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

let randomNumber = generateRandomNumber(1, 12);
console.log('Randomly generated number is = ' + randomNumber);

if(randomNumber === 12 || randomNumber === 1 || randomNumber === 2) {
    console.log("Winter");
}
else if(randomNumber >= 3 && randomNumber <= 5) {
    console.log("Spring");
}
else if(randomNumber >= 6 && randomNumber <= 8) {
    console.log("Summer");
}
else {
    console.log("Fall");
}

const {generateRandomNumber} = require('../utils/MathHelper.js');


/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

console.log('\n--------------------------------\n');

let r1 = generateRandomNumber(1, 12);
console.log('Randomly generated number is = ' + r1);

if(r1 === 12 || r1 === 1 || r1 === 2) console.log('Winter');
else if(r1 === 3 || r1 === 4 || r1 === 5) console.log('Spring');
else if(r1 === 6 || r1 === 7 || r1 === 8) console.log('Summer');
else console.log('Fall');


if(r1 >= 3 && r1 <= 5) { // r1 === 3 || r1 === 4 || r1 === 5
    console.log('Spring');
}
else if(r1 >= 6 && r1 <= 8) { // r1 === 6 || r1 === 7 || r1 === 8
    console.log('Summer');
}
else if(r1 >= 9 && r1 <= 11) { // r1 === 9 || r1 === 10 || r1 === 11
    console.log('Fall');
}
else {
    console.log('Winter');
}