// How will the following expression be evaluated? Please provide a detailed explanation of the result.
console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false));                     // false
console.log((!true && !false) || 5 * 2 === true * 10);                               // true
console.log("3" * "5" >= 15 && true == 1 && " " == false && "" === 0);               // false
console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5));                         // fasle
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1");          // true 
console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange"));           // false
console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false));                // true
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false));      // true
console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat"));          // true
console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true));       // false
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10));             // false
console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true));                   // false
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true));  // true  
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0));   // true  
console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1));               // true




// Task - Find if a number is even or not.
/* Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is even, print true.
Otherwise, print false. */

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber % 2 === 0);


// Task - Find if a number is odd or not.
/* Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is odd, print true.
Otherwise, print false. */
let randomNum = Math. floor(Math.random() * 10) + 1;
console.log(randomNum % 2 !== 0);


 // Task - Find if a number is positive or not.
/* Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is positive, print true.
Otherwise, print false */

// Generate a random number between -5 and 5 (inclusive)
const randNumber = Math.floor(Math.random() * 11) - 5;
console.log(randNumber >= 0);

/* Task - Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is negative, print true.
Otherwise, print false. */

// Generate a random number between -5 and 5 (inclusive)
const randNumber1 = Math.floor(Math.random() * 11) - 5;
console.log(randNumber1 < 0);


/* Task - Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 5, print true.
Otherwise, print false.*/

// Generate a random number between 1 and 50 (inclusive)
const randNumber2 = Math.floor(Math.random() * 50) + 1;
console.log(randNumber2 % 5 === 0);
r1 = Math.floor(Math.random()*50)+1;
console.log('Randomly generated number is ' + r1);
console.log( r1 % 5 === 0);
/* Task - Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 7, print true.
Otherwise, print false. */
const randNumber3 = Math.floor(Math.random() * 50) + 1;
console.log(randNumber3 % 7 === 0);


/* Task - Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the sum of the numbers and print it.*/

// Generate two random numbers between 1 and 10 (inclusive)
let r1 = Math.floor(Math.random()*10) +1;
let r2 = Math.floor(Math.random()*10) +1;
let sum = r1 + r2;

console.log( 'Randomly generated numbers are ' +r1, r2);

console.log(` The sum of the numbers is ${sum}`);
/* Task - Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the absolute difference of the numbers and print it. 
*/

// Generate two random numbers between 1 and 10 (inclusive)
const randomNumber1 = Math.floor(Math.random() * 10) + 1;
const randomNumber2 = Math.floor(Math.random() * 10) + 1;

// Calculate the absolute difference of the two numbers
const absoluteDifference = Math.abs(randomNumber1 - randomNumber2);

// Print the absolute difference
console.log("Random Number 1:", randomNumber1);
console.log("Random Number 2:", randomNumber2);
console.log("Absolute Difference:", absoluteDifference);


/* Task - Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the product of the numbers and print it.
*/
// Generate two random numbers between 1 and 10 (inclusive)
const randomNumber3 = Math.floor(Math.random() * 10) + 1;
const randomNumber4 = Math.floor(Math.random() * 10) + 1;

// Calculate the product of the two numbers
const product = randomNumber3 * randomNumber4;

// Print the product
console.log("Random Number 1:", randomNumber3);
console.log("Random Number 2:", randomNumber4);
console.log("Product:", product);

/* Task - Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the square of the number and print it.*/

const randomNumber5 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber5 **2);

/* Task - Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the cube of the number and print it. */

const randomNumber6 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber6 **3);

/* Task - Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers. */

let randomNumber7 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber7 * 1.6);


/* Task Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds. */

let randomNumber8 = Math.floor(Math.random() * 100) + 1 ;
console.log(randomNumber8 * 2.2);


/* Task - Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false. */ 

let randomNumber9 = Math.floor(Math.random() * 3) + 1;
let randomNumber10 = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber9 === randomNumber10);

/* Task - Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false. */

let age = Math.floor(Math.random() * 100) + 1 ;
let isOldEnough = age >= 16;
console.log(`Age: ${age}`);
console.log(`Is the person old enough? ${isOldEnough}`)


/* Task - Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it. */

// Generate two random numbers between 1 and 10 (inclusive)
const randomNumber11 = Math.floor(Math.random() * 10) + 1;
const randomNumber12 = Math.floor(Math.random() * 10) + 1;

// Find the greatest of the two numbers
const greatestNumber = Math.max(randomNumber11, randomNumber12);

