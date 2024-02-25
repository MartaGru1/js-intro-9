/* Task-1 
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false
Test data 2:
65, 80, 90
Expected Output 2: 
true */
console.log('\n ------------ TASK-1--------------------\n');

let r1 = Math.floor(Math.random() * 100) + 1;
let r2 = Math.floor(Math.random() * 100) + 1;
let r3 = Math.floor(Math.random() * 100) + 1;

console.log( r1, r2, r3);
let average = (r1 + r2 + r3) / 3;
console.log(average >= 50);


let average = Math.floor((num1 + num2 + num3) / 3);
console.log(average >= 50 ? true : false);

/* Task-2
Requirement:
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH
Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH
Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH
Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH */
console.log('\n ------------ TASK-2--------------------\n');

let randomNumber1 = Math.floor(Math.random() * 3) + 1;
let randomNumber2 = Math.floor(Math.random() * 3) + 1;
let randomNumber3 = Math.floor(Math.random() * 3) + 1;

console.log(randomNumber1, randomNumber2, randomNumber3);

if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3) {
    console.log("TRIPLE MATCH");
}
else if (randomNumber1 === randomNumber2 || randomNumber1 === randomNumber3 || randomNumber2 === randomNumber3) {
    console.log("DOUBLE MATCH");
}
else {
    console.log("NO MATCH");
}

let rand1 = Math.floor((Math.random() * 3) + 1);
let rand2 = Math.floor((Math.random() * 3) + 1);
let rand3 = Math.floor((Math.random() * 3) + 1);

console.log(`${rand1} ${rand2} ${rand3} `)

if(rand1 === rand2 && rand2 === rand3) console.log('TRIPLE MATCH');
else if(rand1 !== rand2 && rand2 !== rand3) console.log('NO MATCH')
else console.log('DOUBLE MATCH');


/* Task-3
Requirement:
Write a function named as hasA() which takes a string word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true */
console.log('\n ------------ TASK-3--------------------\n');

function hasA(word) {
    return word.includes('a') || word.includes('A');
}

console.log(hasA("Tech"));
console.log(hasA("Global"));

/* Task-4
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns 
the given word back tripled if the string length is even or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222" */
console.log('\n ------------ TASK-4--------------------\n');

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) {   
    return word +  word + word;
    } else {
        return word + word;     
    } 
}

      // WAY2: 
      if(str.length % 2 === 0) return str.padStart(str.length * 3, str)
      else return str.padStart(str.length * 2, str)



console.log(doubleOrTripleWord("Tech"));   // "TechTechTech"
console.log(doubleOrTripleWord("Apple")); //"AppleApple”
console.log(doubleOrTripleWord("")); // ""
console.log(doubleOrTripleWord(" ")); // " "
console.log(doubleOrTripleWord("1")); // "11"
console.log(doubleOrTripleWord("22")); //"222222"

/* Task-5
Requirement:
Write a function named as firstWord() which takes a string word as an argument
and returns the first word from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> "" */
console.log('\n ------------ TASK-5--------------------\n');

function firstWord(str) {
    str = str.trim();
    let words = str.split(' ');
    if (words.length > 0) {
    return words[0];
    }
    else {
        return "";
    }
}

function firstWord(str){
    str = str.trim()
    if(str.includes(' ')) return str.slice(0, str.indexOf(' '))
    else return str;
// return str.trim().split(' ')[0]
}

console.log(firstWord("Hello World")); // "Hello"
console.log(firstWord("I like JavaScript")); //  "I"
console.log(firstWord("Hello")); //  "Hello"
console.log(firstWord("")); //  ""
console.log(firstWord("    ")); // ""

/* Task-6
Requirement:
Write a function named as lastWord() which takes a string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""   */
console.log('\n ------------ TASK-6--------------------\n');

function lastWord(sentence) {
    sentence = sentence.trim();
    let words = sentence.split(' ');
    if (words.length > 0) {
        return words[words.length - 1];
    }
    else {
        return "";
    }
}

function lastWord(str){
    str = str.trim().split(' ');
    return str[str.length - 1]
    // str = str.trim();
    // if(str.includes(' ')) return str.slice(str.lastIndexOf(' ') + 1)
    // else return str;

}
console.log(lastWord("Hello World")); // World
console.log(lastWord("I like JavaScript")); // JavaScript
console.log(lastWord("Hello")); // 'Hello'
console.log(lastWord("     ")); // ""
console.log(lastWord("")); // ""


