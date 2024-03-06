// Task - Double or Triple the Word 
/* Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
Examples: 
doubleOrTripleWord("Tech")    
doubleOrTripleWord("Apple")    
doubleOrTripleWord("")     
doubleOrTripleWord(" ")     
doubleOrTripleWord("1")     
doubleOrTripleWord("22")     
First and Last Word -> "TechTechTech" -> "AppleApple” -> "" -> " " -> "11" -> "222222"  */

console.log('\n------------------- Double or Triple the Word -------------------\n');

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) {
        return word.repeat(3);
    } else {
        return word.repeat(2);
    }
}   

console.log(doubleOrTripleWord("Tech")); // "TechTechTech"
console.log(doubleOrTripleWord("Apple")); // "AppleApple"
console.log(doubleOrTripleWord("")); // ""
console.log(doubleOrTripleWord(" ")); // " "

// Task - First and Last Word
/*Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
Examples: 
firstLastWord("Hello World")    
firstLastWord("I like JavaScript")   
firstLastWord("Hello")     
firstLastWord("")      
firstLastWord(" 
")     -> "HelloWorld" -> "IJavaScript” -> "HelloH */
console.log('\n------------------- First and Last Word -------------------\n');

function firstlastWord(word) {
    if (word === "") {
        return "";
    } else {
        return word.split(" ")[0] + word.split(" ")[word.split(" ").length - 1];
    }
}
    console.log(firstlastWord("Hello World")); // "HelloWorld"
    console.log(firstlastWord("I like JavaScript")); // "IJavaScript"
    console.log(firstlastWord("Hello")); // "HelloH"
    console.log(firstlastWord("")); // ""
    console.log(firstlastWord(" ")); // ""



