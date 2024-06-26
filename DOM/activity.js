/*
1. Ask user a name => prompt()

    1.1 Alert users name => alert()
    1.2 Console 'You didn't provide your name. Bye Bye' and quit.


2. Confirm if user wants to continie => confirm()
    2.1 If user says 'YES' => Alert 'You have chosen to continue"
    2.2 If user says 'NO' => Alert 'You canceled the action'

3. Console users browser innerWidth and innerHeight

4. Reload the page after 10 seconds to start again
    setTimeout, window.location.reload()
*/


const userName = prompt('Enter your name');
if(userName) {
    alert(`Hello ${userName}`);
}
else {
    console.log('You didn\'t provide your name. Bye Bye');
}

const userChoice = confirm('Do you want to continue?');
if(userChoice) {
    alert('You have chosen to continue');
}
else {
    alert('You canceled the action');
}

console.log(window.innerHeight);
console.log(window.innerWidth);


setTimeout(() => {
    window.location.reload();
}
, 10000);
