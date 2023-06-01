/**
 * FUNCTION:
 * defined with the function key word
 * the basic function of a function is tie together lines of code, ans give you one executable unit that has its own name
 * the name of a function is then used to invoke the function.
 * Once invoked, all the units of code in a function are executed.
 * defined in tow ways
 * 1. function declaration
 * 2. function expression
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