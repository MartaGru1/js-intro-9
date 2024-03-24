
// The setTimeout function is used to execute a function after a specified amount of time. The setTimeout function takes two arguments, the first argument is the function to be executed and the second argument is the time in milliseconds after which the function should be executed.
setTimeout(() => {
    // code to be executed after 2 seconds
}, 2000);


function method1() {
    setTimeout(() => {
        console.log('LOGIN');
    }, 5000); 
}

function method2() {
    setTimeout(() => {
        console.log('NAVIGATE TO PROFILE');
    }, 1000); 
}

function method3() {
    setTimeout(() => {
        console.log('UPDATE PROFILE PICTURE');
    }, 3000); 
}

function program() {
    method1();
    method2();
    method3();
}

program();

/*
EXPECTATION: This should perform in around 10 seconds in the order below
LOGIN
NAVIGATE TO PROFILE
UPDATE PROFILE PICTURE
*/

/*
THIS IS AN ISSUE SHOULD BE RESOLVED 
ACTUAL: This takes around 5 seconds
NAVIGATE TO PROFILE
UPDATE PROFILE PICTURE
LOGIN

There are 3 ways to resolve
1. callbacks (Before ES6)
2. Promises (After ES6)
3. async-await (After ES6)
*/