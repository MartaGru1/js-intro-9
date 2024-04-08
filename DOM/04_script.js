/**
 * Get content of an element
 *  - innerHTML
 *  - textContent
 *  - innerText
 */

const box1 = document.getElementById('box');
console.log(box1)
console.log('innerHTML of box1: ', box1.innerHTML)
console.log('textContent of box1: ', box1.textContent)
console.log('innerText of box1: ', box1.innerText);


/**
 * Add content to an existing element
 * 
 * - innerHTML can accept text, html tags...
 * - textContent and innerText only accepts text
 */

// Below 3 does the same thing
const box2 = document.getElementById('box2');
box2.innerHTML = 'Updated text from innerHTML'
box2.textContent = 'Updated text from textContent'
box2.innerText = 'Updated text from innerText'

// Difference
box2.innerHTML = '<p style="color: red">Updated text from innerHTML</p>'
// box2.textContent = '<p>Updated text from textContent</p>'
// box2.innerText = '<p>Updated text from innerText</p>'

/**
 * Create an element
 * - createElement('tagName')
 * - innerHTML
 * -apend()
 */

const h1 = document.createElement('h1');
console.log(h1); // <h1></h1>

//2. Add content to the element

h1.textContent = 'This is content of h1';

//3. Append the element to the body

const body = document.querySelector('body');
body.append(h1);



/**
 * className vs classList
 */

const section = document.querySelector('section');
console.log(section);

console.log(section.className); // string
console.log(section.classList); // DOMTokenList

//Update class name of an element

section.className = 's1';
console.log(section);

// add more classes to section

section.className += ' s2';
console.log(section); 

// classList

section.classList.add('s3');
console.log(section);

// remove class
section.classList.remove('s3');
console.log(section);

// with className you have to do more manipulations
// with classList you can add, remove, toggle, contains

// create class name from scratch

const divEl = document.createElement('div');
divEl.className = 'cls1';
divEl.classList.add('');



