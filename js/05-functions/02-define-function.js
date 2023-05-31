/**
 * FUNCTION:
 * defined with the function key word
 * defined using:
 */


 /** 1. function declaration
 *      function functionName(parameters){
 *         // code
 *  }
 */

 function myFunction(a, b){
    return a * b;
 }myFunction(2, 3);


 /* 2. function expression
 * declaring a function as a variable
 * a function expression can be stored as a variable
 *      const x = function(parameters){
 *         // code
 *      }
 * function expressions are unknown functions, they are functions without a name, they invoked using the variable name, therefore they do not need a name
 */
const x = function(a, b){
    return a * b;
};
// console.log(x(2, 3));



/**
 * The Function() Constructor
 * Function() is a built-in JavaScript function constructor that is used to create a new function object.
 */

const newFunction = new Function("x", "y", "return x * y");
let z = newFunction(5,5);
// console.log(z);