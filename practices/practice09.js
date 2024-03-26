const { Actions } = require('./../utils/actions.js');

/*
TASK-PART-1
/*
1. Create a class called Actions (in utils package and in a file called as actions.js)
2. Create 3 static asynchronous functions with the details given below in this class
*/


//TASK-PART-2
/*
Create a function called as visitUrl()
- it takes an argument url
- it returns a Promise which will be resolved if url starts with 'www' or 'https://'
- resolve message will be 'URL visited successfully'
- the Promise will be rejected if url does not start with 'www' or 'https://' with a message 'Wrong URL'
- delay this method for 1 second for demo purposes
*/

//TASK-PART-3
/*
Create a function called as login()
- it takes 2 arguments username and password
- it returns a Promise which will be resolved if username = 'TechGlobal' and password = 'Test1234'
- resolve message will be 'Logged in successfully'
- the Promise will be rejected whether username or password is wrong with a message 'Wrong 
credentials'
- delay this method for 3 seconds for demo purposes
*/
//TASK-PART-4
/*
Create a function called as validateTitle()
- it takes an argument title
- it returns a Promise which will be resolved if the title is not empty, undefined or null
- resolve message will be 'Title validated successfully'
- the Promise will be rejected if title is empty, null or undefined with a message 'Wrong title'
- delay this method for half a second for demo purposes
*/


//TASK-PART-5
/*
Export the Actions class with CommonJS Modules (using module.exports)
*/

//TASK-PART-6
/*
Create a new file called as practice09.js (under practices package)
Import the Actions class with CommonJS Modules (using require)
*/


///TASK-PART-7
/*
Create a test method called as test1()
- Invoke visitUrl(), login() and validateTitle() synchronously in this method (use then() and catch() 
methods)
- Validate the output is as below
    OUTPUT:
    URL visited successfully
    Logged in successfully
    Title validated successfully
*/

function test1(){
    Actions.visitURL('https://www.google.com')
    .then(() => Actions.login('TechGlobal', 'Test1234'))
    .then(() => Actions.validateTitle('Anything'))
    .catch(error => console.log(error))
}

test1();


//TASK-PART-8
/*
Create a test method called as test2()
- Invoke visitUrl(), login() and validateTitle() synchronously in this method (use async-await keywords)
- Validate the output is as below
    OUTPUT:
    URL visited successfully
    Logged in successfully
    Title validated successfully
*/
/*NOTE: To practice errors, provide wrong URL, credentials, or title 
respectively to make sure your error-handling works properly.

*/

async function test2(){
    try{
        await Actions.visitURL('https://www.google.com');
        await Actions.login('TechGlobal', 'Test1234');
        await Actions.validateTitle('Javascript');
    } catch (error){
        console.log(error);
    }
}

test2();