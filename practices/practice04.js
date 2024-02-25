 const {CharacterHelper} = require('../utils/CharacterHelper.js');
 const {generateRandomNumber} = require('../utils/MathHelper.js');
 
 // Task - 1 
/*/*
Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

Test data 1:
0, 1

Expected result 1:
false


Test data 2:
0, 0

Expected result 2:
true


Test data 3:
1, 0

Expected result 3:
false


Test data 4:
1, 1

Expected result 4:
true
*/

let t1num1 = 0;
let t1num2 = 0;

if(t1num1 === t1num2) console.log(true);
else console.log(false);

t1num1 === t1num2 ? console.log(true) : console.log(false);

// THE BEST SOLUTION
console.log(t1num1 === t1num2);



 t1num1 = 0;
 t1num2 = 0;

 console.log(t1num1 === t1num2);  // the answer

// options:
if(t1num1 === t1num2) console.log(true);
else crossOriginIsolated.log(false);

t1num1 === t1num2 ? console.log(true) : console.log(false);



// Task - 2
/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"


Test data 1:
"v"

Expected result 1:
"v"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit
*/

let t2character = 'A'; //65

let t2ascii = t2character.charCodeAt(0);

// if else solution
if(48 <= t2ascii && t2ascii <= 57) console.log(`"${t2character}" is a digit`);
else if((65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122)) console.log(`"${t2character}" is a letter`);
else console.log('INVALID INPUT');


if(t2ascii >= 48 && t2ascii <= 57) {
    console.log(`${t2character} is a digit`); 
}
else if ((t2ascii >= 65 && t2ascii <= 90) || (t2ascii >= 97 && t2ascii <= 122)); {
    console.log(`${t2character} is a letter`); 
} 
else {
    console.log("INVALID INPUT");
}
console.log(t2character("A"));

// ternary solution

t2ascii >= 48 && t2ascii <= 57
? console.log(`${t2character} is a digit`)
: (t2ascii >= 65 && t2ascii <= 90) || (t2ascii >= 97 && t2ascii <= 122)
? console.log(`${t2character} is a letter`)
: console.log("INVALID INPUT")


// switch solution
switch(true) {
    case t2ascii >= 48 && t2ascii <= 57:
    console.log(`${t2character} is a digit`);
    break;
    case (t2ascii >= 65 && t2ascii <= 90) || (t2ascii >= 97 && t2ascii <= 122):
    console.log(`${t2character} is a letter`);
    break;
    default:
    console.log("INVALID INPUT");   
}


// Task - 3

let t3character ="g";
let t3ascii = t3character.charCodeAt(0);

if(t3ascii >= 97 && t3ascii <= 122) {
    console.log(`${t3character} is a lowecase letter`); 
}
else if (t3ascii >= 65 && t3ascii <= 90); {
    console.log(`${t3character} is an uppercase letter`); 
}
else {
    console.log("INVALID INPUT");
}
console.log(t3character("5"));

// ternary solution

t3ascii >= 97 && t3ascii <= 122
? console.log(`${t3character} is a lowecase letter`)
: t3ascii >= 65 && t3ascii <= 90
? console.log(`${t3character} is an uppercase letter`)
: console.log("INVALID INPUT")

// switch solution
switch(true) {
    case t3ascii >= 97 && t3ascii <= 122:
    console.log(`${t3character} is a lowecase letter`);
    break;
    case t3ascii >= 65 && t3ascii <= 90:
    console.log(`${t3character} is an uppercase letter`);
    break;
    default:
    console.log("INVALID INPUT");   
}


// Task-4
//32-47  58-64   91-96  123-127 - special characters in ASCII tables

let t4character = "&";
let t4ascii = t4character.charCodeAt(0);

if((t4ascii ===32) || t4ascii >= 48 && t4ascii <= 57|| t4ascii >= 65 && t4ascii <= 90 || t4ascii >= 97 && t4ascii <= 122) {
    console.log(`"${t4character}" is not a special character`);
}
else {
    console.log(`"${t4character}" is a special character`)
}

switch(true){
    case t4ascii >= 97 && t4ascii <= 122:
    console.log(`${t4character} is not a special character`);
    break;
    case t4ascii >= 65 && t4ascii <= 90:
    console.log(`${t3character} is not a special character`);
    break;
    default:
    console.log(`${t4character} is a special character`)

}


//Task - 5

/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t5character = 'U';
let t5ascii = t5character.charCodeAt(0);

if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    // I will check if it is vowel or not
    if('aeiouAEOUI'.includes(t5character)) {
        console.log(`"${t5character}" is a vowel`);
    }
    else {
        console.log(`"${t5character}" is not a vowel`);
    }
}
else {
    console.log('INVALID INPUT')
}


if('aeiouAEOUI'.includes(t5character)) {
    console.log(`"${t5character}" is a vowel`);
}
else if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    console.log(`"${t5character}" is not a vowel`);
}
else {
    console.log('INVALID INPUT')
}

let t5character = "A";
let t5ascii = t5character.charCodeAt(0);

if(firstCharIsLetter) {
    // check id it is a vowel or not
    if('aeiouAEOUI'.includes(t5character)) {
        console.log(`"${t5character}" is a vowel`);
    }
    else{
        console.log(`"${t5character}" is not a vowel`)
    }
}
else {
    console.log('INVALID INPUT');
}


