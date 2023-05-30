/**
 * Popping and Pushing
 * two methods for removing and adding items into an array
 * pop - REMOVE ITEMS from an array, like POP-OUT
 * push - ADD ITEMS to an array, like PUSH-INTO
*/

// POP METHOD 
// removes the last item in an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
let fruit = fruits.pop();
// console.log(fruits);
// console.log(fruit);

// PUSH METHOD
// adds a new item to the end of an array
console.log(fruits);
let newFruit = fruits.push("Pineapple");
console.log(fruits);

// length property works in a similar way to push method
fruits[fruits.length] = "guava";
console.log(fruits);