/* Task-7
Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> "" */
console.log('\n ------------ TASK-7--------------------\n');

function firstLastWord(str1) {
    str1 = str1.trim().split(' ');
    if (str1.length > 0) {
        return str1[0], str1[str1.length -1];
    }
    else {
        return "";

    }
}

function firstlastWord(str){
    str = str.trim();
    if(str.includes(' ')) return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1)
    else return str + str;
}

console.log(firstLastWord("Hello World"));  // "HelloWorld"
console.log(firstLastWord("I like JavaScript")); // "IJavaScript”
console.log(firstLastWord("Hello"));  // "HelloHello"
console.log(firstLastWord("")); //""
console.log(firstLastWord("    ")); // ""

/* Task-8
Requirement:
Write a function named as startVowel() which takes a string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i, o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false */
console.log('\n ------------ TASK-8--------------------\n');

function startVowel(word) {
    let firstChar = word.toLowerCase()[0];
    return ['a','e','i','o','u'].includes(firstChar);
}

function startVowel(str){
    // str = str.toLowerCase()
    // if(str.startsWith('a')) return true;
    // else if(str.startsWith('e'))return true;
    // else if(str.startsWith('i'))return true;
    // else if(str.startsWith('o'))return true;
    // else if(str.startsWith('u'))return true;
    // return false;

    return 'aeiouAEIOU'.includes(str[0])
    
}


console.log(startVowel("Apple"));  // true
console.log(startVowel("Hello"));  // false
console.log(startVowel("orange"));  // true
console.log(startVowel(""));  // false
console.log(startVowel("    "));  // false
console.log(startVowel("123"));  // false


/* Task-9
Requirement: 
Write a function named as swap4() which takes a string word as an argument and returns the string back 
with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if th        zae given string does not have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""  */
console.log('\n ------------ TASK-9--------------------\n');

function swap4(word) {
    if(word.length >= 8) {
        let firstFour = word.slice(0, 4);
        let lastFour = word.slice(word.length - 4);
        let middle = word.slice(4, word.length - 4);
        return lastFour + middle + firstFour;
    }
    else {
        return "";
    }
}

function swap4(str){
    if(str.length < 8) return "";
    
    let first4 = str.slice(0, 4);
    let middle = str.slice(4 , -4);
    let last4 = str.slice(-4); 

    return last4 + middle + first4
}

console.log(swap4("JavaScript")); // "riptScJava"
console.log(swap4("abc"));  // ""
console.log(swap4("TechGlobal")); // "obalGlTech"
console.log(swap4(""));  // ""
console.log(swap4("    ")); // ""
console.log(swap4("Apple")); // ""


/* Task-10 
Requirement: 
Write a function named as swapFirstLastWord() which takes a string 
word as an argument and returns 
the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World")  -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""  */
console.log('\n ------------ TASK-10--------------------\n');

function swapFirstLastWord(str2) {
    let firstWord = str2.slice(0, str2.indexOf(' '));
    let lastWord = str2.slice(str2.lastIndexOf(' ') + 1);
    let middlePart = str2.slice(str2.indexOf(' '), str2.lastIndexOf(' ') + 1);
    if (firstWord !== -1 && lastWord !== -1 && firstWord !== lastWord){
        return lastWord + middlePart + firstWord;
    }
    else {
        return "";
    } 
}

function swapFirstLastWord(str) {
    str = str.trim();

    if(str.includes(' ')){
        return "";
    }
    else {
        let firstWord = str.slice(0, str.indexOf(' '));
        let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
        let lastWord = str.slice(str.lastIndexOf(' ') + 1);

        return lastWord + middle + firstWord
    }

}

console.log(swapFirstLastWord("Hello World"));  // "World Hello"
console.log(swapFirstLastWord("I like JavaScript"));  // "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar"));  // "bar bar foo foo"
console.log(swapFirstLastWord(""));  // ""
console.log(swapFirstLastWord("    "));  // ""
console.log(swapFirstLastWord("Hello"));  // ""
console.log(swapFirstLastWord("Hello   "));  // ""
