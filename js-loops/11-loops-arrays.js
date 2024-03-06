// Please find the biggest odd number from the array -> 3
let biggestOdd; // 3
for(const number of nums) { // 0
    if(number % 2 !== 0 && (biggestOdd === undefined || number > biggestOdd)) {
        biggestOdd = number;
    }
}
console.log(biggestOdd); // 3

// Find the first city that has the odd length  -> Chicago
console.log('\n-----------Find the first city that has the odd length------------\n');

const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

for(const city of cities) {
    if(city.length % 2 !== 0) {
        console.log(city);
        break;
    }
}


// Find the cities that has length more than 5 -> ['Berlin', 'Istanbul', 'Chicago' ]
console.log('\n-----------Find the cities that has length more than 5------------\n');

const cityWithLength6orMore = [];

for(const city of cities) {
    if(city.length > 5) {
        cityWithLength6orMore.push(city);
    }
}
console.log(cityWithLength6orMore);


//Find all the cities that has i or I in the name -> ['Berlin', 'Chicago', 'Kyiv', 'Istanbul'];
console.log('\n-----------Find all the cities that has i or I in the name------------\n');

const citiesWithI = [];

for(const city of cities) {
    if(city.toLowerCase().includes('i')) {
        citiesWithI.push(city);
    }
}
console.log(citiesWithI);


// or
for(const city of cities) {
    if(city.toLowerCase().indexOf('i') >= 0) {
        citiesWithI.push(city);
    }
}
console.log(citiesWithI);

