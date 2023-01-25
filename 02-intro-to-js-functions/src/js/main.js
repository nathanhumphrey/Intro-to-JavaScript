// greet the user using built-in functions
let greetUser = (prefix, suffix = '') => {
    let username = prompt('Enter your name');
    alert(prefix + ' ' + username + suffix);
}

// call our new custom function
greetUser('Welcome,', '!');

// example of returning a value
function addTwoNumbers(num1, num2) {
    return num1 + num2;
    // return effectively ends the function, the following
    // won't execute
    console.log('this won\'t execute');
}

let first = prompt('Enter first number');
// convert the string value to a number
first = Number(first);

// prompt and convert at once
let second = Number(prompt('Enter second number'));

let sum = addTwoNumbers(first, second);

let output = document.querySelector('.output');

// display the expression and result
output.innerText = first + ' + ' + second + ' = ' + sum;