// Task-1
/* Requirement:
Write a function named as tripleWord() which takes a string word as an 
argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
tripleWord("Tech")  -> "TechTechTech"
tripleWord("Global")  -> "GlobalGlobalGlobal" */

function tripleWord(word) {
    return word + word + word
}

console.log(tripleWord('word'));


// Task - 2

/* Write a function named as has4() which takes a string word as an 
argument and returns true if given string has at least 4 characters, and 
false otherwise when invoked.
Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
*/

function has4(word) {
    return word.length >=4
}

console.log ('TechGlobal')



// Task-3
/* Write a function named as celciusToFahrenheit() which takes a number 
to be considered as Celcius value and returns the Fahrenheit value when 
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
celciusToFahrenheit(25)  -> 77
celciusToFahrenheit(0)  -> 32
celciusToFahrenheit(-10)  -> 14 */

function celciusToFahrenheit(celcius) {
    return (celcius * 9) /5 + 32
}
console.log(celciusToFahrenheit(30));


// Task-4
/* Write a function named as kgToPounds() which takes a number to be 
considered as Kilograms value and returns the Pounds value when 
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to 
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220 */

function kgToPounds(number) {
    return number *2.2
}

console.log(kgToPounds(30))



//Task-5
/* Write 2 functions named as rectangleArea() and rectanglePerimeter() 
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32 */

function rectangleArea(width, height) {
    return width * height
}
console.log(rectangleArea(30,40));

function rectenglePerimeter(width,height) {
    return 2 * (width + height)
}

console.log(rectanglePerimeter(30,40));

//Task - 6 
/* Write 2 functions named as squareArea() and squarePerimeter() which 
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/
function squareArea(side) {
    return side * side
}
console.log(squareArea(30));

function squarePerimeter(side) {
    return 4 * side
}

console.log(squarePerimeter(30));



