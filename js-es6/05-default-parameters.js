function enterCreds(username = 'abc', password = 'xyz') {
    console.log(username);
    console.log(password);
}

enterCreds(); // this will print 'abc' and 'xyz'.- will use default values
enterCreds('techglobal', '1234'); // this will print 'techglobal' and '1234'.- will use the given values

// if there are non-default parameters, they should be placed before the default parameters
/* function enterCreds2(username, password = 'xyz') {
    console.log(username);
    console.log(password);
}
*/

function multiply(num1, num2 =1){
    console.log(num1 * num2);
}

multiply(5);
multiply(5,2);