// Print the greatest number
console.log("Random Number 1:", randomNumber11);
console.log("Random Number 2:", randomNumber12);
console.log("The greatest number is:", greatestNumber);


/* Task - Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it. */

const randomNumber13 = Math.floor(Math.random() * 10) + 1;
const randomNumber14 = Math.floor(Math.random() * 10) + 1;
const randomNumber15 = Math.floor(Math.random() * 10) + 1;

console.log("Random Number 1:", randomNumber13);
console.log("Random Number 2:", randomNumber14);
console.log("Random Number 3:", randomNumber15);
console.log("The greatest number is:", + Math.max(randomNumber13, randomNumber14, randomNumber15));


/* Task - Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it. */
// Generate two random numbers between 1 and 10 (inclusive)
const randNumber5 = Math.floor(Math.random() * 10) + 1;
const randNumber6 = Math.floor(Math.random() * 10) + 1;

// Print the smallest number
console.log("Random Number 1:", randNumber5);
console.log("Random Number 2:", randNumber6);
console.log("The smallest number is:", + Math.min(randNumber5, randNumber6));


/* Task - Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it. */

// Generate three random numbers between 1 and 10 (inclusive)
const randNumber7 = Math.floor(Math.random() * 10) + 1;
const randNumber8 = Math.floor(Math.random() * 10) + 1;
const randNumber9 = Math.floor(Math.random() * 10) + 1;

// Find the smallest of the two numbers
const smallerNumber = Math.min(randNumber7, randNumber8, randNumber9);

// Print the smallest number
console.log("Random Number 1:", randNumber7);
console.log("Random Number 2:", randNumber8);
console.log("Random Number 3:", randNumber9);
console.log("The smallest number is:", smallerNumber);


/* Task - Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it. */

// Generate three random numbers between 1 and 10 (inclusive)
const randomNumber20 = Math.floor(Math.random() * 10) + 1;
const randomNumber21 = Math.floor(Math.random() * 10) + 1;
const randomNumber22 = Math.floor(Math.random() * 10) + 1;

// Calculate the average of the three numbers
//const average = (randomNumber20 + randomNumber21 + randomNumber22) / 3;

let average = Math.floor((randomNumber20 + randomNumber21 + randomNumber21) / 3);
// Print the average
console.log("Random Number 1:", randomNumber20);
console.log("Random Number 2:", randomNumber21);
console.log("Random Number 3:", randomNumber22);
console.log("Average:", average);


/* Task -  Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference. */

// Generate three random numbers between 1 and 10 (inclusive)
const randomNumb1 = Math.floor(Math.random() * 10) + 1;
const randomNumb2 = Math.floor(Math.random() * 10) + 1;
const randomNumb3 = Math.floor(Math.random() * 10) + 1;

// Find the greatest and smallest numbers
const greatesNumber = Math.max(randomNumb1, randomNumb2, randomNumb3);
const smallesNumber = Math.min(randomNumb1, randomNumb2, randomNumb3);

// Calculate the absolute difference between the greatest and smallest numbers
const absolutDifference = Math.abs(greatesNumber - smallesNumber);

// Print the greatest and smallest numbers along with their absolute difference
console.log("Random Number 1:", randomNumb1);
console.log("Random Number 2:", randomNumb2);
console.log("Random Number 3:", randomNumb3);
console.log("Greatest Number:", greatesNumber);
console.log("Smallest Number:", smallesNumber);
console.log("Absolute Difference:", absolutDifference);


/* Task - Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100 */
// Generate a random number between 1 and 100 (inclusive)
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Determine which quarter the number falls into
let quarter;
if (randomNumber <= 25) {
    quarter = "1st";
} else if (randomNumber <= 50) {
    quarter = "2nd";
} else if (randomNumber <= 75) {
    quarter = "3rd";
} else {
    quarter = "4th";
}

// Print the result
console.log("Random Number:", randomNumber);
console.log("Quarter:", quarter, "quarter");


/* Task - Find the midpoint of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100  */
// Generate a random number between 1 and 100 (inclusive)
const randoNumb = Math.floor(Math.random() * 100) + 1;

// Determine which half the number falls into

if (randoNumb <= 50) {
    return "1st";
} else {
    return "2nd";
}

// Print the result

console.log();


/* Task - Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.  */

// Generate two random numbers between 1 and 10 (inclusive)
let randomNumber1 = Math.floor(Math.random() * 10) + 1;
let randomNumber2 = Math.floor(Math.random() * 10) + 1;

