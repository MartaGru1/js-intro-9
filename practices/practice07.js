/*JavaScript Class_Practice07 | Objects – Arrays – Loops
TASK-1  You are given a JS Array below:
Count how many users are older than 30    -> 2
Count how many users live in Chicago      -> 2
Count how many users live in IL      -> 3
Count how many users’ emails has Gmail domain   -> 2
Find and store all the users name younger than 35     -> [ 'Tech', 'Jane', 
'Alex' ]
Find average of ages of all users     -> 28 */

const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

let olderThan30 = 0;
let liveInChicago = 0;
let liveInIL = 0;
let emailsGmail = 0;
let youngerThan35 = [];
let avgAge = 0;

for(const user of users) {
    if(user.age > 30) olderThan30++;
    if(user.address.city === 'Chicago') liveInChicago++;
    if(user.address.state === 'IL') liveInIL++;
    if(user.email.includes('@gmail.com')) emailsGmail++;
    if(user.age < 35) youngerThan35.push(user.firstName); avgAge += user.age;
}

console.log(olderThan30);
console.log(liveInChicago);
console.log(liveInIL);
console.log(emailsGmail);
console.log(youngerThan35);
console.log(avgAge / users.length);

let older30 = 0
let liveChicago = 0
let liveIL = 0
let gmailCount = 0
let younger35 = []
let ageSum = 0


for (const user of users) {
    if (user.age > 30) older30++
    if (user.address.city.toLowerCase() === 'chicago') liveChicago++
    if (user.address.state === 'IL') liveIL++
    if (user.email.includes('gmail')) gmailCount++
    if (user.age < 35) younger35.push(user.firstName)
    ageSum += user.age
}
let avgAge = ageSum/users.length

console.log(older30, liveChicago, liveIL, gmailCount, younger35, avgAge)
/*TASK-2You are given a JS Array below:
Find the most expensive product    -> MacBook Pro 16-inch
Find the least expensive product    -> AirPods Pro
Find the product with the biggest quantity    -> AirPods Pro
Find the product with the smallest quantity   -> MacBook Pro 16-inch
Find all the product names    -> [ 'iPhone 14 Pro', 'MacBook Pro 16-
inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ] */

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
    productName: "iPad Air",
    quantity: 75,
    price: 599.99,
    },
{
    productName: "Apple Watch Series 7",
    quantity: 100,
    price: 399.99,
},
{
    productName: "AirPods Pro",
    quantity: 200,
    price: 249.99,
},
];

let mostExpensive = appleStore[0];
let leastExpensive = appleStore[0];
let biggestQuantity = appleStore[0];
let smallestQuantity = appleStore[0];
let productNames = [];

for(const product of appleStore) {
    if(product.price > mostExpensive.price) mostExpensive = product;
    if(product.price < leastExpensive.price) leastExpensive = product;
    if(product.quantity > biggestQuantity.quantity) biggestQuantity = product;
    if(product.quantity < smallestQuantity.quantity) smallestQuantity = product;
    productNames.push(product.productName);
}

console.log(mostExpensive.productName);
console.log(leastExpensive.productName);
console.log(biggestQuantity.productName);
console.log(smallestQuantity.productName);
console.log(productNames);


let mostExpensive;
let highestPrice = 0;
let leastExpensive;
let lowestPrice = Infinity;
let mostCommon;
let biggestQ = 0;
let leastCommon;
let smallestQ = Infinity;
let productList = [];

for (const product of appleStore) {
    productList.push(product.productName);
    if (product.price > highestPrice) {
        mostExpensive = product.productName 
        highestPrice = product.price
    }
    if (product.price < lowestPrice) {
        leastExpensive = product.productName 
        lowestPrice = product.price
    }
    if (product.quantity > biggestQ) {
        mostCommon = product.productName
        biggestQ = product.quantity
    }
    if (product.quantity < smallestQ) {
        leastCommon = product.productName
        smallestQ = product.quantity
    }
}

