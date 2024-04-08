/**
 * bmi = weight / height ^ 2
 */

// Step 1
// Get elements
// input, btn, result

// Step 2
// Attach an event
// Get values
// Do calculations

// Step 3
// Show result => append to DOM


const weightEl = document.querySelector('#weight');
const heightEl = document.querySelector('#height');
const resultEl = document.querySelector('#result');
const btnEl = document.querySelector('#btn');


btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    const weight = parseFloat(weightEl.value);
    const height = parseFloat(heightEl.value);

    if(height ===''|| height === undefined || isNaN(height)|| height < 0){
        resultEl.textContent = 'Please provide a valid height';
    } else if(weight ===''|| weight === undefined || isNaN(weight) || weight < 0){
        resultEl.textContent = 'Please provide a valid weight';
    } else{
        const bmi = (weight/ height).toFixed(2);
        resultEl.textContent = `Your BMI is ${bmi}`;
}
})
4]\