// Calculate the sum of the two random numbers
let sum = randomNumber1 + randomNumber2;

// Check if the sum is even
let isEven = sum % 2 === 0;

let r1 = Math.floor(Math.random()*10)+1;
let r2 = Math.floor(Math.random()*10)+1;
let sum = r1 +r2;
console.log(sum % 2 === 0);

// Print the result
console.log("Random Number 1:", randomNumber1);
console.log("Random Number 2:", randomNumber2);
console.log("Sum:", sum);
console.log("Is the sum even?", isEven);


/* Task - Find if product of 2 random numbers is odd or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false. */

// Generate two random numbers between 1 and 10 (inclusive)
const randomNumber1 = Math.floor(Math.random() * 10) + 1;
const randomNumber2 = Math.floor(Math.random() * 10) + 1;

// Calculate the product of the two random numbers
const product = randomNumber1 * randomNumber2;

// Check if the product is odd
console.log(product % 2 === 1);

// Print the result
console.log("Random Number 1:", randomNumber1);
console.log("Random Number 2:", randomNumber2);
console.log("Product:", product);
console.log("Is the product odd?", isOdd);


/* Task - Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y */

function rectangleArea(x, y) {
    // Calculate the area of the rectangle
    const area = x * y;
    return area;
}

// Example usage:
const width = 5;
const height = 10;
const areaOfRectangle = rectangleArea(width, height);
console.log("Area of rectangle:", areaOfRectangle);



/* Task - Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y) */

function rectanglePerimeter(x, y) {
    // Calculate the perimeter of the rectangle
    const perimeter = 2 * (x + y);
    return perimeter;
}

// Example usage:
const width = 5;
const height = 10;
const perimeterOfRectangle = rectanglePerimeter(width, height);
console.log("Perimeter of rectangle:", perimeterOfRectangle);


/* Task - Area of a square
Write a function named as squareArea() which calculates the area of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x */

function squareArea(x) {
    // Calculate the area of the square
    const area = x * x;
    return area;
}

// Example usage:
const sideLength = 5;
const areaOfSquare = squareArea(sideLength);
console.log("Area of square:", areaOfSquare);


/* Task - Perimeter of a square.
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x   */

function squarePerimeter(x) {
    // Calculate the perimeter of the square
    const perimeter = 4 * x;
    return perimeter;
}

// Example usage:
const sideLength = 5;
const perimeterOfSquare = squarePerimeter(sideLength);
console.log("Perimeter of square:", perimeterOfSquare);



/* Task - Double The Word
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word. */

function doubleWord(word) {
    // Double the given word
    const doubledWord = word + word;
    return doubledWord;
}

// Example usage:
const originalWord = 'Tech';
const doubled = doubleWord(originalWord);
console.log("Original Word:", originalWord);
console.log("Doubled Word:", doubled);


/* Task - First Character
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word. */ 

function firstCharacter(word) {
    // Return the first character of the given word
    return word.charAt(0);
}
console.log(firstCharacter("Tech"));



/* Task - First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
Examples:
firstTwoCharacters("Tech") -> "Te"
firstTwoCharacters("Global") -> "Gl"
firstTwoCharacters("") -> ""
firstTwoCharacters(" ") -> " "
firstTwoCharacters("1") -> "1"   */

function firstTwoCharacters(word) {
    return word.length >= 2 ? word.slice(0, 2) : word;
}

function firstTwoCharacters(word) {
    if (word.length >=2){
    return word.substring(0, 2);
    }
    else {
        return word;
    }
}



// Examples:
console.log(firstTwoCharacters("Tech"));    // "Te"
console.log(firstTwoCharacters("Global"));  // "Gl"
console.log(firstTwoCharacters("1"));       // "1" (no change)



/* Task - Last Character
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
lastCharacter("Tech") -> "h"
lastCharacter("Global") -> "ll"
lastCharacter(" ") -> " "
lastCharacter("123") -> "3"   */

function lastCharacter(word) {
    return word.slice(-1);
}
// Examples:
console.log(lastCharacter("Tech"));    // "h"
console.log(lastCharacter("Global"));  // "l"



/*Task - Last Two Characters
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
lastTwoCharacters("Tech") -> "ch"
lastTwoCharacters("Global") -> "al"
lastTwoCharacters("") -> ""
lastTwoCharacters(" ") -> " "
lastTwoCharacters("1") -> "1  */

