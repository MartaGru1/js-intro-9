// This is not a ES6 feature, but it is a good to know feature of JavaScript.

// arguments keyword can be used to collect your argumnets in an array-like object

function funcA(arg1, arg2) {
    console.log(typeof arguments);
    console.log(arguments.length);
    console.log(arguments);
}

funcA(15,20);


function funcA(arg1, arg2){
    if (typeof arguments [0] === 'number' && typeof arguments [1] === 'number'){
        console.log('Both arguments are numbers');
    }
    else if (typeof arguments [0] === 'string' && typeof arguments [1] === 'string'){
        console.log('Both arguments are strings');
    }
    else {
        console.log('Arguments are different types');
    }
}

funcA(15,20);
funcA('abc', 'xyz');
funcA('abs', false);


function funcA(arg1, arg2){
    if (typeof arguments [0] === typeof arguments [1]){
        console.log('These are same type');
    }
    else {
        console.log('these are different types');
    }
}

funcA(15,20);
funcA('abc', 'xyz');
funcA(true, false);
funcA('abs', false);