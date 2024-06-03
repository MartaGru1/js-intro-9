// Task -1

/* Requirement:
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}
*/

console.log('\n---------Task-1-------\n');

const countVC = (str) => {
    return VC_Count = {
        'vowels': str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length,
        'consonants' :  str.split('').filter(x => (x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z') && !('aeiouAEIOU'.includes(x))).length
    }
}

console.log(countVC("Hello")); //{vowels: 2, consonants: 3}
console.log(countVC("Programming")); //{vowels: 3, consonants: 8}
console.log(countVC("123AbC")); //{vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz")); //{vowels: 0, consonants: 3}
console.log(countVC("")); //{vowels: 0, consonants: 0}


// Task -2

/*Requirement:
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}
 */

console.log('\n---------Task-2-------\n');

const countChars = (str) => {
    str = str.replaceAll(' ', '')
    let charCount = {}

    let letterCount = str.split('').filter(x => x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z').length
    letterCount > 0 ? charCount['letters'] = letterCount : ''


    let numberCount = str.split('').filter(x => x >= '0' && x <= '9').length
    numberCount > 0 ? charCount['numbers'] = numberCount : ''


    let specialCount = str.split('').filter(x => !(x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z')).filter(x => !(x >= '0' && x <= '9')).length
    specialCount > 0 ? charCount['specials'] = specialCount : ''

    return charCount
}

console.log(countChars("Hello")); //{letters: 5}
console.log(countChars("Programming 123")); //{letters: 11, numbers: 3}
console.log(countChars("123AbC!@#")); //{letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321")); //{numbers: 10}
console.log(countChars("     ")); //{}
console.log(countChars("")); //{}


// Task -3

/*Requirement:
Write a function named maxOccurrences() which takes a string argument and returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
Examples:
maxOccurrences("Hello")​           	-> "l"
maxOccurrences("Occurrences") 	-> "c"
maxOccurrences("    ab    ")​    	-> "al"
maxOccurrences("12   3   21")   	-> "1"
maxOccurrences("      ")   ​ 	-> ""
maxOccurrences("")   		-> ""
 */

console.log('\n---------Task-3-------\n');

const maxOccurrences = (str) => {
    let occurences = {}
    let highestCount = 0;
    let highestChar = '';

    str.split('').forEach(e =>e !== ' ' ? occurences[e] = occurences[e] + 1 || 1 : '');

    for(key in occurences){
        if(occurences[key] > highestCount){
            highestCount = occurences[key]
            highestChar = key;
        }
    }

    return highestChar

}

console.log(maxOccurrences("Hello")); //"l"
console.log(maxOccurrences("Occurrences")); //"c"
console.log(maxOccurrences("    ab    ")); //"al"
console.log(maxOccurrences("12   3   21")); //"1"
console.log(maxOccurrences("     ")); //""
console.log(maxOccurrences("")); //""


// Task -4

/*Requirement:
Write a function named starOut() which takes a string argument and returns it back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd") 	-> "ad"
starOut("ab**cd") 	-> "ad"
starOut("xm*sm*sy") 	-> "xy"
starOut("abc")   ​	-> "abc"
starOut("***")   	-> ""
starOut("   ")   ​ 	-> "   "
starOut("")   	-> ""
 */

console.log('\n---------Task-4-------\n');

const starOut = (str) => {
    let strAsArr = str.split('');

    while(strAsArr.includes('*')){
        const indexOfStar = strAsArr.indexOf('*');
        const indexBeforeStar = indexOfStar - 1;
        const indexAfterStar = indexOfStar + 1;

        while(strAsArr[indexAfterStar] === '*'){
            strAsArr.splice(indexAfterStar, 1);
        }

        strAsArr.splice(indexBeforeStar, 3)

    }

    return strAsArr.join('');
}

console.log(starOut("ab*cd")); //"ad"
console.log(starOut("ab**cd")); //"ad"
console.log(starOut("xm*sm*sy")); //"xy"
console.log(starOut("abc")); //"abc"
console.log(starOut("***")); //""
console.log(starOut("   ")); //"   "
console.log(starOut("")); //""

// Task -5

/*Requirement:
Write a function named romanToInt() which takes a string roman numeral as its arguments and return the roman numeral converted to the number. 
A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I") 		-> 1
romanToInt("IV") 		-> 4
romanToInt("CXII") 		-> 112
romanToInt("MMM") 		-> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	​-> 1666
 */

console.log('\n---------Task-5-------\n');

const romanToInt = (roman) => {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    return roman.split('').reduce((result, numberal, i) => values[numberal] < values[roman[i+1]] ? result - values[numberal] : result + values[numberal],0)


    // let result = 0;

    // for(let i = 0; i < roman.length; i++){
    //     if(values[roman[i]] < values[roman[i+1]]) result -= values[roman[i]]
    //     else result += values[roman[i]]
    // }

    // return result

}

console.log(romanToInt("I")); //1
console.log(romanToInt("IV")); //4
console.log(romanToInt("CXII")); //112
console.log(romanToInt("MMM")); //3000
console.log(romanToInt("MMMDCCCLXXXVIII")); //3888
console.log(romanToInt("MDCLXVI")); //1666