console.log(mostExpensive, leastExpensive, mostCommon, leastCommon, productList)

/*TASK-3 You are given a JS Array below:
Find the cheapest book in the bookstore           -> To Kill a Mockingbird
Find the most expensive book in the bookstore   -> Harry Potter and the Sorcerer's 
Stone
Find all Classic books         -> [ 'The Great Gatsby', 'To Kill a 
Mockingbird' ] */

const bookstore = [
{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 9.99
},
{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    price: 7.99
},
{
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    price: 12.49
},
{
title: "Harry Potter and the Sorcerer's Stone",
author: "J.K. Rowling",
genre: "Fantasy",
price: 14.99
},
{
title: "The Da Vinci Code",
author: "Dan Brown",
genre: "Mystery",
price: 10.99
}
];

/*let cheapestBook = bookstore[0];
let mostExpensiveBook = bookstore[0];
let classicBooks = [];

for(const book of bookstore) {
    if(book.price < cheapestBook.price) cheapestBook = book;
    if(book.price > mostExpensiveBook.price) mostExpensiveBook = book;
    if(book.genre === 'Classic') classicBooks.push(book.title);
}   

console.log(cheapestBook.title);
console.log(mostExpensiveBook.title);
console.log(classicBooks);*/


let cheapestBookPrice = Infinity;
let cheapestBook;
let mostExpensiveBookPrice = 0;
let mostExpensiveBook;
let classicBooks = [];


for (const book of bookstore){
    if(book.price < cheapestBookPrice){
        cheapestBookPrice = book.price 
        cheapestBook = book.title
    } 
    if(book.price > mostExpensiveBookPrice){
        mostExpensiveBookPrice = book.price
        mostExpensiveBook = book.title
    }
    if(book.genre.toLowerCase().includes("classic")) classicBooks.push(book.title)
}

console.log(cheapestBook, mostExpensiveBook, classicBooks)

 /*TASK-4 You are given a JS Array below:
Calculate the total price of products in the cart     -> 2444
Find the brands of all the products in the cart   -> [ 'Dell', 'Apple', 'Sony' ]
Find all the items in the cart with their quantity  -> [ 'Laptop, 1', 'Smartphone 2', 
'Headphones, 3' ] */

const shoppingCart = {
userId: 12345,
items: [
{
    productId: 1,
    productName: 'Laptop',
    price: 999.00,
    quantity: 1,
    specifications: {
        brand: 'Dell',
        screen: '15.6 inches',
        processor: 'Intel Core i7'
    }
},
{
    productId: 2,
    productName: 'Smartphone',
    price: 499.00,
    quantity: 2,
    specifications: {
        brand: 'Apple',
        model: 'iPhone 12',
        color: 'Space Gray'
    }
},
{
    productId: 3,
    productName: 'Headphones',
    price: 149.00,
    quantity: 3,
    specifications: {
        brand: 'Sony',
        type: 'Over-ear',
        wireless: true
    }
}
],
shippingAddress: {
street: '123 Main Street',
city: 'Anytown',
zipCode: '12345'
},
orderDate: '2023-08-29'
};

/*let totalPrice = 0;
let brands = [];
let itemsWithQuantity = [];

for(const item of shoppingCart.items) {
    totalPrice += item.price * item.quantity;
    brands.push(item.specifications.brand);
    itemsWithQuantity.push(`${item.productName}, ${item.quantity}`);
}

console.log(totalPrice);
console.log(brands);
console.log(itemsWithQuantity);*/

let totalPrice = 0;
const brands = [];
const itemsWithQuantity = [];
for (const item of shoppingCart.items) {
    totalPrice += item.price * item.quantity;
}
for (const item of shoppingCart.items) {
    brands.push(item.specifications.brand);
}
for (const item of shoppingCart.items) {
    itemsWithQuantity.push(`${item.productName}, ${item.quantity}`);
}
console.log(totalPrice);
console.log(brands);
console.log(itemsWithQuantity);