// task -1
/*Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])                         -> 1 */

function firstPos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return arr[i];
        }
    }
}
// 
function firstPos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            return arr[i];
        }
    }
}


console.log(firstPos([0, 3, -9, 5, 8])); //3
console.log(firstPos([-2, 0, -7, 10, -5])); //10    
console.log(firstPos([1, 2, 3, -2])); //1


// task -2 
/*Write a function named as lastNeg() which takes an array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2 
*/
function lastNeg(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
}
//
function lastNeg(arr) {
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {

        if(arr[i] < 0) {
            return arr[i]
    
        }
    }
}

console.log(lastNeg([0, 3, -9, 5, 8])); //-9
console.log(lastNeg([-2, 0, -7, 10, -5])); //-5
console.log(lastNeg([1, 2, 3, -2])); //-2


// task -3
/*Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> "yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> "Banana"
firstLongest(["purple", "yellow", "orange"])  -> "purple" */

function firstLongest(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
// 
function firstLongest (arr) {
    let longestWord = ""
    for(const word of arr){
         if (word.length > longestWord.length) longestWord = word
    
    }
    return longestWord
}

console.log(firstLongest(["red", "blue", "yellow", "white"])); //yellow
console.log(firstLongest(["Apple", "Banana", "Orange"])); //Banana
console.log(firstLongest(["purple", "yellow", "orange"])); //purple


// task -4
/*Requirement:
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the shortest count of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])  -> 
"red"
lastShortest(["Apple", "Banana", "Mango"])  -> 
"Mango"
lastShortest(["white", "yellow", "brown"])  -> */

function lastShortest(arr) {
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length <= shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
}

function lastShortest(arr) {
    let shortest = arr[0];
    for (const word of arr) {
        if (word.length <= shortest.length) {
            shortest = word;
        }
    }       
}

function lastShortest (arr){
    arr.reverse()
    let shortestWord = arr[0]
    for(const word of arr){
        if (word.length < shortestWord.length) shortestWord = word
   
   }
   return shortestWord 
}

console.log(lastShortest(["red", "blue", "yellow", "white"])); //red
console.log(lastShortest(["Apple", "Banana", "Mango"])); //Mango
console.log(lastShortest(["white", "yellow", "brown"])); //white


// task -5
/*Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8])  -> 8
max([-2, 0, -7, 10, -5])  -> 10
max([1, 2, 3, -2])                 -> 3*/

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


function max(arr){
    let newBiggest = arr [0]
    for (const numbers of arr){

        if (numbers > newBiggest ) newBiggest = numbers
    }
    return newBiggest
 }


console.log(max([0, 3, -9, 5, 8])); //8
console.log(max([-2, 0, -7, 10, -5])); //10
console.log(max([1, 2, 3, -2])); //3



// task -6

/* Requirement:
Write a function named as min() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> */

function min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
//
function min(arr){
    let newSmallest = arr [0]
    for (const numbers of arr){

        if (numbers < newSmallest ) newSmallest = numbers
    }
    return newSmallest

}

console.log(min([0, 3, 5, 8])); //0
console.log(min([-2, 0, -7, 10, -5])); //-7
console.log(min([1, 2, 3, 15])); //1


//Task -7
/*Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and returns the all the matching elements from the 
both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])  -> [ 20, 
50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])  -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ])  -> 
["abc" ]  */

function commonElements(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}

function commonElements(arr1, arr2) {
    let arr3 = [];
    for (const element of arr1) {
        if (arr2.includes(element)) {
            arr3.push(element);
        }
    }
    return arr3;
}
console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70])); //[20, 50, 70]
console.log(commonElements([30, 50, 70], [20, 100, 300])); //[]
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"])); //["abc"]

