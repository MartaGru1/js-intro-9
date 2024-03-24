// Task -1
/* 
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/
console.loh( `\n------------Task-1------------\n`);

const hasUpperCase = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      return true;
    }
  }
  return false;
};

console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("$125.0")); // false
console.log(hasUpperCase("")); // false


// Task -2

/* 
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

console.log( `\n------------Task-2------------\n`);

const noDigit = (str) => {
    let result = [];
    for (let char of str){
        if (char < "0" || char > "9"){
            result.push(char);
        }
    }
    return result.join("");
}

console.log(noDigit("")); // ""
console.log(noDigit("Javascript")); // "Javascript"
console.log(noDigit("123Hello")); // "Hello"
console.log(noDigit("123Hello World149")); // "Hello World"
console.log(noDigit("123Tech456Global149")); // "TechGlobal"


/// Task - 3
/*
 Requirement:
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

console.log( `\n------------Task-3------------\n`);

const noVowel = (str) => {
    const vowels = "aeiouAEIOU";
    let result = [];
    for (let char of str){
        if (vowels.indexOf(char) === -1){
            result.push(char);
        }
    }
    return result.join("");
}


console.log(noVowel("TechGlobal")); // "TchGlbl"
console.log(noVowel("AEOxyz")); // "xyz"
console.log(noVowel("Javascript")); // "Jvscrpt"
console.log(noVowel("")); // ""
console.log(noVowel("125$")); // "125$"


// Task - 4

/*
Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

console.log( `\n------------Task-4------------\n`);

const no13 = (arr) => {
    return arr.map(num =>num === 13 ? 0 : num);
}

console.log(no13([1, 2, 3 ,4])); // [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); // [0, 0, 0, 0, 0]
console.log(no13([])); // []


// Task - 5

/*
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/

console.log( `\n------------Task-5------------\n`);

const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a, b) => a - b)[1];


console.log(middleInt(1, 2, 2)); // 2
console.log(middleInt(5, 5, 8)); // 5
console.log(middleInt(5, 3, 5)); // 5
console.log(middleInt(1, 1, 1)); // 1
console.log(middleInt(-1, 25, 10)); // 10


// Task - 6

/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/
console.log( `\n------------Task-6------------\n`);

const sumOfDigits = (str) => {
    let sum = 0;
    for (let char of str){
        if (char >= "0" && char <= "9"){
            sum += parseInt(char);
        }
    }
    return sum;
}

console.log(sumOfDigits("Javascript")); // 0
console.log(sumOfDigits("John’s age is 29")); // 11
console.log(sumOfDigits("$125.0")); // 8
console.log(sumOfDigits("")); // 0


// Task - 7

/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/
console.log( `\n------------Task-7------------\n`);

const arrFactorial = (arr) => {
    const factorial = (num) => {
        if (num === 0){
            return 1;
        }
        return num * factorial(num - 1);
    }
    return arr.map(num => factorial(num));
}

console.log(arrFactorial([1, 2, 3 ,4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1,120]
console.log(arrFactorial([5 , 0, 6])); // [120, 1, 720]
console.log(arrFactorial([])); // []


// Task - 8

/* 
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/
console.log( `\n------------Task-8------------\n`);

const categorizeCharacters = (str) => {
    let result = ["", "", ""];
    for (let char of str){
        if (char >= "A" && char <= "Z" || char >= "a" && char <= "z"){
            result[0] += char;
        } else if (char >= "0" && char <= "9"){
            result[1] += char;
        } else {
            result[2] += char;
        }
    }
    return result;
}

console.log(categorizeCharacters("1234")); // [ '' , '1234', '' ]
console.log(categorizeCharacters("abc123$#%")); // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); // [ 'abc', '123', '$%%' ]


