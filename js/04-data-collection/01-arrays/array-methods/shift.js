/**
 * shift()
 * emoves the first array element and "shifts" all other elements to a lower index
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[2])
fruits.shift();
// console.log(fruits[2])
// console.log(fruits);


/**
 * unshift()
 * adds a new element to an array (at the beginning), and "unshifts" older elements:
 * returns the new array length
 */
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2);
console.log(fruits2[2]);
fruits2.unshift("Pineapple");
console.log(fruits2[2]);
console.log(fruits2);