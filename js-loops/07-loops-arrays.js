const names = ['John', 'Jane','Alex', 'Max', 'James'];

// looping array elements with for loop
console.log(console.log('\n------for loop-----\n'))

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// looping array elements with for..of loop
console.log('\n------for..of loop-----\n')

for(const name of names) {
    console.log(name);
}

const nNames = ['John', 'Jane','Alex', 'Max', 'james'];

console.log('\n------for..of loop start j-----\n')

let countJ1 = 0;
for (const name of nNames) {
    if(name.toLowerCase().startsWith('j')) countJ1++
}
console.log(countJ1)


console.log('\n------for loop start J----\n')

let countJ2 = 0;
for(let i = 0; i < nNames.length; i++){
    if(nNames[i].toUpperCase()[0] === 'J') countJ2++;
}
console.log(countJ2);