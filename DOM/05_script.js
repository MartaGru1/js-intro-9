/* Event:
- simply an object
*/

const formEl= document.querySelector('form');
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('#btn');


/* Mouse events:
- click, double click
-mouse events
*/

//Click event
btnEl.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);

})

//Double click

btn2El.addEventListener('dblclick',(event)=>{
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);

})


/* Keyboard events:
- keydown, keyup, keypress
*/

/*const bodyEl = document.querySelector('body');

bodyEl.addEventListener('keydown',(event)=>{

    if(event.code === 'Enter') {
        console.log(event);
    } else {
        console.log('Wrong keyboard');
    }
})
*/


/* Form events:
- submit, reset
- input, change
*/

inputEl.addEventListener('input',(event)=>{
    //console.log(event);
    console.log(event.target.value);
})

