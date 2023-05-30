/**
 * reverse a string using a for loop(no using .reverse())
 * Write a for loop that calculates and prints the sum of all numbers from 1 to 100.
 * Write a for loop that prints the multiplication table for a given number(you can set your condition to stop at 10)
 */

// let str = "Hello Muchi";  
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         result = str[i];
//     }
//     console.log(result);

// reverse a string using a for loop(no using .reverse())
let str = "Hello Muchi";
let result = '';
// result = str.length-1;
// console.log(str[10]);
for(let i=str.length-1; i >= 0;  i--){
    result = str[i];
    // console.log(result);
}

let sum = 0;
for(let i=0; i<=100; i++){
    sum += i;
    console.log(sum);
}