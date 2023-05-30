/**
 * Exvercise:
 * Writing loops that accomplish tasks as listed below:
 */

// 1. count down from 10 - 1 
for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("====================");

// 2. output odd numbers from 1 - 10 
for (let i = 1; i <= 10; i++) {
    if (i % 2!== 0) {
        console.log(i);
    }
}

console.log("====================");
// output even numbers form 1 - 10 
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("====================");

// output multiples of 3 starting at 6 ending at 60 
for (let i = 6; i <= 60; i ++) {
    if (i % 3 === 0) {
            console.log(i);
        }
}

console.log("====================");

// Output an increasing number of # symbols, from 1 to 7, as shown below.

for (let i = 1; i <= 7; i++) {
    let output = "#".repeat(i);
        console.log(output);    
}

console.log("====================");

/**
 * Now, write a for loop that iterates from 1 to 20. The loop should:
Print “prime” for all prime numbers.
Print “even” for all even numbers.
Print “odd” for all odd numbers.
Treat 2 as an even number and 1 & 3 as odd, rather than prime.
 */

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i + " is " +"prime");
    } else if (i % 2 === 0) {
        console.log(i + " is " +"even");
    } else if (i % 3 === 0) {
        console.log(i + " is " +"odd");
    } else {
        console.log(i);
    }
}
