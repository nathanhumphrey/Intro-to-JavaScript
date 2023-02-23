// no IIFE, just testing

// while loop
let whileOutput = document.querySelector('.while');

let whileCount = 1;

while (whileCount <= 10) {
    whileOutput.innerHTML += `${whileCount} `;
    whileCount += 1; // or ++ if you prefer
}

// do-while loop
let doWhileOutput = document.querySelector('.do-while');

let doWhileCount = 1;

do {
    doWhileOutput.innerHTML += `${doWhileCount} `;
    doWhileCount += 1; // or ++ if you prefer
} while (doWhileCount <= 10);

// for loop
let forOutput = document.querySelector('.for');

for (let forCount = 1; forCount <= 10; forCount += 1) {
    forOutput.innerHTML += `${forCount} `;
}

// working with arrays
let letters = ['a', 'b', 'c', 'd', 'e'];

// for loop with array
let arrayForOutput = document.querySelector('.array-for');

for (let idx = 0; idx < letters.length; idx += 1) {
    arrayForOutput.innerHTML += `${letters[idx]} `;
}

// forEach with array
let arrayForEachOutput = document.querySelector('.array-forEach');

letters.forEach((letter) => {
    arrayForEachOutput.innerHTML += `${letter} `;
});