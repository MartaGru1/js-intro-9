/* Task - 1
Requirement:
Write a function named hasLowerCase() which takes a string argument and returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("") 		-> false
hasLowerCase("JAVASCRIPT") 	-> false
hasLowerCase("hello") 		-> true
hasLowerCase("125$") 		-> false
hasLowerCase("   a   ") 		-> true
*/

console.log( `\n------------Task-1------------\n`);

const hasLowerCase = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") {
        return true;
        }
    }
    return false;
    }

// Bilal solution
const hasLowerCase = (str) =>  str.split('').filter(i => i >= 'a' && i <= 'z').length > 0

console.log(hasLowerCase("")); // false
console.log(hasLowerCase("JAVASCRIPT")); // false
console.log(hasLowerCase("hello")); // true
console.log(hasLowerCase("125$")); // false
console.log(hasLowerCase("   a   ")); // true


/* Task - 2
Requirement:
Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.
Examples:
noZero([1]) 		-> [1]
noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
noZero([0, 1, 10]) 	-> [1, 10]
noZero([0, 0, 0]) 	-> []
noZero([10, 100 0]) 	-> [10, 100]
*/

console.log( `\n------------Task-2------------\n`);

const noZero = (arr) => arr.filter(i => i !== 0);

console.log(noZero([1])); // [1]
console.log(noZero([1, 1, 10])); // [1, 1, 10]
console.log(noZero([0, 1, 10])); // [1, 10]
console.log(noZero([0, 0, 0])); // []


/* Task - 3
Requirement:
Write a function named numberAndSquare() which takes an array of numbers as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
*/
console.log( `\n------------Task-3------------\n`);

const numberAndSquare = (arr) => arr.map(i => [i, i * i]);


console.log(numberAndSquare([1, 2, 3])); // [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); // [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); // [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); // [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); // [[0, 0], [1, 1], [-10, 100]]


/* Task - 4
Requirement:
Write a function named containsValue() which takes a string array and a string as arguments and returns a boolean value. 
Search the string variable inside of the array and return true if it exists in the array. If it doesn’t exist, return false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello") 			-> false
containsValue(["abc", "def", "123"], "Abc") 			-> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
*/

console.log( `\n------------Task-4------------\n`);

const containsValue = (arr, str) => arr.includes(str);

console.log(containsValue(["abc", "foo", "javascript"], "hello")); // false
console.log(containsValue(["abc", "def", "123"], "Abc")); // false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); // true


/* Task - 5
Requirement:
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".
Examples:
reverseSentence("Hello") 		-> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	-> "Sentence a is this"

*/

console.log( `\n------------Task-5------------\n`);

const reverseSentence = (str) => {
    const arr = str.split(" ");
    if (arr.length < 2) return "There is not enough words!";
    let reversedWords = arr.reverse();
    reversedWords[0] = reversedWords[0].charAt(0).toUpperCase() + reversedWords[0].slice(1);
    reversedWords[reversedWords.length - 1] = reversedWords[reversedWords.length - 1].toLowerCase();
    return reversedWords.join(" ");
}

// Bilal solution
const reverseSentence = (str) => {
    if(!str.includes(' ')) return 'There is not enough words!'

    str =  str.split(' ').reverse().join(' ').toLowerCase()
    return str.slice(0,1).toUpperCase() + str.slice(1)
}

console.log(reverseSentence("Hello")); // "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); // "Fun is javascript"
console.log(reverseSentence("This is a sentence")); // "Sentence a is this"


/* Task - 6
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		-> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"
*/

console.log( `\n------------Task-6------------\n`);

const removeStringSpecialsDigits = (str) => {
    return str.split('').filter(i => (i >= 'A' && i <= 'Z') || (i >= 'a' && i <= 'z') || i === ' ').join('');
}


//Bilal solution
const removeStringSpecialsDigits = (str) =>  str.split('').filter(i => (i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z' ) || i === ' ').join('')

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); // "Javascript is fun"
console.log(removeStringSpecialsDigits("Cypress")); // "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); // "Automation"


/* Task - 7
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"]) 	-> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	-> ["Automation", "tool"]

*/

console.log( `\n------------Task-7------------\n`);

const removeArraySpecialsDigits = (arr) => {
    return arr.map(i => i.split('').filter(j => (j >= 'A' && j <= 'Z') || (j >= 'a' && j <= 'z') || j === ' ').join(''));
}

//Bilal solution
const removeArraySpecialsDigits = (arr) =>  arr.map(i => i.split('').filter(i => i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z').join(''))


console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); // ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); // ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); // ["Automation", "tool"]


/* Task - 8
Requirement:
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]
*/

console.log( `\n------------Task-8------------\n`);

const getCommons = (arr1, arr2) => {
    return arr1.filter(i => arr2.includes(i));
}

//Bilal solution
const getCommons = (arr1, arr2) => {
    arr1 =  arr1.filter(x => arr2.includes(x))
    
    let result = [];
    arr1.forEach(i => {
     if(!result.includes(i)) result.push(i)
   })
 
   return result;
}

console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )); // []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )); // ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )); // ["C#"]


/* Task - 9
Requirement:
Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
Examples:
noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]
*/

console.log( `\n------------Task-9------------\n`);

const noXInVariables = (arr) => {
    return arr.map(i => {
        if (typeof i === 'string') {
            return i.split('').filter(j => j.toLowerCase() !== 'x').join('');
        }
        return i.filter(i => i !== '');
    });
}

//Bilal solution
const noXInVariables = (arr) => {
    arr = arr.map(el => {
        if(typeof el === 'string')
        return el.split('').filter(x => x.toLowerCase() !== 'x').join('')
        else return el
    })
    return arr.filter(i => i)
}


console.log(noXInVariables(["abc", 123, "#$%"])); // ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); // ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); // [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); // ["yyy", "ABC"]


