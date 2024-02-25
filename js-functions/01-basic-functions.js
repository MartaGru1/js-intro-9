function startTheClass() {
    console.log('Online students! Please send "here" in the chat!');
    console.log('RECAP!');
    console.log('Start with the new topic!');
}
startTheClass();   // invoke the function - execute or run the function
startTheClass();
startTheClass();
startTheClass();
startTheClass();


function generateRandomNumber(a, b) {
 let max = Math.max(a, b);
 let min = Math.min(a,b);

 let random = Math.floor(Math.random() * (max - min + 1)) + min;
 return random;
}

generateRandomNumber(3, 5);
console.log(generateRandomNumber(50, 100));

let randomNumber = generateRandomNumber(-5, 5);
console.log(randomNumber);
console.log(randomNumber > 0);