function lastTwoCharacters(word) {
    if (word.length >=2) {
    return word.slice( - 2);
   }
    else {
        return word;
       }
   }


// Examples:
console.log(lastTwoCharacters("Tech"));    // "ch"
console.log(lastTwoCharacters("Global"));  // "al"
console.log(lastTwoCharacters("A"));       // "A" (no change)



/* Task - First and Last Characters
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
firstLast("Tech") -> "Th"
firstLast("TechGlobal") -> "Tl"
firstLast("") -> ""
firstLast(" ") -> " "
firstLast("1") -> "1"
firstLast("abcde") -> ae    */

function firstLast(word) {
    if (word.length >= 2) {
        return word[0] + word[word.length - 1];
    } else {
        return word;
    }
}

// Examples:
console.log(firstLast("Tech"));    // "Th"
console.log(firstLast("Global"));  // "Gl"
console.log(firstLast("A"));       // "A" (no change)



/* Task - Has Five
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked.
Examples:
hasFive("Tech") -> false
hasFive("Global") -> true
hasFive("") -> false
hasFive("12345") -> true
hasFive("hello") -> true  */

function hasFive(word) {
    return word.length >= 5;
}


// Examples:
console.log(hasFive("Hello"));    // true (has at least 5 characters)
console.log(hasFive("Tech"));     // false (has less than 5 characters)



/* Task - Middle
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples:
middle("Tech") -> "ec"
middle("Global") -> "ob"
middle("abcde") -> "c"
middle("1") -> "1"
middle("abc") -> "b"
middle(“1234”) -> "23" */

function middle(word) {
    if ( word.length % 2 === 1) {
        return word.charAt(Math.floor(word.length / 2));
    } else {
        // Even length: return the middle two characters
        return word.substring(Math.floor(word.length / 2) - 1, Math.floor(word.length / 2) + 1);
    }
}

// Examples:
console.log(middle("Tech")); // "ec"
console.log(middle("Global")); //"ob"
console.log(middle("abcde")); //"c"
console.log(middle("1")); // "1"
console.log(middle("abc")); // "b"
console.log(middle("1234")); //"23" 



/* Task - Longer String
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
Examples:
longer("Tech", "Global") -> "Global"
longer("Hello", "Hi") -> "Hello"
longer("Hello", "World") -> "Hello"  */

function longer(word1, word2) {
    if (word1.length >= word2.length) {
        return word1;
    } else {
        return word2;
    }
}

// Examples:
console.log(longer("Tech", "Global")); 
console.log(longer("Hello", "Hi")); 
console.log(longer("Hello", "World"));   



/* Task - Shorter String
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples:
shorter("Tech", "Global") -> "Tech"
shorter("Hello", "Hi") -> "Hi"
shorter("Hello", "World") -> "World" */

function shorter(word1, word2) {
    if (word1.length !== word2.length) {
        return word1.length < word2.length ? word1 : word2;
    } else {
        return word2;
    }
}

/*function shorter(word1, word2) {
    if (word1.length < word2.length) {
        return word1;
    } else if (word1.length > word2.length) {
        return word2;
    } else {
        return word2;
    }
}

// Examples:
console.log(shorter("Tech", "Global"));   // "Tech"
console.log(shorter("Hello", "Hi"));      // "Hi"
console.log(shorter("Hello", "World"));   // "World"


/* Task - Concat Two String
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked.
NOTE: Concatenation should always be as first string + second string . 
Examples:
concat("Tech", "Global") -> "TechGlobal"
concat("Hello", "World") -> "HelloWorld"
concat("", "abc") -> "abc"
concat("123", "1234") -> "1231234"  */

function concat(word1, word2) {
    return word1 + word2;
}

// Examples:
console.log(concat("Tech", "Global"));   // "TechGlobal"
console.log(concat("Hello", "World"));   // "HelloWorld"


/* Task - Starts With Vowel
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples:
startsVowel("Tech") -> false
startsVowel("Apple") -> true
startsVowel("abc") -> true    */

function startsVowel(word) {
 let firstLetter = word.charAt(0).toLowerCase(); // Get the lowercase version of the first letter
    return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
}

// Examples:
console.log(startsVowel("Tech"));   // false
console.log(startsVowel("Apple"));  // true
console.log(startsVowel("abc"));    // true





function middle(str) {
    if(str.length %2 ===1) {
    return str.slice(str.length / 2); }
    else {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
} 
}

    console.log(middle("Global"))