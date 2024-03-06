const students = [
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullah', 'Tania', 'Mustafa'],
        ['Marta', 'Niko', 'Mykola']
    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max']
    ]
];

console.log(students);
console.log(students.flat());
console.log(students.flat().length); // 5
console.log(students.flat(2).length); // 15


const students = [
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullah', 'Tania', 'Mustafa'],
        ['Marta', 'Niko', 'Mykola']
    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max', [ 'Ali', 'James' ]]
    ]
];


console.log(students.flat().length); // 5
console.log(students.flat(3).length); // 17

const flatArray = students.flat(Infinity);
console.log(flatArray);

console.log(students);