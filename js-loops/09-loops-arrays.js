const numbers = [3, 4, 7, 3, 2, 2, 7];
// find the sum of all the numbers in the array -> 28
// find the average of the numbers in the array -> 4

console.log('\n--------------Count sum of the numbers and their average-----------\n')

let sum = 0;
for (const num of numbers) {
    sum += num;
}   
let average = sum / numbers.length;

console.log('Sum of numbers = ' + sum);    // 28
console.log('Average of numbers = ' + average);    // 4

// FOR LOOP
sum = 0;
for(let i = 0;i < numbers.length; i++) {
    sum += numbers[i];
}

console.log('Sum of numbers = ' + sum);    // 28
console.log('Average of numbers = ' + sum / numbers.length);    // 4



// find the product of all the numbers starting from index 3 -> 84
console.log('\n--------------Count product of the numbers starting from index 3-----------\n')

let product = 1;
for (let i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}   
console.log('Product of numbers starting from index 3 = ' + product);    // 84  



const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];

// find the sum of first 3 and the last 3 elements -> 31

console.log('\n--------------Count sum of the first 3 and the last 3 elements-----------\n')
//       num[0],                     num[1],                     num[2]
//       nums[nums.length - 1],      nums[nums.length - 2],      nums[nums.length - 3]

let result = 0;

for (let i = 0; i <= 2; i++) {
   // result += nums[i] + nums[nums.length - (i+1)];
   result += nums[i] + nums.at(- i - 1);
}

console.log('Sum of the first 3 and the last 3 elements = ' + result);    // 31
    
result = 0;
for(let i = 0; i < nums.length; i++) {
    if(i <= 2 || i >= nums.length - 3) result += nums[i];
}
console.log(result);


const newArr = [...nums.slice(0, 3), ...nums.slice(-3)];
result = 0;
for(const num of newArr) {
    result += num;
}
console.log(result);
