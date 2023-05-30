/**
 * delete()
 * Array elements can be deleted using the JavaScript operator delete
 * Using delete leaves undefined holes in the array
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
delete fruits[2];
console.log(fruits);