// Task -01
/*Requirement:
Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad"​) 			-> 2
countPalindrome("See you at noon") 			-> 1
countPalindrome("Kayak races attracts racecar drivers") 	-> 2
countPalindrome("") 				-> 0
countPalindrome("No palindrome here") 		-> 0
*/
console.log('\n---------Task-1-------\n');

const countPalindrome = str => {  
    const isPalindrome = word => {
        word = word.toLowerCase();
        let start = 0;
        let end = word.length - 1;
        while (start < end) {
            if (word[start] !== word[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    return str.split(/\s+/).filter(word => word.length > 0 && isPalindrome(word)).length;
}


console.log(countPalindrome("Mom and Dad")); //2
console.log(countPalindrome("See you at noon")); //1
console.log(countPalindrome("Kayak races attracts racecar drivers")); //2
console.log(countPalindrome("")); //0
console.log(countPalindrome("No palindrome here")); //0


// Task -02
/*Requirement:
Write a function named sum() which takes an array of numbers and a boolean value as arguments. It will return the sum of the numbers positioned at even indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
sum([1, 5, 10], true) 		-> 11
sum([3, 7, 2, 5, 10], false) 	-> 12
sum([-1, 1, -2, 2], true) 		-> -3
sum([0, -1, 15, 1], false) 		-> 0
sum([1, 2, 3, 4, -4], true) 		-> 0
*/
console.log('\n---------Task-2-------\n');

const sum = (arr, isEven) => {
    let sum = 0;
    arr.forEach((num, index) => {
        if (isEven && index % 2 === 0) {
            sum += num;
        } else if (!isEven && index % 2 !== 0) {
            sum += num;
        }
    });
    return sum;
}

console.log(sum([1, 5, 10], true)); //11
console.log(sum([3, 7, 2, 5, 10], false)); //12
console.log(sum([-1, 1, -2, 2], true)); //-3
console.log(sum([0, -1, 15, 1], false)); //0
console.log(sum([1, 2, 3, 4, -4], true)); //0


// Task -03
/* Requirement:
Write a function named nthChars() which takes a string and a number as arguments and returns the string back with every nth characters.​
Examples:
nthChars("Java", 2) 		-> "aa"
nthChars("JavaScript", 5)​ 	-> "St"
nthChars("Java", 3)​ 		-> "v"
nthChars("Hi", 4)​ 		-> ""
nthChars("0123456789", 2) 	-> "13579" 
*/
console.log('\n---------Task-3-------\n');

const nthChars = (str, n) => {
    let result = '';
    for (let i = n - 1; i < str.length; i += n) {
        result += str[i];
    }
    return result;
}

console.log(nthChars("Java", 2)); //"aa"
console.log(nthChars("JavaScript", 5)); //"St"
console.log(nthChars("Java", 3)); //"v"
console.log(nthChars("Hi", 4)); //""
console.log(nthChars("0123456789", 2)); //"13579"


// Task -04
/* Requirement:
Write a function named canFormString() which takes two string arguments and returns true if the second string can be formed by rearranging 
the characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi")​ 			-> false
canFormString("programming", "gaming")​ 		-> true
canFormString("halogen", "hello")​ 			-> false
canFormString("CONVERSATION", "voices rant on")​ 	-> true
canFormString("12", "123") 			-> false
*/
console.log('\n---------Task-4-------\n');

const canFormString = (str1, str2) => {
        let emptyStr1 = "";
        let emptyStr2 = "";
        
        for (let char of str1) {
            if (char !== ' ') {
                emptyStr1 += char.toLowerCase();
            }
        }
        
        for (let char of str2) {
            if (char !== ' ') {
                emptyStr2 += char.toLowerCase();
            }
        }
        
        const sortStr1 = emptyStr1.split('').sort().join('');
        const sortStr2 = emptyStr2.split('').sort().join('');
        
        return sortStr1 === sortStr2;
    }



console.log(canFormString("Hello", "Hi")); //false
console.log(canFormString("programming", "gaming")); //true
console.log(canFormString("halogen", "hello")); //false
console.log(canFormString("CONVERSATION", "voices rant on")); //true
console.log(canFormString("12", "123")); //false

// Task - 05

/*Requirement:
Write a function named isAnagram() which takes two string arguments and returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In the context of strings, checking if two strings are anagrams of each other means verifying if they contain the same characters in the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
isAnagram("Apple", "Peach")​ 		-> false
isAnagram("listen", "silent")​ 		-> true
isAnagram("astronomer", "moon starer")​ 	-> true
isAnagram("CINEMA", "iceman")​ 		-> true
isAnagram("123", "1234") 		-> false
 */
console.log('\n---------Task-5-------\n');

const isAnagram = (str1, str2) => {
    let emptyStr1 = "";
    let emptyStr2 = "";
    
    for (let char of str1) {
        if (char !== ' ') {
            emptyStr1 += char.toLowerCase();
        }
    }
    
    for (let char of str2) {
        if (char !== ' ') {
            emptyStr2 += char.toLowerCase();
        }
    }
    
    const sortStr1 = emptyStr1.split('').sort().join('');
    const sortStr2 = emptyStr2.split('').sort().join('');
    
    return sortStr1 === sortStr2;

}

console.log(isAnagram("Apple", "Peach")); //false
console.log(isAnagram("listen", "silent")); //true
console.log(isAnagram("astronomer", "moon starer")); //true
console.log(isAnagram("CINEMA", "iceman")); //true
console.log(isAnagram("123", "1234")); //false

// Task -06
/* Requirement:
Write a function named count() which takes an array of numbers and a boolean value as arguments. It will return the total count of the even numbers if the boolean value is true. And return the total count of the odd numbers if the boolean value is false. 
Examples:
count([1, 5, 10], true) 		-> 1
count([3, 7, 2, 5, 10], false) 	-> 3
count([-1, 1, -2, 2], true) 		-> 2
count([0, -1, 15, 1], false) 	-> 3
count([1, 2, 3, 4, -4], true) 	-> 3
*/

console.log('\n---------Task-6-------\n');

const count = (arr, isEven) => {
    let count = 0;
    arr.forEach(num => {
        if (isEven && num % 2 === 0) {
            count++;
        } else if (!isEven && num % 2 !== 0) {
            count++;
        }
    });
    return count;
}

console.log(count([1, 5, 10], true)); //1
console.log(count([3, 7, 2, 5, 10], false)); //3
console.log(count([-1, 1, -2, 2], true)); //2
console.log(count([0, -1, 15, 1], false)); //3
console.log(count([1, 2, 3, 4, -4], true)); //3

// Task -07
/*Requirement:
Write a function named sumDigitsDouble() which takes a string and returns the sum of the digits in the given String multiplied by 2. Return -1 if the given string does not have any digits. Ignore negative numbers.
Examples:
sumDigitsDouble("Javascript") 	-> -1
sumDigitsDouble("23abc45")​ 	-> 28
sumDigitsDouble("Hi-23") 	-> 10
sumDigitsDouble("ab12") 	-> 6
sumDigitsDouble("n0numh3r3") 	-> 12
*/

console.log('\n---------Task-7-------\n');

const sumDigitsDouble = str => {
    const digits = str.split('').filter(char => /[0-9]/.test(char));
    if (digits.length === 0) {
        return -1;
    }
    return digits.reduce((acc, num) => acc + parseInt(num), 0) * 2;
}

console.log(sumDigitsDouble("Javascript")); //-1
console.log(sumDigitsDouble("23abc45")); //28
console.log(sumDigitsDouble("Hi-23")); //10
console.log(sumDigitsDouble("ab12")); //6
console.log(sumDigitsDouble("n0numh3r3")); //12

// Task - 08
/* Requirement:
Write a function named countOccurrence() which takes two string arguments and returns how many times that the first 
string can form the second string.
Examples:
countOccurrence("Javascript", "Java") 	-> 1
countOccurrence("Hello", "World") 		-> 0
countOccurrence("Can I can a can", "anc")​ 	-> 3
countOccurrence("Hello", "l")​ 		-> 2
countOccurrence("IT conversations", "IT")​ 	-> 2
*/
console.log('\n---------Task-8-------\n');

const countOccurrence = (str1, str2) => {
        let count = 0;
        let index = str1.indexOf(str2);
        while (index !== -1) {
            count++;
            index = str1.indexOf(str2, index + 1);
        }
        
        return count;
    }

console.log(countOccurrence("Javascript", "Java")); //1
console.log(countOccurrence("Hello", "World")); //0
console.log(countOccurrence("Can I can a can", "anc")); //3
console.log(countOccurrence("Hello", "l")); //2
console.log(countOccurrence("IT conversations", "IT")); //2





