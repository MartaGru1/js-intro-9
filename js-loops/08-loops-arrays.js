const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// count how many positive numbers you have in the array -> 4
console.log('\n--------------Count Positives-----------\n')

let countP = 0;

for (const num of numbers) {
    if(num > 0) {
        countP++;
    }
}
console.log('Positive numbers = ' + countP);

counP = 0;
for(let i=0;i <numbers.length; i++) {
    if(numbers[i]>0) {
        countP++;
    }
}
console.log('Positive numbers = ' + countP);

// count how many negative or neutral numbers you have in the array -> 6
console.log('\n--------------Count Negatives-----------\n')

let countN = 0;
for (const num of numbers) {
    if(num <= 0) {
        countN++;
    }
}

console.log('Negative or neutral numbers = '+ countN);


// count how many even numbers you have in the array -> 7

console.log('\n--------------Count even-----------\n')

let countE = 0;
for (const num of numbers) {
    if(num % 2 === 0) {
        countE++;
    }
}
console.log('Even numbers = '+ countN);

// count how many even but not negative numbers you have in the array -> 5
console.log('\n--------------Count even but not negative-----------\n')

let countE2 = 0;

for (const num of numbers) {
    if(num % 2 === 0 && num >= 0) {
        countE2++;
    }
}   
console.log('Even but not negative numbers = ' + countE2);    // 5